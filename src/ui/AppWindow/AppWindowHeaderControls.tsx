import { $AppWindowHeaderControls } from './AppWindowHeaderControls.module.css'

import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const AppWindowHeaderControls: FC<Props> = (props) => {
  const { children } = props

  return <div className={$AppWindowHeaderControls}>{children}</div>
}
