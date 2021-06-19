import Vue from 'vue'
import axios from 'axios'

// 请求错误处理 注意根据具体的服务器端设置，此处仅仅是个示例
const errorFn = err => {
  if (err.toString().indexOf('timeout') !== -1) {
    Vue.prototype.$message.error('请求超时，请稍后再试')
  }
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = err.response.data.reason || '请求错误'
        break

      case 401:
        err.message = '未授权，请登录'
        break

      case 403:
        err.message = '拒绝访问'
        break

      case 404:
        err.message = `请求地址出错: ${err.response.config.url}`
        break

      case 408:
        err.message = '请求超时'
        break

      case 500:
        err.message = '服务器开个小差，请稍后再试'
        break

      case 501:
        err.message = '服务器开个小差，请稍后再试'
        break

      case 502:
        err.message = '服务器开个小差，请稍后再试'
        break

      case 503:
        err.message = '服务器开个小差，请稍后再试'
        break

      case 504:
        err.message = '服务器开个小差，请稍后再试'
        break

      case 505:
        err.message = 'HTTP版本不受支持'
        break

      default:
        err.message = err.response.data.reason || '请求失败，请稍后再试'
    }
    if (err.response.status === 401) {
      Vue.prototype.$message.error({
        message: err.message,
        onClose() {
          localStorage.clear()
          location.reload()
        }
      })
    } else {
      Vue.prototype.$message.error(err.message)
    }
  }
  return Promise.reject(err)
}

/* ***此处开始封装不同后台下的axios实例 ****/
const service = axios.create({
  headers: {
    "Authorization": "Bearer 123"
  },
  baseURL: 'http://106.15.56.251:8090/',
  timeout: 80000,
  withCredentials: true
})
service.interceptors.request.use(
  config => {
    if (config.method === 'get' && config.data) {
      let params = ''
      Object.keys(config.data).forEach(key => {
        params += key + '=' + config.data[key] + '&'
      })
      if (params !== '') {
        params = params.substr(0, params.lastIndexOf('&'))
        if (config.url.indexOf('?') > -1) {
          config.url = config.url + '&' + params
        } else {
          config.url = config.url + '?' + params
        }
      }
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  response => {
    const result = response.data
    // 如果状态码是401，表示token失效，则直接跳转到登录页面
    if (`${result.status}` === '401') {
      Vue.prototype.$confirm('你已退出，可以取消继续留在该页面，或者重新登录', '', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 注销接登录接口
        localStorage.clear()
        location.reload()
      })
    } else if (result.resCode !== '0000') {
      return [result, result]
    } else {
      return [null, result]
    }
  }, errorFn
)
Vue.prototype.service = service
export default service
