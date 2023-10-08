import { AppProps } from 'lib/app'
import { BaseAppWindow } from 'preset/BaseAppWindow'

import { FC } from 'react'

export const ImageViewer: FC<AppProps> = (props) => {
  const { id } = props

  return (
    <BaseAppWindow id={id} title="ImageViewer" allowMinimize allowFullscreen />
  )
}
