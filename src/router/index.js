import Vue from 'vue'
import Router from 'vue-router'
import HeaderModule from '@/components/HeaderModule'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HeaderModule',
      component: HeaderModule
    }
  ]
})
