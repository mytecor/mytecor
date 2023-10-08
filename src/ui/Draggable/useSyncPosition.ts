import { useSetLocalPosition } from './useSetLocalPosition'
import { Position } from './utils'

import { useMemo, useRef } from 'react'

type Props = {
  draggable: HTMLElement | undefined
  position: Position | undefined
}

export const useSyncPosition = (props: Props) => {
  const { position, draggable } = props

  const setLocalPosition = useSetLocalPosition(draggable)

  const localPosition = useRef<Position>()
  localPosition.current = position

  useMemo(() => {
    if (position) {
      setLocalPosition(position)
    }
  }, [setLocalPosition, position])

  return {
    localPosition,
    syncState: () => {
      if (position) {
        setLocalPosition(position)
      }
    },
  }
}
