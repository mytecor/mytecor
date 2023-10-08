import { Position } from './utils'

import { useCallback } from 'react'

export const useSetLocalPosition = (node: HTMLElement | undefined) => {
  return useCallback(
    (position: Position) => {
      const style = node?.style

      if (style) {
        style.setProperty('--x', position.x.toString())
        style.setProperty('--y', position.y.toString())
      }
    },
    [node],
  )
}
