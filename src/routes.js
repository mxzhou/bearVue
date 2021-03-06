import routesHome from './routes/routes.home'
import Vue from 'vue'
let maps = {
    '/': {
      name: 'index',
      component: require('./modules/Home/index.vue')
    },
    '/home': {
      name: 'home',
      component: require('./modules/Home/index.vue')
    },
    '/login': {
      name: 'login',
      component: require('./modules/Login/index.vue')
    },
    // 我的夺宝 个人中心
    '/mine':{
      name: 'mine',
      component: require('./modules/Mine/index/index.vue')
    },

    // 我的夺宝 地址
    '/mine/address':{
      name: 'address',
      component: require('./modules/Mine/address/index.vue')
    },
    // 选择地址
    '/mine/selectAddress/:id':{
      name: 'selectAddress',
      component: require('./modules/Mine/address/select.vue')
    },
    '/mine/addAddress':{
      name: 'addAddress',
      component: require('./modules/Mine/address/addAddress.vue')
    },
    '/mine/editAddress':{
      name: 'editAddress',
      component: require('./modules/Mine/address/editAddress.vue')
    },
    '/mine/editAddress/:id':{
      name: 'editAddress2',
      component: require('./modules/Mine/address/editAddress.vue')
    },
    // 我的夺宝 夺宝记录
    '/mine/snarchRecord':{
      name: 'snarchRecord',
      component: require('./modules/Mine/snarchRecord/index.vue')
    },
    '/mine/snarchDetail/:id':{
      name: 'snarchDetail',
      component: require('./modules/Mine/snarchRecord/detail.vue')
    },

    // 我的夺宝 幸运记录
    '/mine/luckyRecord':{
      name: 'luckyRecord',
      component: require('./modules/Mine/luckyRecord/index.vue')
    },
    '/mine/luckyDetail/:id':{
      name: 'luckyDetail',
      component: require('./modules/Mine/luckyRecord/detail.vue')
    },

    // 我的夺宝 充值记录
    '/mine/rechargeRecord':{
      name: 'rechargeRecord',
      component: require('./modules/Mine/recharge/record.vue')
    },

    // 我的夺宝 充值
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

    // 我的夺宝 晒单
    '/mine/displayRecord':{
      name: 'displayRecord',
      component: require('./modules/Mine/share/index.vue')
    },

    // 最新揭晓
    '/announce':{
      name: 'announce',
      component: require('./modules/Announce/index.vue')
    },

    // 计算详情
    '/calculate':{
      name: 'calculate',
      component: require('./modules/Announce/calculate.vue')
    },

    // 晒单
    '/share':{
      name: 'share',
      component: require('./modules/Share/index.vue')
    },
    '/share/unShare':{
      name: 'unShare',
      component: require('./modules/Share/unShare.vue')
    },
    '/share/rule':{
      name: 'rule',
      component: require('./modules/Share/rule.vue')
    },
    '/share/share':{
      name: 'shareSubmit',
      component: require('./modules/Share/share.vue')
    },
    '*': {
      component: require('./modules/NotFound/index.vue')
    }
  }
Object.assign(maps,routesHome)
export default function (router) {
  router.map(maps)
  router.beforeEach(function (transition) {

    //一级页面增加底部导航，其他去掉
    router.app.goRouter(transition.to.path)
    //切换页面之后置顶    
    if (transition.to.path === '/forbidden') {
      transition.abort()
    } else {
      transition.next()
    }
  })
}