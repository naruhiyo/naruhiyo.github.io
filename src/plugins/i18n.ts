import i18next from "i18next"
import { initReactI18next } from "react-i18next"
import enYml from "../i18n/en.yml"
import jaYml from "../i18n/ja.yml"

const resources = {
  ja: {
    translation: jaYml
  },
  en: {
    translation: enYml
  }
}

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ja",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default i18next
