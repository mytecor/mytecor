declare module '*.svg' {
  import { Symbol } from 'svg-sprite/runtime'

  const symbol: Symbol
  export default symbol
}

declare module '*.module.css'
