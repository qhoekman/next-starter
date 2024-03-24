import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const i18nNamespaces = ['common', 'example', 'auth'];
const i18nLanguages = ['nl'];
const i18nResources = i18nNamespaces.reduce((acc, ns) => {
  i18nLanguages.forEach((lng) => {
    if (!acc[lng]) acc[lng] = {};
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const locale = require(`../../locales/${lng}/${ns}.json`); // If the number of translations grows we should consider loading them lazily
    if (locale) {
      acc[lng][ns] = locale;
    }
  });

  return acc;
}, {} as Record<string, Record<string, Record<string, string>>>);
export const DEFAULT_LANGUAGE = i18nLanguages[0];

i18next.use(initReactI18next).init({
  lng: DEFAULT_LANGUAGE,
  fallbackLng: DEFAULT_LANGUAGE,
  defaultNS: i18nNamespaces[0],
  ns: i18nNamespaces,
  supportedLngs: i18nLanguages,
  debug: false,
  returnNull: false,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources: i18nResources,
});

export default i18next;
