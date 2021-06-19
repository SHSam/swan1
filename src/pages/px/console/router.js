import Vue from 'vue'
import VueRouter from 'vue-router'
import VideoManage from './view/Video'
import ClientComponent from './view/Client'
import CaseListComponent from './view/Case'
import CaseAddComponent from './view/Case/add'
import QaComponent from './view/Qa'
import MsgComponent from './view/Msg'

Vue.use(VueRouter)

const routes = [
  {
    path: '/video',
    name: 'VideoManage',
    component: VideoManage,
    meta: { title: '视频管理' }
  },
  {
    path: '/client',
    name: 'Client',
    component: ClientComponent,
    meta: { title: '客户管理' }
  },
  {
    path: '/case',
    name: 'case',
    component: CaseListComponent,
    meta: { title: '案例管理' }
  },
  {
    path: '/case-add',
    name: 'caseadd',
    component: CaseAddComponent,
    meta: { title: '案例添加' }
  },
  {
    path: '/qa',
    name: 'qa',
    component: QaComponent,
    meta: { title: '常见问题' }
  },
  {
    path: '/msg',
    name: 'msg',
    component: MsgComponent,
    meta: { title: '收件箱' }
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

// const vue = new Vue()

// router.beforeEach((to, from, next) => {
//   window.scrollTo(0, 0)
//   if (vue.isMobile && window.location.href.indexOf('mobile') < 0) {
//     window.location.href = window.location.href.replace(/\/web/, '/mobile')
//   }
//   next()
// })

export default router
