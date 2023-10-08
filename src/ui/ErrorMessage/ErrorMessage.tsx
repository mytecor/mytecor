import { Button } from 'ui/Button/Button'
import { Text } from 'ui/Text'

import { FC } from 'react'
import { FallbackProps } from 'react-error-boundary'

const reload = () => window.location.reload()

export const ErrorMessage: FC<FallbackProps> = (props) => {
  const { error } = props

  return (
    <div>
      <Text>Error: {error.message} </Text>
      <Button type="primary" onClick={reload}>
        try again
      </Button>
    </div>
  )
}
