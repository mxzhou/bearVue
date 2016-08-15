import {
  SUCCESS_GET_SHARE_LIST,
  FAILURE_GET_SHARE_LIST,
  SUCCESS_GET_SHARE_ADD_LIST
} from '../../types/types.share'

const state = {
  items:[],data:{}
}

const mutations = {
  [FAILURE_GET_SHARE_LIST](state){
    state.items = []
    state.data={}
  },
  [SUCCESS_GET_SHARE_ADD_LIST](state,action){
    state.data=action.list
    state.items = [...state.items, ...action.list.data]
  },
  [SUCCESS_GET_SHARE_LIST](state,action){
    state.data=action.list
    state.items = action.list.data
  }
}

export default {
  state,
  mutations
}