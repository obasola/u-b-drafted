import { createPinia } from "pinia";
import Button from "primevue/button";
import PrimeVue from "primevue/config";
import InputText from "primevue/inputtext";
import DataTable from "primevue/datatable";
import Toast from "primevue/toast";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";
import apiClient from "./plugins/axios";

const app = createApp(App);

app.config.globalProperties.$axios = apiClient;

// Create Pinia store
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.use(PrimeVue);
app.component("Button", Button);
app.component("InputText", InputText);
app.component("DataTable", DataTable);
app.component("Toast", Toast);
// Register other components as needed
// Mount the app
app.mount("#app");
