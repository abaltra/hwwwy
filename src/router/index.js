import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Details from '@/components/Details'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/:region',
      name: 'Details',
      component: Details
    }
  ]
})
