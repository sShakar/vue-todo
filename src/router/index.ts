import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // It's better to create a separate file for the routes.
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/deleted',
      name: 'deleted',
      component: () => import('@/views/DeletedView.vue')
    }
  ]
});

export default router;
