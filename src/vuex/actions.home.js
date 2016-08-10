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
//首页商品列表
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
//商品详情
export const getGoodsDetail = ({ dispatch }) => {
  api.getGoodsDetail().then(response => {
    if(!response.ok){
      return dispatch(types.FAILURE_GET_GOODS_DETAIL)
    }
    var data =response.data
    var goodsImgList = data.data.goodsImgList
    for(var i in goodsImgList){
      var item = goodsImgList[i];
      item.coverImgUrl = item.goodsImgUrl
    }
    data.data.goodsImgList = goodsImgList
    dispatch(types.SUCCESS_GET_GOODS_DETAIL, { list: data.data })
  }, response => {
    dispatch(types.FAILURE_GET_GOODS_DETAIL)
  })
}
//商品参与者
export const getGoodsJoiner = ({ dispatch }) => {
  api.getGoodsJoiner().then(response => {
    if(!response.ok){
      return dispatch(types.FAILURE_GET_GOODS_JOINER)
    }
    var data =response.data
    dispatch(types.SUCCESS_GET_GOODS_JOINER, { list: data.data })
  }, response => {
    dispatch(types.FAILURE_GET_GOODS_JOINER)
  })
}
//商品参与者本人
export const getGoodsUser = ({ dispatch }) => {
  api.getGoodsUser().then(response => {
    if(!response.ok){
      return dispatch(types.FAILURE_GET_GOODS_USER)
    }
    var data =response.data
    dispatch(types.SUCCESS_GET_GOODS_USER, { list: data.data })
  }, response => {
    dispatch(types.FAILURE_GET_GOODS_USER)
  })
}