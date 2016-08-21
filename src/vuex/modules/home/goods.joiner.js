import {
  SUCCESS_GET_GOODS_JOINER,
  FAILURE_GET_GOODS_JOINER,
  SUCCESS_GET_GOODS_ADD_JOINER,
  REQUEST_GOODS_JOINER
} from '../../types.home'

const state = {
  items:[],
  isLoading: false,
  hasMore: true
}

const mutations = {
  [REQUEST_GOODS_JOINER](state){
    state.isLoading = true
  },
  [FAILURE_GET_GOODS_JOINER](state){
    state.items = []
    state.data = {}
    state.isLoading = false
  },
  [SUCCESS_GET_GOODS_ADD_JOINER](state,action){
    state.data = action.list
    state.isLoading = false
    state.hasMore = action.hasMore
    state.items = [...state.items, ...action.list.userList]
  },
  [SUCCESS_GET_GOODS_JOINER](state,action){
    state.isLoading = false
    state.hasMore = action.hasMore
    state.items = action.list.userList
  }
}

export default {
  state,
  mutations
}