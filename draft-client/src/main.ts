import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import Calendar from 'primevue/calendar';
import DataTable from 'primevue/datatable';
import Dialog from 'primevue/dialog';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Column from 'primevue/column';

import 'primevue/resources/themes/saga-blue/theme.css';      // Theme
import 'primevue/resources/primevue.min.css';               // Core CSS
import 'primeicons/primeicons.css'; 

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(PrimeVue);
app.use(ToastService);
app.component("Calendar", Calendar);
app.component('InputText',InputText);
app.component('InputNumber',InputNumber);
app.component('DataTable',DataTable);
app.component('Dialog',Dialog);
app.component('Button',Button);
app.component('Column',Column);
app.mount('#app');

