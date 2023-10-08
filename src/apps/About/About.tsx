import { loadStrings } from './strings'

import { AppProps } from 'lib/app'
import { useStrings } from 'lib/i18n'
import { withSuspense } from 'lib/withSuspense'
import { BaseAppWindow } from 'preset/BaseAppWindow'

import { FC } from 'react'

export const About: FC<AppProps> = withSuspense((props) => {
  const { id } = props

  const Strings = useStrings(loadStrings)

  return (
    <BaseAppWindow id={id} title={<Strings.AppTitle />}>
      <Strings.Title version="1.0.0" />
      <br />
      <Strings.Info
        username="mytecor"
        buildDate="12.12.2001"
        firstName="Vlad"
        primaryColor="purple"
      />
    </BaseAppWindow>
  )
})
