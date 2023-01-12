import 'bootstrap/dist/css/bootstrap.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from "../plugin/axios";

createApp(App)
    .use(router)
    .use(axios, { baseURL: "http://localhost:8080"})
    .mount('#app');

