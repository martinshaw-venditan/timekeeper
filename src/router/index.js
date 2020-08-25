import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/timers'
  },
  {
    path: '/timers',
    name: 'Home',
    component: () => import('../views/TaskTimersView.vue')
  },
  {
    path: '/sprints',
    name: 'Sprints',
    component: () => import('../views/SprintsView.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
