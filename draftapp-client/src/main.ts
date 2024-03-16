import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import './style.css'

const app = createApp(App)

// Create Pinia store
const pinia = createPinia()
app.use(pinia)

// Mount the app
app.mount('#app')
