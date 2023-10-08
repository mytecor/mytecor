import {
  $ButtonSizeLarge,
  $ButtonSizeLargeIcon,
  $ButtonSizeLargeText,
} from './ButtonSizeLarge.module.css'
import {
  $ButtonSizeMedium,
  $ButtonSizeMediumIcon,
  $ButtonSizeMediumText,
} from './ButtonSizeMedium.module.css'
import {
  $ButtonSizeSmall,
  $ButtonSizeSmallIcon,
  $ButtonSizeSmallText,
} from './ButtonSizeSmall.module.css'

import { Icon } from 'ui/Icon'
import { Text } from 'ui/Text'

Text.className.add($ButtonSizeSmallText)
Text.className.add($ButtonSizeMediumText)
Text.className.add($ButtonSizeLargeText)

Icon.className.add($ButtonSizeSmallIcon)
Icon.className.add($ButtonSizeMediumIcon)
Icon.className.add($ButtonSizeLargeIcon)

export const $sizes = {
  small: $ButtonSizeSmall,
  medium: $ButtonSizeMedium,
  large: $ButtonSizeLarge,
}
