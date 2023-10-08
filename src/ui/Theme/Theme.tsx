import { $Theme } from './Theme.module.css'

import { DownscaleFilter } from 'ui/DownscaleFilter'
import { Themes, useSystemConfig } from 'ui/SystemConfig'

import cnj from 'cnj'
import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Theme: FC<Props> = (props) => {
  const { children } = props

  const [{ uiScale, screenResolution, theme }] = useSystemConfig()

  const style: Record<string, string | number> = {
    '--ui-scale': uiScale,
  }

  const $className = cnj(
    $Theme,
    theme === Themes.Dark ? 'theme-dark' : 'theme-light',
  )

  return (
    <div style={style} className={$className}>
      {screenResolution !== 1 && (
        <DownscaleFilter id="downscale" size={1 / screenResolution} />
      )}
      {children}
    </div>
  )
}
