import Toast from 'primevue/toast';
import { ref } from 'vue';

export default class ToastMessenger {
    toast = ref();

    constructor() {
        console.log("Toast service created...");
    }

    showToast(severity: string, summary: string, detail: string) {
        this.toast.value?.add({ severity, summary, detail, life: 3000 });
    }
}