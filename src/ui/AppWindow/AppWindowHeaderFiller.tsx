import { $AppWindowHeaderControl } from './AppWindowHeaderControl.module.css'
import { AppWindowHeaderControls } from './AppWindowHeaderControls'

import { FC } from 'react'

type Props = {
  count: number
}

export const AppWindowHeaderFiller: FC<Props> = (props) => {
  const { count } = props

  return (
    <AppWindowHeaderControls>
      {Array.from({ length: count }, (_i, n) => (
        <div className={$AppWindowHeaderControl} key={n} />
      ))}
    </AppWindowHeaderControls>
  )
}
