import Vue from 'vue'
import VueResource from 'vue-resource'
import {API_ROOT} from '../config'

Vue.use(VueResource)

// HTTP相关
Vue.http.options.crossOrigin = true
Vue.http.options.credentials = true

Vue.http.interceptors.push((request, next)=>{
  Object.assign(request.body,{"kgUid":791949749,"token":"2bb14f008c7ccf7aaeec82c8b81b167e358d794fc671fade2bb3fc78f5e38f32"});
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
export const MineResource = Vue.resource( '{/id}{/controller}');
export const openResource = Vue.resource( '{/id}{/controller}');
