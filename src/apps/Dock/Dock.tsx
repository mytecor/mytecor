import { $Dock } from './Dock.module.css'

import { AppProps } from 'lib/app'
import { RoundedBlock } from 'ui/RoundedBlock'
import { Text } from 'ui/Text'

import { FC } from 'react'

export const Dock: FC<AppProps> = () => {
  return (
    <RoundedBlock className={$Dock}>
      <Text>dock</Text>
    </RoundedBlock>
  )
}
