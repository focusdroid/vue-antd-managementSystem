import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/login', name: 'Login', component: () => import('@/components/login/Login')},
    {path: '/',
      name: 'Home',
      component: () => import('@/components/home/Home'),
      children: [
        { path: '/', name: 'Hello', component: () => import('@/components/HelloWorld') }
      ]
    }
  ]
})
