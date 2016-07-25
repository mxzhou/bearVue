export default function (router) {
  router.map({
    '/': {
      name: 'home',
      component: require('./modules/Home/index.vue')
    },
    '/login': {
      name: 'login',
      component: require('./modules/Login/index.vue')
    },
    '/alert': {
      name: 'alert',
      component: require('./modules/Alert/index.vue')
    },
    '/toast':{
      name: 'toast',
      component: require('./modules/Toast/index.vue')
    },
    '*': {
      component: require('./modules/NotFound/index.vue')
    }
  })
  // router.beforeEach((transition)=>{
  //   transition.next()
  // })
}