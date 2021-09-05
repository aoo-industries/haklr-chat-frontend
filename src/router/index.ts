import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import fullScreen from '../layouts/fullScreen.vue'
import login from '../layouts/login.vue'
import test from '../layouts/test.vue'


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'fullScreen',
    component: fullScreen
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/test',
    name: 'test',
    component: test
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
