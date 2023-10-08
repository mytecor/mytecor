import { Position, Rect } from './utils'

export type GetBounds = (
  draggableRect: Rect,
  dragZoneRect: Rect,
  event: PointerEvent,
) => Position

export const getBoundsUnrestricted: GetBounds = (draggableRect) => draggableRect
