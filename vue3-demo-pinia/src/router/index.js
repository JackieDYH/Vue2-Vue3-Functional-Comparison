/*
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2023-08-08 11:23:12
 * @LastEditors: Jackie
 * @Description: router
 * @FilePath: /vue3-demo-pinia/src/router/index.js
 * @version:
 */
import { createRouter, createWebHistory } from 'vue-router';
// js文件使用报错处理
// import pinia from '@/store';
// import { useUserStore } from '@/store/user.js';
// const store = useUserStore(pinia);
// 可以使用store
// console.log('router', store, store.num, store.Age);

import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
