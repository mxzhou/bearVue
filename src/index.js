import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'
import configRouter from './routes'
import filters from './utils/filters'
import VueLazyload from './utils/vue-lazyload.es5'
import App from './App.vue'
import errorPng from './assets/error.png'
import loadingPng from './assets/loading.png'

window.userObject = {"kgUid":1209148809,"otherUserId":915197939,"sessionId":"16894AD6D6D682876030ED0C682BD572","token":"f7ca2336-0bc3-4aa9-81ea-8a79d4d863b5"}
Vue.use(VueRouter)
Vue.use(VueLazyload, {
  error: errorPng,
  loading: loadingPng,
})
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

const router = new VueRouter({
  hashbang:true,
  history: false,
  saveScrollPosition: true,
  suppressTransitionError: true
})
configRouter(router)
sync(store, router)

router.start(Vue.extend(App), '#root')
window.router = router