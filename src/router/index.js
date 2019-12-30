import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import store from '@/store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter(to, from, next) {
      if (store.getters.loggedIn) {
        next();
      } else {
        next('/login');
      }
    },

  },
  {
    path: '/login',
    name: 'login',
    // lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/session/login'),
    beforeEnter(to, from, next) {
      if (!store.getters.loggedIn) {
        next();
      } else {
        next('/');
      }
    },

  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
