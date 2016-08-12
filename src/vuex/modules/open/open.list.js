import {
  SUCCESS_GET_OPEN_LIST,
  FAILURE_GET_OPEN_LIST,
  SUCCESS_GET_OPEN_ADD_LIST
} from '../../types/types.open'

const state = {
  items:[],data:{}
}

const mutations = {
  [FAILURE_GET_OPEN_LIST](state){
    state.items = []
    state.data={}
  },
  [SUCCESS_GET_OPEN_ADD_LIST](state,action){
    state.data=action.list
    state.items = [...state.items, ...action.list.data.goodsList]
  },
  [SUCCESS_GET_OPEN_LIST](state,action){
    state.data=action.list
    state.items = action.list.data.goodsList
  }
}

export default {
  state,
  mutations
}