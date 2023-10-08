import { AvailableLanguages } from 'i18n'
import { useStrictContext } from 'lib/hooks/useStrictContext'
import { Lang } from 'lib/i18n'

import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react'

export enum Themes {
  Light = 'light',
  Dark = 'dark',
}

type SystemConfigType = {
  uiScale: number
  screenResolution: number
  lang: AvailableLanguages
  theme: Themes
}

type SystemConfigContextValue = [
  SystemConfigType,
  Dispatch<SetStateAction<SystemConfigType>>,
]

const SystemConfigContext = createContext<SystemConfigContextValue | null>(null)

export const useSystemConfig = () => {
  return useStrictContext(SystemConfigContext)
}

type Props = {
  children: ReactNode
}

export const SystemConfig: FC<Props> = (props) => {
  const { children } = props

  const value = useState<SystemConfigType>({
    uiScale: 2,
    screenResolution: 1,
    lang: AvailableLanguages.En,
    theme: Themes.Dark,
  })

  const [{ lang }] = value

  return (
    <Lang current={lang}>
      <SystemConfigContext.Provider value={value}>
        {children}
      </SystemConfigContext.Provider>
    </Lang>
  )
}
