import { $AppWindow } from './AppWindow.module.css'

import { withClassName } from 'lib/classNameRegistry'
import { RoundedBlock } from 'ui/RoundedBlock'

import { FocusEventHandler, ReactNode } from 'react'

type Props = {
  children: ReactNode
  onFocus?: FocusEventHandler
}

export const AppWindow = withClassName<Props>((props) => {
  const { className, children, onFocus } = props

  return (
    <RoundedBlock className={className} tabIndex={0} onFocus={onFocus}>
      {children}
    </RoundedBlock>
  )
}, $AppWindow)
