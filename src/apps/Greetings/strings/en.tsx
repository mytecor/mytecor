import { Strings } from 'lib/i18n'
import { Text } from 'ui/Text'

export default {
  AppTitle: () => 'Greetings',
  Hello: () => (
    <Text>
      Hey, <br />
      {'{'}username{'}'}
    </Text>
  ),
  About: () => <Text>/This is my place on the Internet/</Text>,
} satisfies Strings
