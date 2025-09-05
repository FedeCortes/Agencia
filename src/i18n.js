import { createI18n } from 'vue-i18n';

const messages = {
  es: {
    message: {
      welcome: '¡Hola!',
      welcome_title: '¡Bienvenido a tu aplicación Vue!',
      welcome_subtitle: 'Comienza a construir la mejor experiencia web.',
      call_to_action: 'Empezar ahora',
      changeLang: 'Cambiar Idioma',
      languageMenu: 'Elegir Idioma'
    },
  },
  en: {
    message: {
      welcome: 'Hello!',
      welcome_title: 'Welcome to your Vue App!',
      welcome_subtitle: 'Start building the best web experience.',
      call_to_action: 'Get Started',
      changeLang: 'Change Language',
      languageMenu: 'Choose Language',
    },
  },
  it: {
    message: {
      welcome: 'Ciao!',
      welcome_title: 'Benvenuto nella tua App Vue!',
      welcome_subtitle: 'Inizia a costruire la migliore esperienza web.',
      call_to_action: 'Inizia ora',
      changeLang: 'Cambia lingua',
      languageMenu: 'Scegli la lingua'
    },
  },
};

// Detectar idioma del navegador
const userLocale = navigator.language || navigator.userLanguage;
const shortLocale = userLocale.split('-')[0]; // 'es', 'en', 'it'
const supportedLocales = ['es', 'en', 'it'];
const finalLocale = supportedLocales.includes(shortLocale) ? shortLocale : 'es';

// Crear instancia de i18n
const i18n = createI18n({
  legacy: false, // si usás Composition API (setup)
  locale: finalLocale,
  fallbackLocale: 'es',
  messages,
});

export default i18n;
