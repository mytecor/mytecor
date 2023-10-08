import { AppWindow } from './AppWindow'
import {
  $AppWindowHeaderTitle,
  $AppWindowHeaderTitleAppWindow,
} from './AppWindowHeaderTitle.module.css'

import { Text } from 'ui/Text'

import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

AppWindow.className.add($AppWindowHeaderTitleAppWindow)
Text.className.add($AppWindowHeaderTitle)

export const AppWindowHeaderTitle: FC<Props> = (props) => props.children
