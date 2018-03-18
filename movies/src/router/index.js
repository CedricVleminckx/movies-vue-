import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Series from '@/components/Series'
import Movies from '@/components/Movies'
import Favorites from '@/components/Favorites'
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
      path: '/movies',
      name: 'Movies',
      component: Movies
    },
    {
      path: '/favorites',
      name: 'Favorites',
      component: Favorites
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
