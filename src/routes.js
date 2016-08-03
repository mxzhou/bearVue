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
    '/loading':{
      name: 'loading',
      component: require('./modules/Loading/index.vue')
    },
    '/allProduct':{
      name: 'allProduct',
      component: require('./modules/AllProduct/index.vue')
    },
    '/mine':{
      name: 'mine',
      component: require('./modules/Mine/index/index.vue')
    },
    '/mine/address':{
      name: 'address',
      component: require('./modules/Mine/address/index.vue')
    },
    '/mine/snarchRecord':{
      name: 'snarchRecord',
      component: require('./modules/Mine/snarchRecord/index.vue')
    },
    '/mine/luckyRecord':{
      name: 'luckyRecord',
      component: require('./modules/Mine/luckyRecord/index.vue')
    },
    '/mine/rechargeRecord':{
      name: 'rechargeRecord',
      component: require('./modules/Mine/recharge/record.vue')
    },
    '/mine/displayRecord':{
      name: 'displayRecord',
      component: require('./modules/Mine/display/index.vue')
    },
    '*': {
      component: require('./modules/NotFound/index.vue')
    }
  })
  // router.beforeEach((transition)=>{
  //   transition.next()
  // })
}