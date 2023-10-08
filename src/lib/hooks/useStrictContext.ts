import { Context, useContext } from 'react'

export const useStrictContext = <T>(context: Context<T>) => {
  const value = useContext(context)

  if (!value) {
    throw Error(`No ${context.displayName}`)
  }

  return value
}
