import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Desktop from '../views/Desktop.vue'
import Mobile from '../views/Mobile.vue'
import Maptest from '../views/Map_test.vue'
import MyPage from '../views/MyPage.vue'
import Sell from '../views/Sell.vue'
import Favor from '../views/Favor.vue'
import Partner from '../views/Partner.vue'
import Noti from '../views/PageNoti.vue'
import ImageShow from '../views/ImageShow.vue'
import Over1 from '../views/Over1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/maptest',
    name: 'Maptest',
    component: Maptest
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Desktop.vue')
  },
  {
    path: '/desktop',
    name: 'Desktop',
    component: Desktop
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Desktop.vue')
  },
  {
    path: '/mobile',
    name: 'Mobile',
    component: Mobile
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: MyPage
  },
  {
    path: '/sell',
    name: 'Sell',
    component: Sell
  },
  {
    path: '/favor',
    name: 'Favor',
    component: Favor
  },
  {
    path: '/partner',
    name: 'Partner',
    component: Partner
  },
  {
    path: '/noti',
    name: 'Noti',
    component: Noti
  },
  {
    path: '/imageshow',
    name: 'ImageShow',
    component: ImageShow
  },
  {
    path: '/overone',
    name: 'Overone',
    component: Over1
  },







]  
// End of routes Array 

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
