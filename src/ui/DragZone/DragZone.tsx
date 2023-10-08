import { $DragZone } from './DragZone.module.css'

import cnj from 'cnj'
import { FC, createContext, useState } from 'react'

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const DragZoneContext = createContext<HTMLDivElement | undefined>(
  undefined,
)

export const DragZone: FC<Props> = (props) => {
  const { className, ...rest } = props
  const [ref, setRef] = useState<HTMLDivElement>()

  return (
    <DragZoneContext.Provider value={ref}>
      <div
        ref={(node) => {
          if (node) {
            setRef(node)
          }
        }}
        className={cnj($DragZone, className)}
        {...rest}
      />
    </DragZoneContext.Provider>
  )
}
