import Vue from 'vue'
import Router from 'vue-router'
import Count from '@/pages/counter'
import Index from '@/pages/index'
import Map from '@/pages/map'
import VueLearn from '@/pages/vueLearnDemo';
import {Lazyload} from 'vant';

Vue.use(Router);
Vue.use(Lazyload)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Index
    }, {
      path: '/count',
      name: 'count',
      component: Count
    }, {
      path: '/map',
      name: 'map',
      component: Map
    }, {
      path: '/vue-learn',
      name: 'vue-learn',
      component: VueLearn
    }
  ]
})
