import { Root } from './Root'

import { FC, ReactNode } from 'react'
// @ts-expect-error TS7016
import { renderToReadableStream } from 'react-dom/server.browser'

type Props = {
  entries: string[]
  styles?: string[]
  dynamicStyles?: string[]
  dynamicEntries?: string[]
  children?: ReactNode
}

const Html: FC<Props> = (props) => {
  const { children, dynamicEntries, entries, styles, dynamicStyles } = props

  const title = 'mytecor'
  const description = 'web page'

  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/20505643"
        />
        {styles?.map((fileName) => {
          return <link key={fileName} rel="stylesheet" href={fileName} />
        })}
        {dynamicEntries?.map((fileName) => {
          return <link key={fileName} rel="modulepreload" href={fileName} />
        })}
        {dynamicStyles?.map((fileName) => {
          return (
            <link key={fileName} rel="prefetch" href={fileName} as="style" />
          )
        })}
      </head>
      <body>
        <div id="root">{children}</div>
        {entries.map((fileName) => {
          return <script key={fileName} src={fileName} type="module" />
        })}
      </body>
    </html>
  )
}

export const renderHtml = async (props: Props): Promise<string> => {
  const stream = await renderToReadableStream(
    <Html {...props}>
      <Root />
    </Html>,
  )

  const chunks: Uint8Array[] = []

  for await (const chunk of stream) {
    chunks.push(chunk)
  }

  return Buffer.concat(chunks).toString('utf8')
}
