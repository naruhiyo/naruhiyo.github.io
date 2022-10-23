import i18next from 'i18next';
import i18nextBrowserLanguagedetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const resources = {
  ja: {
    translation: await import('@src/i18n/ja.json')
  },
  en: {
    translation: await import('@src/i18n/en.json')
  }
};

i18next
  .use(i18nextBrowserLanguagedetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'ja',
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    returnObjects: true
  });

export default i18next;
