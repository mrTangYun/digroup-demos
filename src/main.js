import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Demos from './pages/robot-cafe/index.vue';
// import {router} from './routers'

// console.log(router);

const app = createApp(Demos);
// app.use(router)
app.mount('#app')
