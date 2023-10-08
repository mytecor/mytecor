import { Strings } from 'lib/i18n'
import { Text } from 'ui/Text'

export default {
  AppTitle: () => 'About',
  Title: (props: { version: string }) => <Text>VladOS {props.version}</Text>,
  Info: (props: {
    username: string
    firstName: string
    buildDate: string
    primaryColor: string
  }) => (
    <Text>
      Username: ........ {props.username}
      <br />
      First name: ...... {props.firstName}
      <br />
      Build date: ...... {props.buildDate}
      <br />
      Primary color: ... {props.primaryColor}
    </Text>
  ),
} satisfies Strings
