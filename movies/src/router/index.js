import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Series from '@/components/Series'
import Detail from '@/components/Detail'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/series',
      name: 'Series',
      component: Series
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
