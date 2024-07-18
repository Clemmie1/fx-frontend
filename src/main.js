import {createApp} from 'vue'
// import naive from 'naive-ui'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'flowbite';
import './style.css'
import App from './App.vue'
import store from "./store/index.js";
import router from "./router/index.js";
import VueApexCharts from "vue3-apexcharts";
import {VueSpinnersPlugin} from 'vue3-spinners';

createApp(App)
    .use(PrimeVue, {
        theme: {
            preset: Aura
        }
    })
    .use(VueApexCharts)
    .use(store)
    .use(router)
    .use(VueSpinnersPlugin)
    .mount('#app')
