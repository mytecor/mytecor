import { GetBounds, getBoundsUnrestricted } from './getBounds'
import { useSetLocalPosition } from './useSetLocalPosition'
import { useSyncPosition } from './useSyncPosition'
import {
  Position,
  getMouseShift,
  getDragZoneRelativeMousePosition,
  addMouseShift,
  Rect,
} from './utils'

import { DragZoneContext } from 'ui/DragZone'

import { Dispatch, useContext, useEffect, useMemo, useRef } from 'react'

type Props = {
  position?: Position
  padding?: number
  getBounds?: GetBounds
  onChange?: Dispatch<Position>
}

export const useDraggable = (props: Props) => {
  const { position, getBounds = getBoundsUnrestricted, onChange } = props

  const draggable = useRef<HTMLElement>()
  const mouseShift = useRef<Position>({ x: 0, y: 0 })

  const { syncState, localPosition } = useSyncPosition({
    position,
    draggable: draggable.current,
  })

  const dragZone = useContext(DragZoneContext)
  const setLocalPosition = useSetLocalPosition(draggable.current)

  const actions = useMemo(() => {
    const handleMouseMove = (e: PointerEvent) => {
      if (!draggable.current) {
        return
      }

      const dragZoneBox = (dragZone ?? document.body).getBoundingClientRect()
      const draggableBox = draggable.current.getBoundingClientRect()

      const mousePosition = getDragZoneRelativeMousePosition(dragZoneBox, {
        x: e.clientX,
        y: e.clientY,
      })

      let draggablePosition = addMouseShift(mousePosition, mouseShift.current)

      const draggableRect: Rect = {
        ...draggablePosition,
        width: draggableBox.width,
        height: draggableBox.height,
      }

      const dragZoneRect: Rect = {
        x: 0,
        y: 0,
        width: dragZoneBox.width,
        height: dragZoneBox.height,
      }

      draggablePosition = getBounds(draggableRect, dragZoneRect, e)

      if (!localPosition.current) {
        setLocalPosition(draggablePosition)
      }

      onChange?.(draggablePosition)
    }

    const clearListeners = () => {
      document.removeEventListener('pointermove', handleMouseMove)
      document.removeEventListener('pointerup', clearListeners)
    }

    const startDragging = (e: DragEvent) => {
      e.preventDefault()

      if (!draggable.current) {
        return
      }

      mouseShift.current = getMouseShift(draggable.current, {
        x: e.clientX,
        y: e.clientY,
      })

      document.addEventListener('pointermove', handleMouseMove)
      document.addEventListener('pointerup', clearListeners)
    }

    return {
      clearListeners,
      startDragging,
    }
  }, [dragZone, localPosition, getBounds, onChange, setLocalPosition])

  useEffect(() => {
    const node = draggable.current
    node?.addEventListener('dragstart', actions.startDragging)

    return () => {
      actions.clearListeners()
      node?.removeEventListener('dragstart', actions.startDragging)
    }
  }, [actions])

  return (node: HTMLElement | null) => {
    if (node) {
      draggable.current = node
      syncState()
    }
  }
}
