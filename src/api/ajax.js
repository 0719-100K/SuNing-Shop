/* 
对axio进行2次封装一个能发ajax请求的函数
*/

import axios from 'axios'
import qs from 'qs'
import store from '../vuex/store'
import router from '../routes/index'


import { Indicator, MessageBox,Toast } from 'mint-ui'

const instance = axios.create({
  // baseURL: 'http://localhost:3000', // 出跨域请求问题
  baseURL: '/api', // 让代理服务器转发请求3000
  timeout: 20000 
})

// 添加请求拦截器
instance.interceptors.request.use((config) => {

  Indicator.open({
    spinnerType: 'fading-circle'
  })

  // 后台接收post参数体默认是urlencoded形式，需要转换
  const data = config.data
  if (data instanceof Object) {
    config.data = qs.stringify(data)
  }

  const token = store.state.token
  if (token) {
    config.headers['Authorization'] = token
  } else {  // 有些接口是需要token校验，如个人中心、购物车等
    const needCheck = config.headers.needCheck
    if (needCheck) {
      throw new Error('请先登录')
    }
  }

  return config

})

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    Indicator.close()
    return response.data
  },
  error => {
    Indicator.close()
    const response = error.response
    // 没发请求的错误
    if (!response) {
      const path = router.currentRoute.path  //取到当前页的URI路径
      if (path!=='/login') {
        router.replace('/login')
        console.log('我要跳转到login啦了')
        Toast(error.message) // 此error就是在请求拦截器中throw的错误信息
      }
    } else { // 发了请求的错误
      // 如果响应状态码是401---缺少token, 且当前没在登陆页面, 退出登陆(清除数据) 跳到登陆页面
      if (error.response.status===401) {
        const path = router.currentRoute.path
        if (path!=='/login') {
          // store.dispatch('logout')
          router.replace('/login')
          console.log('我要跳转到login啦了')
          Toast(error.response.data.message || '登陆失效, 请重新登陆')
        }
      } else if (error.response.status===404) { // status为: 404: 提示访问的资源不存在
        MessageBox('提示', '访问的资源不存在')
      } else {
        // 1. 统一处理请求异常
        MessageBox('提示', '请求出错: ' + error.message)
      }
    }
  }
)


export default instance

