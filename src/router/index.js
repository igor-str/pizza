import Vue from 'vue'
import Router from 'vue-router'
// import HeaderModule from '@/components/HeaderModule'
import ContentModule from '@/components/ContentModule'
import SliderModule from '@/components/SliderModule'
import DoItYourselfModule from '@/components/DoItYourselfModule'
import ContactsModule from '@/components/ContactsModule'
import AjaxModule from '@/components/AjaxModule'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ContentModule',
      components: {default: ContentModule, SliderModule: SliderModule}
    },
    {
      path: '/catalog',
      component: ContentModule
    },
    {
      path: '/try',
      name: 'DoItYourselfModule',
      component: DoItYourselfModule
    },
    {
      path: '/contacts',
      name: 'ContactsModule',
      component: ContactsModule
    },
    {
      path: '/ajax',
      name: 'AjaxModule',
      component: AjaxModule
    }
  ]
})
