const maps = {
	//商品详情
    '/goods/detail': {
      name: 'goodsDetail',
      component: require('../modules/Home/detail/index.vue')
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