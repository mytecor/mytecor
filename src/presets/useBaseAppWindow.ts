import { useStrictContext } from 'lib/hooks/useStrictContext'
import { GetBounds } from 'ui/Draggable'
import { Position, addPadding, getPositionInBounds } from 'ui/Draggable/utils'
import { useSystemConfig } from 'ui/SystemConfig'
import { WindowManagerActionsContext } from 'ui/WindowManager/contexts'

import { useCallback } from 'react'

type Props = {
  id: string
  allowMinimize?: boolean
  allowFullscreen?: boolean
}

const calculatePixelatedPosition = (
  position: Position,
  gap: number,
): Position => {
  return {
    x: ((position.x / gap) ^ 0) * gap,
    y: ((position.y / gap) ^ 0) * gap,
  }
}

const getBoundsOsStyle: GetBounds = (draggableRect, dragZoneRect) => {
  const padding = 30

  const bounds = addPadding(dragZoneRect, {
    left: padding - draggableRect.width,
    top: 0,
    right: padding - draggableRect.width,
    bottom: padding - draggableRect.height,
  })

  return getPositionInBounds(draggableRect, bounds)
}

export const useBaseAppWindow = (props: Props) => {
  const { id, allowMinimize, allowFullscreen } = props

  const context = useStrictContext(WindowManagerActionsContext)

  const [{ screenResolution }] = useSystemConfig()

  const getBounds: GetBounds = useCallback(
    (...args) => {
      const gap = 1 / screenResolution
      return calculatePixelatedPosition(getBoundsOsStyle(...args), gap)
    },
    [screenResolution],
  )

  const onFocus = useCallback(() => {
    return context.bringToTop(id)
  }, [id, context])

  const controls = (
    [
      { handler: () => context.close(id), type: 'close', allowed: true },
      {
        handler: () => context.minimize(id),
        type: 'minimize',
        allowed: allowMinimize,
      },
      {
        handler: () => context.toggleFullscreen(id),
        type: 'fullscreen',
        allowed: allowFullscreen,
      },
    ] as const
  ).filter((item) => item.allowed)

  return { controls, onFocus, getBounds }
}
