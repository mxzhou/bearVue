import {
  UserResource,
  AuthResource,
  GoodsResource,
  CartResource} from './resources'

export default {
  getAdList:function (options) {
    return GoodsResource.get({id: 'goods', controller:'head'})
  },
  getAnnounceList:function (options) {
    return GoodsResource.get({id: 'goods', controller:'announce'})
  },
  getGoodsList:function (options) {
    return GoodsResource.save({id: 'goods', controller:'list'},options)
  },
  getGoodsDetail:function (options) {
    return GoodsResource.get({id: 'goods', controller:'detail'})
  },
  getGoodsJoiner:function (options) {
    return GoodsResource.get({id: 'goods', controller:'joiner'})
  },
  getGoodsUser:function (options) {
    return GoodsResource.get({id: 'goods', controller:'user'})
  },
  getCartDetail:function (options) {
    return CartResource.get({id: 'cart', controller:'detail'})
  },
  getUserConsumeMoney:function (options) {
    return CartResource.get({id: 'user', controller:'consumeMoney'})
  }
}