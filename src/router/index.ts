import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Detail from '@/views/Detail.vue';
import Money from '@/views/Money.vue';
import Chart from '@/views/Chart.vue';
import NotFound from '@/views/NotFound.vue';
import LabelEdit from '@/views/LabelEdit.vue';
import LabelAddExpenses from '@/views/LabelAddExpenses.vue';
import LabelAddIncome from '@/views/LabelAddIncome.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',           // 根路径
    redirect: 'detail'      // 重定向
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
    path: '/money/edit',
    component: LabelEdit
  },
  {
    path: '/money/edit/add/income',
    component: LabelAddIncome
  },
  {
    path: '/money/edit/add/expenses',
    component: LabelAddExpenses
  },
  {
    path: '/chart',
    component: Chart
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
