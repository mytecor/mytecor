import { AppWindow } from './AppWindow'
import {
  $AppWindowHeaderControlClose,
  $AppWindowHeaderControlMinimize,
  $AppWindowHeaderControlFullscreen,
  $AppWindowHeaderControlFocusTarget,
} from './AppWindowHeaderControl.module.css'

import cnj from 'cnj'
import { FC, MouseEventHandler, useCallback } from 'react'

type Props = {
  onClick: () => void
  type: 'close' | 'fullscreen' | 'minimize'
}

const classNames: Record<Props['type'], string> = {
  close: $AppWindowHeaderControlClose,
  minimize: $AppWindowHeaderControlMinimize,
  fullscreen: $AppWindowHeaderControlFullscreen,
}

AppWindow.className.add($AppWindowHeaderControlFocusTarget)

export const AppWindowHeaderControl: FC<Props> = (props) => {
  const { type, onClick } = props

  const handleDrag: MouseEventHandler = useCallback((e) => {
    e.preventDefault()
  }, [])

  return (
    <button
      className={cnj(classNames[type])}
      onClick={onClick}
      onMouseDown={handleDrag}
    />
  )
}
