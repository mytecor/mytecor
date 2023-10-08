import {
  $ButtonTypeLink,
  $ButtonTypeLinkText,
} from './ButtonTypeLink.module.css'
import {
  $ButtonTypeOutline,
  $ButtonTypeOutlineText,
} from './ButtonTypeOutline.module.css'
import {
  $ButtonTypePrimary,
  $ButtonTypePrimaryText,
} from './ButtonTypePrimary.module.css'
import {
  $ButtonTypeSecondary,
  $ButtonTypeSecondaryText,
} from './ButtonTypeSecondary.module.css'

import { Text } from 'ui/Text'

Text.className.add($ButtonTypeLinkText)
Text.className.add($ButtonTypePrimaryText)
Text.className.add($ButtonTypeOutlineText)
Text.className.add($ButtonTypeSecondaryText)

export const $types = {
  link: $ButtonTypeLink,
  primary: $ButtonTypePrimary,
  outline: $ButtonTypeOutline,
  secondary: $ButtonTypeSecondary,
}
