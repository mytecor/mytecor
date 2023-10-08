import { AppState, WindowManagerActions } from './contexts'

import { AppProps } from 'lib/app'

import { uniqueId } from 'lodash'
import { FC, lazy, useMemo, useState } from 'react'

const Greetings = lazy(() => import('app/Greetings'))
const Dock = lazy(() => import('app/Dock'))
const Settings = lazy(() => import('app/Settings'))
const StopWatch = lazy(() => import('app/StopWatch'))
const ImageViewer = lazy(() => import('app/ImageViewer'))
const About = lazy(() => import('app/About'))

export const useWindowManager = () => {
  const [apps, setState] = useState<AppState[]>(() => [
    {
      id: uniqueId(),
      type: StopWatch,
    },
    {
      id: uniqueId(),
      type: ImageViewer,
    },
    {
      id: uniqueId(),
      type: Settings,
    },
    {
      id: uniqueId(),
      type: Dock,
    },
    {
      id: uniqueId(),
      type: About,
    },
    {
      id: uniqueId(),
      type: Greetings,
    },
  ])

  const actions = useMemo((): WindowManagerActions => {
    const close = (id: string) => {
      setState((state) => state.filter((app) => app.id !== id))
    }

    const bringToTop = (id: string) => {
      setState((state) => {
        const app = state.find((app) => app.id === id)

        if (!app) {
          return state
        }

        return [...state.filter((app) => app.id !== id), app]
      })
    }

    const openApp = (app: FC<AppProps>) => {
      setState((state) => [
        ...state,
        {
          id: uniqueId(),
          type: app,
        },
      ])
    }

    return {
      close,
      bringToTop,
      openApp,
      minimize: () => {},
      toggleFullscreen: () => {},
    }
  }, [])

  return { apps, actions }
}
