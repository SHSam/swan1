import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import 'amfe-flexible'
import './assets/common.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

const isMobile = /Android|webOS|iPhone|iPod|BlackBerry|iPad|SymbianOS/i.test(navigator.userAgent)
Vue.config.productionTip = false
Vue.prototype.isMobile = isMobile

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
