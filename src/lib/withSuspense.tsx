import { FC, Suspense } from 'react'

export const withSuspense = <T extends {}>(Comp: FC<T>) => {
  return (props: T) => (
    <Suspense>
      <Comp {...props} />
    </Suspense>
  )
}
