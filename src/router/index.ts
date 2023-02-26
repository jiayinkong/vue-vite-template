import { createRouter, createWebHistory } from 'vue-router';
import demoRouters from './modules/demo';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // @ts-ignore
  routes: [...demoRouters],
  scrollBehavior() {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth'
    }
  }
})

export default router;

