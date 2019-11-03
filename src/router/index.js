import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/search&City=:City&Country=:Country&Name=:Name',
    name: 'search',
    component: () => import('../views/Search.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
