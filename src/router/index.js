import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 路由表
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    name: 'layout', // 如果父路由有默认子路由，则它的name没有意义
    component: () => import('@/views/layout'),
    children: [
      {
        path: '', // 默认子路由，只能有一个
        name: 'shouye',
        component: () => import('@/views/home')
      },
      {
        path: '/wenda',
        name: 'wenda',
        component: () => import('@/views/wenda')
      },
      {
        path: '/shipin',
        name: 'shipin',
        component: () => import('@/views/shipin')
      },
      {
        path: '/wode',
        name: 'wode',
        component: () => import('@/views/wode')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

export default router
