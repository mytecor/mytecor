import { $DownscaleFilter } from './DownscaleFilter.module.css'

import { FC } from 'react'

type Props = {
  id: string
  size: number
}

export const DownscaleFilter: FC<Props> = (props) => {
  const { id, size } = props

  return (
    <svg className={$DownscaleFilter}>
      <defs>
        <filter id={id} x="0" y="0">
          <feFlood width="0.0001" height="0.0001" />
          <feComposite width={size} height={size} />
          <feTile result="a" />
          <feComposite in="SourceGraphic" in2="a" operator="in" />
          <feMorphology operator="dilate" radius={size / 2} />
        </filter>
      </defs>
    </svg>
  )
}
