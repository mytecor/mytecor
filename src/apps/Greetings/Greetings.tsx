import { loadStrings } from './strings'

import { AppProps } from 'lib/app'
import { useStrings } from 'lib/i18n'
import { withSuspense } from 'lib/withSuspense'
import { BaseAppWindow } from 'preset/BaseAppWindow'

import { FC } from 'react'

export const Greetings: FC<AppProps> = withSuspense((props) => {
  const { id } = props

  const Strings = useStrings(loadStrings)

  return (
    <BaseAppWindow id={id} title={<Strings.AppTitle />}>
      <Strings.Hello />
      <br />
      <Strings.About />
    </BaseAppWindow>
  )
})
