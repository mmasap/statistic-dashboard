import Charts from '@/pages/charts/Charts.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/charts' },
    { path: '/charts', component: Charts },
    { path: '/charts/:regionCode', component: Charts, props: true },
    { path: '/:pathMatch(.*)', redirect: '/charts' },
  ],
})

export default router
