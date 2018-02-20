import Vue from 'vue'
import Router from 'vue-router'
// import HeaderModule from '@/components/HeaderModule'
import DoItYourselfModule from '@/components/DoItYourselfModule'
import AjaxModule from '@/components/AjaxModule'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/try',
      name: 'DoItYourselfModule',
      component: DoItYourselfModule
    },
    {
      path: '/ajax',
      name: 'AjaxModule',
      component: AjaxModule
    }
  ]
})
