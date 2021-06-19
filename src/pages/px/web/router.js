import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "w_about" */ './views/About')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "w_contact" */ './views/Contact')
  },
  {
    path: '/business',
    name: 'Business',
    component: () => import(/* webpackChunkName: "w_business" */ './views/Business')
  },
  {
    path: '/case',
    name: 'Case',
    component: () => import(/* webpackChunkName: "w_case" */ './views/Case')
  },
  {
    path: '/case_detail',
    name: 'CaseDetail',
    component: () => import(/* webpackChunkName: "w_case_detail" */ './views/CaseDetail')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

const vue = new Vue()

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  if (vue.isMobile && window.location.href.indexOf('mobile') < 0) {
    window.location.href = window.location.href.replace(/\/web/, '/mobile')
  }
  next()
})

export default router
