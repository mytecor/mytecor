import { loadStrings } from './strings'

import { AvailableLanguages } from 'i18n'
import { AppProps } from 'lib/app'
import { useStrings } from 'lib/i18n'
import { withSuspense } from 'lib/withSuspense'
import { BaseAppWindow } from 'preset/BaseAppWindow'
import { Button } from 'ui/Button'
import { useSystemConfig } from 'ui/SystemConfig'
import { Text } from 'ui/Text'

import { FC, useCallback } from 'react'

export const Settings: FC<AppProps> = withSuspense((props) => {
  const { id } = props

  const Strings = useStrings(loadStrings)

  const [config, setConfig] = useSystemConfig()
  const nextLang =
    config.lang === AvailableLanguages.En
      ? AvailableLanguages.Ru
      : AvailableLanguages.En

  const onLanguageChange = useCallback(() => {
    setConfig((config) => {
      return {
        ...config,
        lang: nextLang,
      }
    })
  }, [nextLang, setConfig])

  return (
    <BaseAppWindow id={id} title={<Strings.AppTitle />}>
      <Strings.Language />

      <Button onClick={onLanguageChange}>
        <Text>{nextLang}</Text>
      </Button>
    </BaseAppWindow>
  )
})
