import { AvailableLanguages } from 'i18n'

export const loadStrings = (lang: string) => {
  switch (lang) {
    case AvailableLanguages.Ru:
      return import('./ru')
  }

  return import('./en')
}
