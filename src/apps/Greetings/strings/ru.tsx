import en from './en'

import { Text } from 'ui/Text'

export default {
  AppTitle: () => 'Приветствие',
  Hello: () => (
    <Text>
      Эй, <br />
      {'{'}юзернейм{'}'}
    </Text>
  ),
  About: () => <Text>/Это моя страничка в сети интернет/</Text>,
} satisfies typeof en
