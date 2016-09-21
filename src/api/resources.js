import Vue from 'vue'
import VueResource from 'vue-resource'
import {API_ROOT} from '../config'

Vue.use(VueResource)

// HTTP相关
Vue.http.options.crossOrigin = true
Vue.http.options.credentials = true

Vue.http.interceptors.push((request, next)=>{
  if(request.body){
    Object.assign(request.body,userObject);
  }
  request.url =API_ROOT +  request.url;
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
export const GoodsResource = Vue.resource( '{/id}{/controller}')
export const CartResource = Vue.resource( '{/id}{/controller}')
export const RechargeResource = Vue.resource( '{/id}{/controller}');
export const MineResource = Vue.resource( '{/part}{/id}{/controller}');
export const openResource = Vue.resource( '{/id}{/controller}');
