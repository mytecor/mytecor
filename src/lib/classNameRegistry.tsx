/* eslint-disable react-hooks/rules-of-hooks */

import cnj from 'cnj'
import { FC } from 'react'

const createClassNameRegistry = () => {
  let registry = new Set<string>()

  return {
    add: (className: string) => {
      registry = new Set(registry)
      registry.add(className)
    },
    get: () => {
      return [...registry].join(' ')
    },
  }
}

type Registry = ReturnType<typeof createClassNameRegistry>

export const withClassName = <Props extends {}>(
  Comp: FC<Props & { className: string }>,
  className?: string,
) => {
  const registry = createClassNameRegistry()

  if (className) {
    registry.add(className)
  }

  const wrapped: FC<Props & { className?: string }> & {
    className: Registry
  } = (props) => {
    const className = cnj(props.className, registry.get())

    return <Comp {...props} className={className} />
  }

  wrapped.className = registry

  return wrapped
}
