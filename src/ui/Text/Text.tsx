import {
  $Text,
  $TextBold,
  $TextError,
  $TextSecondary,
  $TextUppercase,
} from './Text.module.css'

import { withClassName } from 'lib/classNameRegistry'

import { cnj } from 'cnj'
import { ReactNode } from 'react'

const types = {
  error: $TextError,
  secondary: $TextSecondary,
}

type Props = {
  bold?: boolean
  uppercase?: boolean
  type?: keyof typeof types
  children: ReactNode
}

export const Text = withClassName<Props>((props) => {
  const { children, className, bold, uppercase, type } = props

  const $className = cnj(
    bold === true && $TextBold,
    uppercase === true && $TextUppercase,
    typeof type !== 'undefined' && types[type],
    className,
  )

  return <span className={$className}>{children}</span>
}, $Text)
