import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from '@/router'
import store from '@/store/index.js'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "/public/style.css";

createApp(App)
.use(router)
.use(store)
.mount('#app')
