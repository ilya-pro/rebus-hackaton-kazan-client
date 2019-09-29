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
      path: '/tasks',
      name: 'home',
      //alias: ['/tasks'],
      component: Home
    },
    {
      // task view
      path: '/tasks/:id',
      name: 'tasks',
      component: () => import('./views/TaskView.vue')
    },
    {
      // formList
      path: '/forms',
      name: 'forms',
      component: () => import('./views/FormList.vue')
    },

    {
      // form edit
      path: '/forms/:id',
      alias: ['/forms/new'],
      name: 'formsEdit',
      component: () => import('./views/FormEditView.vue')
    },
    {
      // processes
      path: '/processes',
      name: 'processes',
      component: () => import('./views/ProcessListView.vue')
    },
    {
      // form edit
      path: '/processes/:id',
      alias: ['/processes/new'],
      name: 'processesEdit',
      component: () => import('./views/ProcessEditView.vue')
    },
    {
      // form edit
      path: '/registry',
      name: 'registry',
      component: () => import('./views/RegistryView.vue')
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
