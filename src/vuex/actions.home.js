import api from '../api/index.home'
import * as types from './types.home'
//广告bnner列表
export const getAdList = ({ dispatch }) => {
  api.getAdList().then(response => {
    if(!response.ok){
      return dispatch(types.FAILURE_GET_AD_LIST)
    }
    var data =response.data
    dispatch(types.SUCCESS_GET_AD_LIST, { list: data.data })
  }, response => {
    dispatch(types.FAILURE_GET_AD_LIST)
  })
}
//首页中奖名单公告
export const getAnnounceList = ({ dispatch }) => {
  api.getAnnounceList().then(response => {
    if(!response.ok){
      return dispatch(types.FAILURE_GET_ANNOUNCE_LIST)
    }
    var data =response.data
    dispatch(types.SUCCESS_GET_ANNOUNCE_LIST, { list: data.data })
  }, response => {
    dispatch(types.FAILURE_GET_ANNOUNCE_LIST)
  })
}
//首页中奖名单公告
export const getGoodsList = ({ dispatch }) => {
  api.getGoodsList().then(response => {
    if(!response.ok){
      return dispatch(types.FAILURE_GET_GOODS_LIST)
    }
    var data =response.data
    dispatch(types.SUCCESS_GET_GOODS_LIST, { list: data.data })
  }, response => {
    dispatch(types.FAILURE_GET_GOODS_LIST)
  })
}