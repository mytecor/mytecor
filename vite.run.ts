import { OutputChunk, RollupOutput } from 'rollup'
import { build, createServer, ViteDevServer } from 'vite'

import { writeFile } from 'fs/promises'

type StaticEntry = typeof import('./src/entry.static')

const getStaticEntry = (devServer: ViteDevServer): Promise<StaticEntry> => {
  return devServer.ssrLoadModule('./src/entry.static.tsx', {
    fixStacktrace: true,
  }) as Promise<StaticEntry>
}

const dev = async (): Promise<void> => {
  const devServer = await createServer()
  await devServer.listen()

  devServer.middlewares.use('/', (req, res, next): void => {
    const render = async (): Promise<void> => {
      const { renderHtml } = await getStaticEntry(devServer)

      const fileName = devServer.config.build.rollupOptions.input as string

      const html = await renderHtml({
        entries: [fileName],
      })

      res
        .writeHead(200, undefined, {
          'Content-Type': 'text/html',
        })
        .end(await devServer.transformIndexHtml(req.originalUrl ?? '/', html))
    }

    render().catch(next)
  })

  devServer.printUrls()
}

const prod = async (): Promise<void> => {
  process.env.NODE_ENV = 'production'

  const devServer = await createServer({
    server: { middlewareMode: true },
  })

  const [clientBuild, staticBuild] = await Promise.all([
    build(),
    getStaticEntry(devServer),
  ])

  await devServer.close()

  const { base } = devServer.config
  const { output } = clientBuild as RollupOutput

  const chunks = output.filter(({ type }) => type === 'chunk') as Array<
    OutputChunk & {
      viteMetadata: {
        importedAssets: Set<string>
        importedCss: Set<string>
      }
    }
  >

  const entries = chunks.filter((file) => file.isEntry)
  const dynamicEntries = chunks.filter((file) => file.isDynamicEntry)

  const unique = <T extends unknown[]>(arr: T): T => {
    return Array.from(new Set(arr)) as T
  }

  const styles = unique(
    entries.reduce<string[]>((acc, { viteMetadata }) => {
      return acc.concat(...viteMetadata.importedCss)
    }, []),
  )

  const dynamicStyles = unique(
    dynamicEntries.reduce<string[]>((acc, { viteMetadata }) => {
      return acc.concat(...viteMetadata.importedCss)
    }, []),
  )

  const html = await staticBuild.renderHtml({
    entries: entries.map(({ fileName }) => base + fileName),
    dynamicEntries: dynamicEntries.map(({ fileName }) => base + fileName),
    styles: styles.map((fileName) => base + fileName),
    dynamicStyles: dynamicStyles.map((fileName) => base + fileName),
  })

  await writeFile('./dist/index.html', html)
}

if (process.argv.includes('--dev')) {
  await dev()
} else {
  await prod()
}
