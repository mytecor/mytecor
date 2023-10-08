import 'ui/layers.css'
import './Root.css'

import { ErrorMessage } from 'ui/ErrorMessage'
import { SystemConfig } from 'ui/SystemConfig'
import { Theme } from 'ui/Theme'
import { WindowManager } from 'ui/WindowManager'

import { FC } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

export const Root: FC = () => {
  return (
    <SystemConfig>
      <Theme>
        <ErrorBoundary FallbackComponent={ErrorMessage}>
          <WindowManager />
        </ErrorBoundary>
      </Theme>
    </SystemConfig>
  )
}
