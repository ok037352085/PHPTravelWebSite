import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import './data/firebase'

createApp(App).use(router).mount('#app')