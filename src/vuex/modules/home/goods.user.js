import {
  SUCCESS_GET_GOODS_USER,
  FAILURE_GET_GOODS_USER
} from '../../types.home'

const state = {
  items:[]
}

const mutations = {
  [FAILURE_GET_GOODS_USER](state){
    state.items = []
  },
  [SUCCESS_GET_GOODS_USER](state,action){
    state.items = action.list
  }
}

export default {
  state,
  mutations
}