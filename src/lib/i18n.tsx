import { useStrictContext } from './hooks/useStrictContext'

import {
  use,
  createContext,
  FC,
  ReactNode,
  useDeferredValue,
  useMemo,
} from 'react'

const LangContext = createContext<string | null>(null)

type Props<T extends string> = {
  current: T
  children: ReactNode
}

export const Lang = <T extends string>(props: Props<T>): JSX.Element => {
  const { children, current } = props

  return <LangContext.Provider value={current}>{children}</LangContext.Provider>
}

export type Strings = {
  [K: string]: FC<any> | Strings
}

export const useStrings = <S extends Strings>(
  loader: (lang: string) => Promise<{ default: S }>,
): S => {
  const lang = useStrictContext(LangContext)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const promise = useMemo(() => loader(lang), [lang])
  const deferredPromise = useDeferredValue(promise)
  const strings = use(deferredPromise) as { default: S }

  return strings.default
}
