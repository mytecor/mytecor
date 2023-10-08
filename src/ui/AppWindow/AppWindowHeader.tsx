import { AppWindow } from './AppWindow'
import {
  $AppWindowHeader,
  $AppWindowHeaderFocusTarget,
} from './AppWindowHeader.module.css'

import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
  draggable?: boolean
}

AppWindow.className.add($AppWindowHeaderFocusTarget)

export const AppWindowHeader: FC<Props> = (props) => {
  const { children, draggable } = props

  return (
    <header className={$AppWindowHeader} draggable={draggable}>
      {children}
    </header>
  )
}
