import { createApp } from 'vue';
import App from './App.vue';
import router from "@/router/router.js";
import "@/assets/js/ui.js";
import "@/assets/css/reset.css";
import "@/assets/css/app.css";

createApp(App)
.use(router)
.mount('#app')
