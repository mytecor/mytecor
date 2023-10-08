import {
  WindowManagerActionsContext,
  WindowManagerListContext,
} from './contexts'
import { useWindowManager } from './useWindowManager'

import { DragZone } from 'ui/DragZone'

import { FC } from 'react'

export const WindowManager: FC = (props) => {
  const { actions, apps } = useWindowManager()

  return (
    <DragZone {...props}>
      <WindowManagerListContext.Provider value={apps}>
        <WindowManagerActionsContext.Provider value={actions}>
          {apps.map((app) => (
            <app.type id={app.id} key={app.id} />
          ))}
        </WindowManagerActionsContext.Provider>
      </WindowManagerListContext.Provider>
    </DragZone>
  )
}
