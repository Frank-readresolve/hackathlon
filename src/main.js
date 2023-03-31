import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import Header from './components/commons/Header.vue';
import Footer from './components/commons/Footer.vue';

const app = createApp(App);

app.use(router);

app.component('Header', Header);
app.component('Footer', Footer);

app.mount('#app');
