import { createApp } from 'vue';
import { createPinia } from 'pinia'
import App from './App.vue';
import VueSplide from '@splidejs/vue-splide';
import './registerServiceWorker';
import router from './router';


const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(VueSplide)
app.mount('#app')
