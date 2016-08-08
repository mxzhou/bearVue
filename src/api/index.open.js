import {
  openResource
} from './resources'

export default {
  getOpenList:function (options) {
    return openResource.get({id: 'goods', controller:'open'})
  }
}