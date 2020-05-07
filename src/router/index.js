import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import In from '@/components/in'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'in',
      component: In
    }
  ]
})
