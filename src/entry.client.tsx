import { Root } from './Root'

import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <StrictMode>
    <Root />
  </StrictMode>,
)
