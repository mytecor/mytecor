import { $Button } from './Button.module.css'
import { $sizes } from './ButtonSize'
import { $types } from './ButtonType'

import { withClassName } from 'lib/classNameRegistry'

import { cnj } from 'cnj'
import { ElementType, MouseEvent, ReactNode } from 'react'

type Props = {
  children?: ReactNode
  href?: string
  size?: keyof typeof $sizes
  type?: keyof typeof $types
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

export const Button = withClassName<Props>((props) => {
  const { href, size, type, children, className, onClick } = props
  const Tag = 'button' as ElementType

  const $className = cnj(
    className,
    $sizes[size ?? 'medium'],
    $types[type ?? 'secondary'],
  )

  return (
    <Tag className={$className} href={href} onClick={onClick}>
      {children}
    </Tag>
  )
}, $Button)
