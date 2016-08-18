import Vue from 'vue'
import VueResource from 'vue-resource'
import {API_ROOT} from '../config'

Vue.use(VueResource)

// HTTP相关
Vue.http.options.crossOrigin = true
Vue.http.options.credentials = true

Vue.http.interceptors.push((request, next)=>{
  // 这里对请求体进行处理
  request.headers = request.headers || {}
  next((response) => {
    // 这里可以对响应的结果进行处理
    if (response.status === 401) {
      signOut()
      window.location.pathname = '/login'
    }
  })
})
export const GoodsResource = Vue.resource(API_ROOT + '{/id}{/controller}')
export const CartResource = Vue.resource(API_ROOT + '{/id}{/controller}')
export const RechargeResource = Vue.resource(API_ROOT + '{/id}{/controller}');
export const MineResource = Vue.resource(API_ROOT + '{/id}{/controller}');

export const openResource = Vue.resource(API_ROOT + '{/id}{/controller}');
