import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    {
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Books',
      component: () => import("../views/BooksView.vue"),
    },
    {
      path: '/ping',
      name: 'Ping',
      component: () => import("../views/PingVue.vue"),
    }
    ]}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router