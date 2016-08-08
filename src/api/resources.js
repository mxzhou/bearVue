import Vue from 'vue'
import VueResource from 'vue-resource'
import {API_ROOT,KUGOU_ROOT} from '../config'
import {signOut } from '../utils/authService'

Vue.use(VueResource)

// HTTP相关
Vue.http.options.crossOrigin = true
Vue.http.options.credentials = true

Vue.http.interceptors.push((request, next)=>{
  // 这里对请求体进行处理
  request.headers = request.headers || {}
  next((response) => {
    console.log('ajax filter');
    console.log('response');
    console.log(response);
    // 这里可以对响应的结果进行处理
    if (response.status === 401) {
      signOut()
      window.location.pathname = '/login'
    }
  })
})

export const UserResource = Vue.resource(API_ROOT + 'users{/id}')
export const AuthResource = Vue.resource(API_ROOT + 'auth{/id}')
export const ArticleResource = Vue.resource(API_ROOT + '{/id}{/controller}')
export const TagResource = Vue.resource(API_ROOT + 'tags{/id}')
export const CommentResource = Vue.resource(API_ROOT + 'comment{/id}{/controller}')
export const MobileResource = Vue.resource(API_ROOT + 'mobile{/id}')

export const AppResource = Vue.resource(API_ROOT + '{/id}')
export const GoodsResource = Vue.resource(API_ROOT + '{/id}{/controller}')
export const RechargeResource = Vue.resource(API_ROOT + '{/id}{/controller}');
export const MineResource = Vue.resource(API_ROOT + '{/id}{/controller}');

export const openResource = Vue.resource(API_ROOT + '{/id}{/controller}');
