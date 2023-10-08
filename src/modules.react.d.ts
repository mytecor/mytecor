export * from 'react'

declare module 'react' {
  import { Context } from 'react'

  type Usable<T> = Promise<T> | Context<T>
  export const use: <T>(usable: Usable<T>) => T
}
