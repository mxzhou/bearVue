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
    '/mine/addAddress':{
      name: 'address',
      component: require('./modules/Mine/address/addAddress.vue')
    },
    '/mine/snarchRecord':{
      name: 'snarchRecord',
      component: require('./modules/Mine/snarchRecord/index.vue')
    },
    '/mine/snarchDetail':{
      name: 'snarchDetail',
      component: require('./modules/Mine/snarchRecord/detail.vue')
    },
    '/mine/luckyRecord':{
      name: 'luckyRecord',
      component: require('./modules/Mine/luckyRecord/index.vue')
    },
    '/mine/luckyDetail':{
      name: 'luckyDetail',
      component: require('./modules/Mine/luckyRecord/detail.vue')
    },
    '/mine/rechargeRecord':{
      name: 'rechargeRecord',
      component: require('./modules/Mine/recharge/record.vue')
    },
    '/mine/charge':{
      name: 'charge',
      component: require('./modules/Mine/recharge/charge.vue')
    },
    '/mine/chargeSuccess':{
      name: 'chargeSuccess',
      component: require('./modules/Mine/recharge/success.vue')
    },
    '/mine/chargeFail':{
      name: 'chargeSuccess',
      component: require('./modules/Mine/recharge/fail.vue')
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