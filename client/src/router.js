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
      name: 'home',
      component: Home
    },
    {
      // formList
      path: '/forms',
      name: 'forms',
      component: () => import('./views/FormList.vue')
    },
    {
      // formList
      path: '/processes',
      name: 'processes',
      component: () => import('./views/ProcessListView.vue')
    },
    {
      // form edit
      path: '/forms/:id',
      alias: ['/forms/new'],
      name: 'formsEdit',
      component: () => import('./views/FormEditView.vue')
    },
    {
      // form edit
      path: '/processes/:id',
      alias: ['/processes/new'],
      name: 'processesEdit',
      component: () => import('./views/ProcessEditView.vue')
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
