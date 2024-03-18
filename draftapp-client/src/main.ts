import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
const app = createApp(App)

// Create Pinia store
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.use(ElementPlus);
// Mount the app
app.mount('#app')
