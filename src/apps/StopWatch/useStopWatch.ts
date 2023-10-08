import { useCallback, useEffect, useReducer, useRef } from 'react'

export const useStopWatch = () => {
  const [_, forceUpdate] = useReducer((i) => i + 1, 0)
  const startTime = useRef(0)
  const [currentTime, updateCurrentTime] = useReducer(
    () => new Date().getTime(),
    0,
  )

  const timer = useRef<NodeJS.Timeout>()

  const toggleActive = useCallback(() => {
    clearInterval(timer.current)

    if (timer.current !== undefined) {
      timer.current = undefined
      forceUpdate()
    } else {
      timer.current = setInterval(updateCurrentTime, 1000)
      startTime.current = new Date().getTime()

      updateCurrentTime()
    }
  }, [])

  useEffect(() => {
    return () => clearInterval(timer.current)
  }, [timer])

  return {
    active: timer.current !== undefined,
    toggleActive,
    time: new Date(currentTime - startTime.current).toISOString().slice(11, 19),
  }
}
