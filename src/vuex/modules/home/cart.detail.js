import {
  SUCCESS_GET_CART_DETAIL,
  FAILURE_GET_CART_DETAIL
} from '../../types.home'

const state = {
  items:[]
}

const mutations = {
  [FAILURE_GET_CART_DETAIL](state){
    state.items = []
  },
  [SUCCESS_GET_CART_DETAIL](state,action){
    state.items = action.list
  }
}

export default {
  state,
  mutations
}