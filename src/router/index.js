import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';  // Adjust the path if you placed Home.vue somewhere else

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/4leaf-gt-championship',
    name: '4 Leaf GT Championship',
    component: () => import('@/views/Leaderboard.vue'),
    props: { raceType: '4leaf-gt-championship' }
  },
  // ... other routes
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
