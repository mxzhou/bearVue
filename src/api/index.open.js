import {
  openResource
} from './resources'

export default {
  getOpenList:function (options) {
    return openResource.get({id: 'goods', controller:'open'})
  },
  getWin: function(){
    return openResource.get({id: 'goods', controller:'win'})
  }
}