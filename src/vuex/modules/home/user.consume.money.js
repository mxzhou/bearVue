import {
  SUCCESS_GET_USER_CONSUME_MONEY,
  FAILURE_GET_USER_CONSUME_MONEY
} from '../../types.home'

const state = {
  items:[]
}

const mutations = {
  [FAILURE_GET_USER_CONSUME_MONEY](state){
    state.items = []
  },
  [SUCCESS_GET_USER_CONSUME_MONEY](state,action){
    state.items = action.list
  }
}

export default {
  state,
  mutations
}