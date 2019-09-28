import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      //tasks or login
      //alias: ['/forms', '/processes'],
      path: '/',
      alias: ['/processes'],
      name: 'home',
      component: Home
    },
    {
      // formList
      path: '/forms',
      alias: ['/forms/:id'],
      name: 'home',
      component: () => import('./views/FormList.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
