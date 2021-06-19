import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import fullScreen from '../layouts/fullScreen.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'fullScreen',
    component: fullScreen
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
