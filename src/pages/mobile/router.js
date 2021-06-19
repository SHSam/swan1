import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './view/Home/index.vue'

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
    component: () => import(/* webpackChunkName: "m_about" */ './view/About')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "m_contact" */ './view/Contact')
  },
  {
    path: '/business',
    name: 'business',
    component: () => import(/* webpackChunkName: "m_business" */ './view/Business')
  },
  {
    path: '/case',
    name: 'Case',
    component: () => import(/* webpackChunkName: "m_case" */ './view/Case')
  },
  {
    path: '/case_detail',
    name: 'CaseDetail',
    component: () => import(/* webpackChunkName: "m_case_detail" */ './view/CaseDetail')
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
  if (!vue.isMobile && window.location.href.indexOf('mobile') > -1) {
    window.location.href = window.location.href.replace(/\/mobile/, '/web')
  }
  next()
})

export default router
