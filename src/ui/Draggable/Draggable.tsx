import { $Draggable } from './Draggable.module.css'
import { useDraggable } from './useDraggable'

import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
} & Parameters<typeof useDraggable>[0]

export const Draggable: FC<Props> = (props) => {
  const { children, position, getBounds, padding, onChange } = props

  const setRef = useDraggable({
    position,
    padding,
    getBounds,
    onChange,
  })

  return (
    <div className={$Draggable} ref={setRef}>
      {children}
    </div>
  )
}
