import { useBaseAppWindow } from './useBaseAppWindow'

import {
  AppWindow,
  AppWindowHeader,
  AppWindowHeaderControl,
  AppWindowHeaderControls,
  AppWindowHeaderFiller,
  AppWindowHeaderTitle,
} from 'ui/AppWindow'
import { Draggable } from 'ui/Draggable'
import { Text } from 'ui/Text'

import { FC, ReactNode } from 'react'

type Props = {
  id: string
  title: ReactNode
  children?: ReactNode
  allowMinimize?: boolean
  allowFullscreen?: boolean
}

export const BaseAppWindow: FC<Props> = (props) => {
  const { children, title } = props

  const { controls, onFocus, getBounds } = useBaseAppWindow(props)

  return (
    <Draggable getBounds={getBounds}>
      <AppWindow onFocus={onFocus}>
        <AppWindowHeader draggable>
          <AppWindowHeaderControls>
            {controls.map((item) => (
              <AppWindowHeaderControl
                onClick={item.handler}
                type={item.type}
                key={item.type}
              />
            ))}
          </AppWindowHeaderControls>

          <AppWindowHeaderTitle>
            <Text>{title}</Text>
          </AppWindowHeaderTitle>

          <AppWindowHeaderFiller count={controls.length} />
        </AppWindowHeader>

        {children}
      </AppWindow>
    </Draggable>
  )
}
