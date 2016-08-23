import {
  SUCCESS_GET_GOODS_PAST,
  SUCCESS_GET_GOODS_ADD_PAST,
  FAILURE_GET_GOODS_PAST,
  REQUEST_GOODS_PAST
} from '../../types.home'

const state = {
  items:[],
  isLoading: false,
  hasMore: true
}

const mutations = {
  [REQUEST_GOODS_PAST](state){
    state.isLoading = true
  },
  [FAILURE_GET_GOODS_PAST](state){
    state.items = []
    state.data = {}
    state.isLoading = false
  },
  [SUCCESS_GET_GOODS_ADD_PAST](state,action){
    state.data = action.list
    state.isLoading = false
    state.hasMore = action.hasMore
    state.items = [...state.items, ...action.list.goodsList]
  },
  [SUCCESS_GET_GOODS_PAST](state,action){
    state.isLoading = false
    state.hasMore = action.hasMore
    state.items = action.list.goodsList
  }
}

export default {
  state,
  mutations
}