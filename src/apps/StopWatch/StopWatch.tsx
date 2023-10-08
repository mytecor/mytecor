import { useStopWatch } from './useStopWatch'

import { AppProps } from 'lib/app'
import { BaseAppWindow } from 'preset/BaseAppWindow'
import { Button } from 'ui/Button'
import { Text } from 'ui/Text'

import { FC } from 'react'

export const StopWatch: FC<AppProps> = (props) => {
  const { id } = props
  const { active, time, toggleActive } = useStopWatch()

  return (
    <BaseAppWindow id={id} title={`StopWatch ${time}`}>
      <Button onClick={toggleActive}>
        <Text>{active ? 'Stop' : 'Start'}</Text>
      </Button>
    </BaseAppWindow>
  )
}
