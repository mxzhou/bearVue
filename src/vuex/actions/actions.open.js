import api from '../../api/index.open'
import * as types from '../types'
import * as openTypes from '../types/types.open'
import { saveCookie,signOut } from '../../utils/authService'
import img from '../../assets/images/shanghai.jpg'

// 夺宝详情
export const getOpenList = ({ dispatch },data,isAdd) => {
  dispatch(types.CHANGE_LOADING, { loading: {show:true} })

  api.getOpenList(data).then(response => {
    dispatch(types.CHANGE_LOADING, { loading: {show:false} })
    if(!response.ok){
      return dispatch(openTypes.FAILURE_GET_OPEN_LIST)
    }
    var data =response.data;
    if(isAdd){
      dispatch(openTypes.SUCCESS_GET_OPEN_ADD_LIST, { list: data })
    }else{
      dispatch(openTypes.SUCCESS_GET_OPEN_LIST, { list: data })
    }
  }, response => {
    dispatch(types.CHANGE_LOADING, { loading: {show:false} })
    dispatch(openTypes.FAILURE_GET_OPEN_LIST)
  })
}

export const getWin = ({ dispatch }) => {
  dispatch(types.CHANGE_LOADING, { loading: {show:true} })
  api.getWin().then(response => {
    dispatch(types.CHANGE_LOADING, { loading: {show:false} })
    if(!response.ok){
      return dispatch(openTypes.FAILURE_GET_WIN)
    }
    var data =response.data;
    dispatch(openTypes.SUCCESS_GET_WIN, { data: data })
  }, response => {
    dispatch(types.CHANGE_LOADING, { loading: {show:false} })
    dispatch(openTypes.FAILURE_GET_WIN)
  })
}