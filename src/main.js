import { createApp } from 'vue';
import App from './App.vue';

// 1. Importa Vuetify
import vuetify from './vuetify';

// 2. Importa la configuración de i18n
import i18n from './i18n';

const app = createApp(App);

// 3. Usa ambos plugins en la aplicación
app.use(vuetify);
app.use(i18n);

app.mount('#app');