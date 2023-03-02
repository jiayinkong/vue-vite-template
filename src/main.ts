import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Idux from "./idux";

createApp(App)
  .use(router)
  .use(store)
  .use(Idux)
  .mount('#app')
