import { $RoundedBlock, $RoundedBlockText } from './RoundedBlock.module.css'

import { Text } from 'ui/Text'

import cnj from 'cnj'
import { DetailedHTMLProps, FC } from 'react'

type Props = DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

Text.className.add($RoundedBlockText)

export const RoundedBlock: FC<Props> = (props) => {
  const { className, ...rest } = props
  return <div className={cnj($RoundedBlock, className)} {...rest} />
}
