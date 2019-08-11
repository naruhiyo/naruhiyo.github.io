import * as yaml from "js-yaml"
import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import en from '../i18n/en.json'
import ja from '../i18n/ja.json'

const resources = {
  ja: ja,
  en: en,
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ja",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })
  console.warn(resources);

export default i18n
