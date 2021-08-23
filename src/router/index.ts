import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Detail from '@/views/Detail.vue';
import Money from '@/views/Money.vue';
import Chart from '@/views/Chart.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: 'detail'
  },
  {
    path: '/detail',
    component: Detail
  },
  {
    path: '/money',
    component: Money
  },
  {
    path: '/chart',
    component: Chart
  }

]

const router = new VueRouter({
  routes
})

export default router
