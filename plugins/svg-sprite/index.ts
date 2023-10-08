import {
  Compiler as SVGCompiler,
  CompilerConfig as SVGCompilerConfig,
  SpriteConfig,
} from 'svg-mixer'
import { Config as SVGOConfig, optimize } from 'svgo'
import { createFilter, Plugin, ResolvedConfig } from 'vite'

import { createHash } from 'node:crypto'
import { readFile } from 'node:fs/promises'
import { parse, relative } from 'node:path'

type Options = {
  fileName: string
  include: string[] | string | null
  exclude: string[] | string | null
  svgo?: SVGOConfig
  symbolId:
    | string
    | ((name: string, content?: string) => string | Promise<string>)
}

const renderNamePattern = (
  pattern: string,
  replacements: Record<string, Function>,
): string => {
  return pattern.replace(
    /\[(\w+)(:\d+)?]/g,
    (_match: string, type: string, size?: string) => {
      return replacements[type](size != null && Number.parseInt(size.slice(1)))
    },
  )
}

const createSVGMixer = (): SVGCompiler => {
  return new SVGCompiler({
    prettify: true,
    spriteConfig: {
      usages: false,
      attrs: {
        style: 'display: none',
      },
    } satisfies Partial<SpriteConfig> as unknown as SpriteConfig,
  } satisfies Partial<SVGCompilerConfig> as unknown as SVGCompilerConfig)
}

const renderSprite = async (
  svgMixer: SVGCompiler,
  svgo?: SVGOConfig,
): Promise<string> => {
  const sprite = await svgMixer.compile()

  if (svgo == null) {
    return sprite.content
  }

  return optimize(sprite.content, svgo).data
}

export const svgSprite = (options?: Partial<Options>): Plugin => {
  const opts: Options = {
    fileName: 'sprite.svg',
    symbolId: '[name]-[hash:5]',
    include: '**.svg',
    exclude: null,
    svgo: undefined,
    ...options,
  }

  const filter = createFilter(opts.include, opts.exclude, {
    resolve: false,
  })

  const getSymbolId = async (
    fileName: string,
    content: string,
  ): Promise<string> => {
    const pattern =
      typeof opts.symbolId === 'function'
        ? await opts.symbolId(fileName, content)
        : opts.symbolId

    const { name, ext } = parse(fileName)

    return renderNamePattern(pattern, {
      hash: (size = 5) => {
        return createHash('sha256').update(content).digest('hex').slice(0, size)
      },
      name: () => name,
      ext: () => ext,
    })
  }

  let svgMixer: SVGCompiler
  let spriteAssetId: string
  let config: ResolvedConfig

  return {
    name: 'svg-sprite',
    enforce: 'pre',

    configResolved(resolvedConfig) {
      config = resolvedConfig
    },

    buildStart() {
      svgMixer = createSVGMixer()

      if (config.command === 'build') {
        spriteAssetId = this.emitFile({
          type: 'asset',
          name: opts.fileName,
          source: undefined,
        })
      }
    },

    configureServer: (server) => {
      server.middlewares.use((req, res, next): void => {
        const url = new URL(req.url as string, 'http://localhost')
        const path = url.pathname

        const processSvg = async (): Promise<void> => {
          const symbol = svgMixer.symbols.find(
            ({ image }) => image.path === path,
          )

          if (symbol == null) {
            throw Error('No sprite found')
          }

          const localMixer = createSVGMixer()
          localMixer.addSymbol(symbol)

          res.setHeader('content-type', 'image/svg+xml')
          res.end(await renderSprite(localMixer, opts.svgo))
        }

        if (filter(path) && !url.searchParams.has('import')) {
          processSvg().catch((error) => {
            res.writeHead(500).end(error?.message)
          })

          return
        }

        next()
      })
    },

    async load(fileName, options) {
      if (filter(fileName)) {
        const content = await readFile(fileName, 'utf-8')
        const id = await getSymbolId(fileName, content)

        const path = '/' + relative(config.root, fileName)

        const url =
          config.command === 'build'
            ? `import.meta.ROLLUP_FILE_URL_${spriteAssetId}`
            : `'${path}?t=${Date.now()}'`

        const symbol = svgMixer.createSymbol({ content, path, id })
        const { width, height } = symbol

        const inlineSymbol = `{
          width: ${width ?? 'undefined'},
          height: ${height ?? 'undefined'},
          url: ${url},
          id: '${id}'
        }`

        if (options?.ssr === true) {
          return `export default ${inlineSymbol}`
        }

        svgMixer.addSymbol(symbol)

        return `
          import {injectSprite, removeSprite} from 'svg-sprite/runtime'

          const symbol = ${inlineSymbol}

          ${
            config.command === 'build'
              ? ''
              : 'import.meta.hot.prune(() => removeSprite(symbol))'
          }

          export default injectSprite(symbol)
        `
      }
    },

    async buildEnd() {
      const sprite = await renderSprite(svgMixer, opts.svgo)
      this.setAssetSource(spriteAssetId, sprite)
    },
  }
}
