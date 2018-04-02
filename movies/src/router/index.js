import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Series from '@/components/Series'
import Movies from '@/components/Movies'
import Favorites from '@/components/Favorites'
import Detail from '@/components/Detail'
import Edit from '@/components/Edit'
import Header from '@/components/Header'

Vue.use(Router)
export default new Router({
  routes: [
    { path: '/',
    // You could also have named views at the top
    component: Header,
    children: [{
        path: 'Home',
        component: Home
      }, {
        path: 'Series',
        component: Series
      }, {
        path: 'Movies',
        component: Movies
      }, {
        path: 'Favorites',
        component: Favorites
      }, {
        path: 'Detail/:id',
        component: Detail
      }]
    }
  ]
})
