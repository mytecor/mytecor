import { withClassName } from 'lib/classNameRegistry'
import { Symbol } from 'svg-sprite/runtime'

type Props = {
  symbol: Symbol
}

export const Icon = withClassName<Props>((props) => {
  const { symbol, className } = props
  const { id, width, height } = symbol

  return (
    <svg width={width} height={height} className={className}>
      <use xlinkHref={`#${id}`} />
    </svg>
  )
})
