import api from '../../api/index.share'
import * as types from '../types'
import * as shareTypes from '../types/types.share'

// 夺宝详情
export const getShareList = ({ dispatch },data,isAdd) => {
  dispatch(types.CHANGE_LOADING, { loading: {show:true} })
  api.getShareList(data).then(response => {
    dispatch(types.CHANGE_LOADING, { loading: {show:false} })
    if(!response.ok){
      return dispatch(shareTypes.FAILURE_GET_SHARE_LIST)
    }
    var data =response.data;
    console.log(data)
    if(isAdd){
      dispatch(shareTypes.SUCCESS_GET_SHARE_ADD_LIST, { list: data })
    }else{
      dispatch(shareTypes.SUCCESS_GET_SHARE_LIST, { list: data })
    }
  }, response => {
    dispatch(types.CHANGE_LOADING, { loading: {show:false} })
    dispatch(shareTypes.FAILURE_GET_SHARE_LIST)
  })
}