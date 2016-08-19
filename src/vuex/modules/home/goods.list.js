import {
  SUCCESS_GET_GOODS_LIST,
  SUCCESS_GET_GOODS_ADD_LIST,
  FAILURE_GET_GOODS_LIST,
  REQUEST_GOODS_LIST
} from '../../types.home'

const state = {
  items:[],
  isLoading: false,
  hasMore: true
}

const mutations = {
  [REQUEST_GOODS_LIST](state){
    state.isLoading = true
  },
  [FAILURE_GET_GOODS_LIST](state){
    state.items = []
    state.data = {}
    state.isLoading = false
  },
  [SUCCESS_GET_GOODS_ADD_LIST](state,action){
    state.data = action.list
    state.isLoading = false
    state.hasMore = action.hasMore
    state.items = [...state.items, ...action.list.goodsList]
  },
  [SUCCESS_GET_GOODS_LIST](state,action){
    state.isLoading = false
    state.hasMore = action.hasMore
    state.items = action.list.goodsList
  }
}

export default {
  state,
  mutations
}