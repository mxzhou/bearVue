import {
  openResource
} from './resources'

export default {
  getShareList:function (data) {
    return openResource.save({id: 'find', controller:'sharelist'},data)
  }
}