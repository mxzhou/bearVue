const maps = {
	   //商品详情
    '/goods/detail': {
      name: 'goodsDetail',
      component: require('../modules/Home/detail/index.vue')
    },
    //商品图文详情
    '/goods/picDetail/:id': {
      name: 'picDetail',
      component: require('../modules/Home/detail/picDetail.vue')
    },
    //商品往期揭晓
    '/goods/past/:id': {
      name: 'goodsPast',
      component: require('../modules/Home/detail/past.vue')
    },
    //晒单分享
    '/goods/share/:id': {
      name: 'goodsShare',
      component: require('../modules/Home/detail/share.vue')
    },
    //支付
    '/pay/index': {
      name: 'payIndex',
      component: require('../modules/Home/pay/index.vue')
    },
    //支付结果
    '/pay/result': {
      name: 'payResult',
      component: require('../modules/Home/pay/result.vue')
    },
    //查询支付结果
    '/pay/check': {
      name: 'payCheck',
      component: require('../modules/Home/pay/check.vue')
    }
}

export default maps