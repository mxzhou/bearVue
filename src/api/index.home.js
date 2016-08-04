import {
  UserResource,
  AuthResource,
  GoodsResource} from './resources'

export default {
  getAdList:function (options) {
    return GoodsResource.get({id: 'goods', controller:'head'})
  },
  getAnnounceList:function (options) {
    return GoodsResource.get({id: 'goods', controller:'announce'})
  },
  getGoodsList:function (options) {
    return GoodsResource.get({id: 'goods', controller:'list'})
  }
}