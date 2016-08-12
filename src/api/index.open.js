import {
  openResource
} from './resources'

export default {
  getOpenList:function (data) {
    return openResource.save({id: 'goods', controller:'open'},data)
  },
  getWin: function(){
    return openResource.get({id: 'goods', controller:'win'})
  }
}