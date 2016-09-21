import api from '../api'
import * as types from './types'
//getDemoList
export const getDemoList = ({ dispatch },options) => {
  api.getDemoList(options).then(response => {
    if(!response.ok){
      return dispatch(types.FAILURE_GET_DEMO_LIST)
    }
    console.log('demolist action');
    console.log( response.data);
    var data =response.data
    console.log(data.data);
    dispatch(types.SUCCESS_GET_DEMO_LIST, { list: data.data })
  }, response => {
    dispatch(types.FAILURE_GET_DEMO_LIST)
  })
}

// 全部商品左侧列表
export const getTypeList = ({ dispatch }) => {
  api.getTypeList().then(response => {
    if(!response.ok){
      return dispatch(types.FAILURE_GET_TYPE_LIST)
    }
    var data =response.data
    dispatch(types.SUCCESS_GET_TYPE_LIST, { list: data.data })
  }, response => {
    dispatch(types.FAILURE_GET_TYPE_LIST)
  })
}

// 商品列表
export const getGoodsList = ({ dispatch }) => {
  dispatch(types.CHANGE_LOADING, { loading: {show:true} })

  api.getGoodsList().then(response => {
    dispatch(types.CHANGE_LOADING, { loading: {show:false} })
    if(!response.ok){
      return dispatch(types.FAILURE_GET_GOODS_LIST)
    }
    var data =response.data;
    dispatch(types.SUCCESS_GET_GOODS_LIST, { list: data.data })
  }, response => {
    dispatch(types.FAILURE_GET_GOODS_LIST)
  })
}
// 充值列表
export const getRechargeRecordList = ({ dispatch }) => {
  dispatch(types.CHANGE_LOADING, { loading: {show:true} })

  api.getRechageRecord().then(response => {
    dispatch(types.CHANGE_LOADING, { loading: {show:false} })
    if(!response.ok){
      return dispatch(types.FAILURE_GET_RECHARGE_RECORD_LIST)
    }
    var data =response.data;
    dispatch(types.SUCCESS_GET_RECHARGE_RECORD_LIST, { list: data.data.payLogList })
  }, response => {
    dispatch(types.FAILURE_GET_RECHARGE_RECORD_LIST)
  })
}

// 夺宝列表
export const getSnarchRecordList = ({ dispatch },data) => {
  dispatch(types.CHANGE_LOADING, { loading: {show:true} })

  api.getSnarchRecordList(data).then(response => {
    dispatch(types.CHANGE_LOADING, { loading: {show:false} })
    if(!response.ok){
      return dispatch(types.FAILURE_GET_SNARCH_RECORD_LIST)
    }
    var data =response.data;
    dispatch(types.SUCCESS_GET_SNARCH_RECORD_LIST, { list: data.data.buyLogList })
  }, response => {
    dispatch(types.FAILURE_GET_SNARCH_RECORD_LIST)
  })
}
// 幸运列表
export const getLuckyList = ({ dispatch },data) => {
  dispatch(types.CHANGE_LOADING, { loading: {show:true} })

  api.getLuckyList(data).then(response => {
    dispatch(types.CHANGE_LOADING, { loading: {show:false} })
    if(!response.ok){
      return dispatch(types.FAILURE_GET_LUCKY_LIST)
    }
    var data =response.data;
    dispatch(types.SUCCESS_GET_LUCKY_LIST, { list: data.data.winLogList })
  }, response => {
    dispatch(types.FAILURE_GET_LUCKY_LIST)
  })
}

export const changeLoading = ({ dispatch },loading) => {
  dispatch(types.CHANGE_LOADING, { loading: loading })
}
// 地址列表
export const getAddressList = ({ dispatch },data={}) => {
  dispatch(types.CHANGE_LOADING, { loading: {show:true} })
  api.getAddressList(data).then(response => {
    dispatch(types.CHANGE_LOADING, { loading: {show:false} })
    if(!response.ok){
      return dispatch(types.FAILURE_GET_ADDRESS_LIST)
    }
    var data =response.data;
    dispatch(types.SUCCESS_GET_ADDRESS_LIST, { list: data.data })
  }, response => {
    dispatch(types.CHANGE_LOADING, { loading: {show:false} })
    dispatch(types.FAILURE_GET_ADDRESS_LIST)
  })
}

// 地址列表
export const getAreaList = ({ dispatch },data) => {
  dispatch(types.CHANGE_LOADING, { loading: {show:true} })

  api.getAreaList(data).then(response => {
    dispatch(types.CHANGE_LOADING, { loading: {show:false} })
    if(!response.ok){
      return dispatch(types.FAILURE_GET_AREA_LIST)
    }
    var data =response.data;
    console.log(data.data)
    dispatch(types.SUCCESS_GET_AREA_LIST, { list: data.data })
  }, response => {
    dispatch(types.CHANGE_LOADING, { loading: {show:false} })
    dispatch(types.FAILURE_GET_AREA_LIST)
  })
}

// 夺宝详情
export const getDetailList = ({ dispatch }) => {
  dispatch(types.CHANGE_LOADING, { loading: {show:true} })

  api.getDetailList().then(response => {
    dispatch(types.CHANGE_LOADING, { loading: {show:false} })
    if(!response.ok){
      return dispatch(types.FAILURE_GET_DETAIL_LIST)
    }
    var data =response.data;
    dispatch(types.SUCCESS_GET_DETAIL_LIST, { list: data.data })
  }, response => {
    dispatch(types.CHANGE_LOADING, { loading: {show:false} })
    dispatch(types.FAILURE_GET_DETAIL_LIST)
  })
}