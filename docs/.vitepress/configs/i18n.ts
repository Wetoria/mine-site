export const locales: LocaleMapKeys[] = [
  'zh',
  'en',
]

export const localeMap = {
  zh: 'zh',
  en: 'en',
}

export type LocaleMapKeys = keyof typeof localeMap;

export type LocaleMapValues = typeof localeMap[keyof typeof localeMap];

export const browserToSiteLocalMap = {

}
