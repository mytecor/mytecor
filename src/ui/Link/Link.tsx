import { FC, ReactNode } from 'react'

type Props = {
  to: string
  children: ReactNode
}

export const Link: FC<Props> = (props) => {
  const { to, children } = props

  return <a href={to}>{children}</a>
}
