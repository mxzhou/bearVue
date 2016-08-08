import {
  SUCCESS_GET_GOODS_JOINER,
  FAILURE_GET_GOODS_JOINER
} from '../../types.home'

const state = {
  items:[]
}

const mutations = {
  [FAILURE_GET_GOODS_JOINER](state){
    state.items = []
  },
  [SUCCESS_GET_GOODS_JOINER](state,action){
    state.items = action.list
  }
}

export default {
  state,
  mutations
}