import en from './en'

import { Text } from 'ui/Text'

export default {
  AppTitle: () => 'О системе',
  Title: (props: { version: string }) => <Text>VladOS {props.version}</Text>,
  Info: (props: {
    username: string
    firstName: string
    buildDate: string
    primaryColor: string
  }) => (
    <Text>
      Ник: ............. {props.username}
      <br />
      Имя: ............. {props.firstName}
      <br />
      Дата сборки: ..... {props.buildDate}
      <br />
      Основной цвет: ... {props.primaryColor}
    </Text>
  ),
} satisfies typeof en
