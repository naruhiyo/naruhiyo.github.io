import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '@src/locales/en.json';
import ja from '@src/locales/ja.json';

const LOCALE_KEY = 'locale';

const storage = typeof window !== 'undefined' ? window.localStorage : null;

const updateDocumentMeta = (lng: string) => {
  document.documentElement.lang = lng;
  document.title = i18n.t('meta.title');
  document.querySelector('meta[name="description"]')?.setAttribute('content', i18n.t('meta.description'));
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', i18n.t('meta.ogDescription'));
};

const storedLocale = storage?.getItem(LOCALE_KEY);

void i18n.use(initReactI18next).init({
  resources: {
    ja: { translation: ja },
    en: { translation: en }
  },
  lng: storedLocale === 'en' ? 'en' : 'ja',
  fallbackLng: 'ja',
  interpolation: {
    escapeValue: false
  },
  initImmediate: false,
  react: {
    useSuspense: false
  }
});

i18n.on('languageChanged', (lng) => {
  storage?.setItem(LOCALE_KEY, lng);
  updateDocumentMeta(lng);
});

updateDocumentMeta(i18n.language);

export const changeLocale = (lng: string) => {
  void i18n.changeLanguage(lng);
};

export default i18n;
