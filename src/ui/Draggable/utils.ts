export type Position = {
  x: number
  y: number
}

export type Size = {
  width: number
  height: number
}

export type Rect = {
  x: number
  y: number
} & Size

export type Padding = {
  left: number
  top: number
  bottom: number
  right: number
}

export const getMouseShift = (draggable: HTMLElement, pos: Position) => {
  const { left, top } = draggable.getBoundingClientRect()
  return {
    x: pos.x - left,
    y: pos.y - top,
  }
}

export const addMouseShift = (
  position: Position,
  mouseShift: Position,
): Position => {
  return {
    x: position.x - mouseShift.x,
    y: position.y - mouseShift.y,
  }
}

export const getDragZoneRelativeMousePosition = (
  position: Position,
  mousePosition: Position,
): Position => {
  return {
    x: mousePosition.x - position.x,
    y: mousePosition.y - position.y,
  }
}

export const addPadding = (rect: Rect, padding: Padding): Rect => {
  return {
    x: rect.x + padding.left,
    y: rect.y + padding.top,
    width: rect.width - padding.right,
    height: rect.height - padding.bottom,
  }
}

export const getPositionInBounds = (rect: Rect, bounds: Rect) => {
  const newPos = { x: rect.x, y: rect.y }

  const maxY = bounds.height - rect.height
  const maxX = bounds.width - rect.width

  if (newPos.x > maxX) newPos.x = maxX
  if (newPos.y > maxY) newPos.y = maxY
  if (newPos.x < bounds.x) newPos.x = bounds.x
  if (newPos.y < bounds.y) newPos.y = bounds.y

  return newPos
}
