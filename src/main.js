import {createApp} from 'vue'
import 'flowbite';
import './style.css'
import App from './App.vue'
import store from "./store/index.js";
import router from "./router/index.js";
import VueApexCharts from "vue3-apexcharts";

createApp(App)
    .use(VueApexCharts)
    .use(store)
    .use(router)
    .mount('#app')
