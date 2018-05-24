import Vue from 'vue'
import Router from 'vue-router'
import Count from '@/pages/counter'
import HelloWord from '@/components/HelloWorld'
import Map from '@/pages/map'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWord
    }, {
      path: '/count',
      name: 'count',
      component: Count
    }, {
      path: '/map',
      name: 'map',
      component: Map
    }
  ]
})
