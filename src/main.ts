import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import appRouter from './router/app-router';
import appStore from './store/app-store';

createApp(App)
    .use(appRouter)
    .use(appStore)
    .mount('#app')
