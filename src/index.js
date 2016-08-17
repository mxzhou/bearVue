import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'
import configRouter from './routes'
import filters from './utils/filters'
import App from './App.vue'

Vue.use(VueRouter)
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