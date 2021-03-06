import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView/IndexCom'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView/IndexCom')
  }
]

const router = new VueRouter({
  routes
})

export default router
