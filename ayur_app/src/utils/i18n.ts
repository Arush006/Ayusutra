import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'expo-localization';

import en from '../locales/en.json';
import hi from '../locales/hi.json';

const resources = {
  en: {
    translation: en
  },
  hi: {
    translation: hi
  }
};

// Get device language safely
const getDeviceLanguage = () => {
  try {
    const locales = getLocales();
    if (locales && locales.length > 0) {
      return locales[0].languageCode || 'en';
    }
    return 'en';
  } catch (error) {
    console.warn('Error getting device locale:', error);
    return 'en';
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getDeviceLanguage(), // Safe device language detection
    fallbackLng: 'en',
    
    // Fix for Intl.PluralRules compatibility
    compatibilityJSON: 'v3',
    
    interpolation: {
      escapeValue: false // React already does escaping
    },
    
    react: {
      useSuspense: false
    }
  });

export default i18n;