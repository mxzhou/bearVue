import {
  GoodsResource,
  MineResource,
  RechargeResource,
} from './resources'

export default {
  getAdList:function (options) {
    return GoodsResource.get({id: 'goods', controller:'head'})
  },
  getAnnounceList:function (options) {
    return GoodsResource.get({id: 'goods', controller:'announce'})
  },
  getTypeList:function(){
    return GoodsResource.get({id:'type'})
  },
  getGoodsList:function(){
    return GoodsResource.get({id:'goods',controller:'list'})
  },
  getRechageRecord:function(data){
    return MineResource.save({part:'user',controller:'payLog'},data)
  },
  getUserDetail:function(data){
    return MineResource.save({part:'user',controller:'detail'},data)
  },
  getSnarchRecordList:function(data){
    return MineResource.save({part:'user',id:'buyLog',controller:'list'},data)
  },
  getAddressList:function(data){
    return MineResource.save({part:'user',id:'address',controller:'list'},data)
  },
  getAreaList:function(data){
    return MineResource.save({part:'user',id: 'address', controller:'get'},data)
  },
  getDetailList:function(){
    return MineResource.get({part:'user',id:'buyInfo',controller:'list'})
  },
  getLuckyList:function(data){
    return MineResource.save({part:'user',id:'win',controller:'log'},data)
  }
}