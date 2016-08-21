import api from '../api/index.home'
import * as types from './types.home'
import * as type from './types'
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
export const getGoodsList = ({ dispatch }, data, isAdd) => {
  isAdd
    ? dispatch(types.REQUEST_GOODS_LIST) 
    : dispatch(type.CHANGE_LOADING, { loading: {show:true} }) 

  api.getGoodsList(data).then(response => {
    dispatch(type.CHANGE_LOADING, { loading: {show:false} })
    if(!response.ok){
      return dispatch(types.FAILURE_GET_GOODS_LIST)
    }
    let json = response.data
    let hasMore = !(json.length < data.pageSize)
    isAdd
      ? dispatch(types.SUCCESS_GET_GOODS_ADD_LIST, { list: json.data , hasMore: hasMore})
      : dispatch(types.SUCCESS_GET_GOODS_LIST, { list: json.data , hasMore: hasMore})

  }, response => {
    dispatch(type.CHANGE_LOADING, { loading: {show:false} })
    dispatch(types.FAILURE_GET_GOODS_LIST)
  })
}
//商品详情
export const getGoodsDetail = ({ dispatch }) => {
  dispatch(type.CHANGE_LOADING, { loading: {show:true} })
  api.getGoodsDetail().then(response => {
    dispatch(type.CHANGE_LOADING, { loading: {show:false} })
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
    dispatch(type.CHANGE_LOADING, { loading: {show:false} })
    dispatch(types.FAILURE_GET_GOODS_DETAIL)
  })
}
//清单详情
export const getCartDetail = ({ dispatch }) => {
  api.getCartDetail().then(response => {
    if(!response.ok){
      return dispatch(types.FAILURE_GET_CART_DETAIL)
    }
    var data =response.data
    dispatch(types.SUCCESS_GET_CART_DETAIL, { list: data.data })
  }, response => {
    dispatch(types.FAILURE_GET_CART_DETAIL)
  })
}
//用户余额
export const getUserConsumeMoney = ({ dispatch }) => {
  api.getUserConsumeMoney().then(response => {
    if(!response.ok){
      return dispatch(types.FAILURE_GET_USER_CONSUME_MONEY)
    }
    var data =response.data
    dispatch(types.SUCCESS_GET_USER_CONSUME_MONEY, { list: data.data })
  }, response => {
    dispatch(types.FAILURE_GET_USER_CONSUME_MONEY)
  })
}
//商品参与者
export const getGoodsJoiner = ({ dispatch }, data, isAdd) => {
  isAdd
    ? dispatch(types.REQUEST_GOODS_JOINER) 
    : dispatch(type.CHANGE_LOADING, { loading: {show:true} }) 
  api.getGoodsJoiner().then(response => {
    dispatch(type.CHANGE_LOADING, { loading: {show:false} })
    if(!response.ok){
      return dispatch(types.FAILURE_GET_GOODS_JOINER)
    }
    let json = response.data
    let hasMore = !(json.length < data.pageSize)
    isAdd
      ? dispatch(types.SUCCESS_GET_GOODS_ADD_JOINER, { list: json.data , hasMore: hasMore})
      : dispatch(types.SUCCESS_GET_GOODS_JOINER, { list: json.data , hasMore: hasMore})
  }, response => {
    dispatch(type.CHANGE_LOADING, { loading: {show:false} })
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