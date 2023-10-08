import { AppProps } from 'lib/app'

import { FC, createContext } from 'react'

export type AppState = {
  type: FC<AppProps>
  id: string
}

export type WindowManagerActions = {
  openApp: (app: FC<AppProps>) => void
  close: (id: string) => void
  bringToTop: (id: string) => void
  minimize: (id: string) => void
  toggleFullscreen: (id: string) => void
}

export const WindowManagerListContext = createContext<AppState[] | null>(null)
export const WindowManagerActionsContext =
  createContext<WindowManagerActions | null>(null)
