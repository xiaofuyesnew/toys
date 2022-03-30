import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/color',
      name: 'color',
      component: () => import('../components/Color.vue'),
    },
  ],
})
