import {
  SUCCESS_GET_USER_DETAIL,
  FAILURE_GET_USER_DETAIL
} from '../../types'

const state = {
  data:{}
}

const mutations = {
  [FAILURE_GET_USER_DETAIL](state){
    state.data = {}
  },
  [SUCCESS_GET_USER_DETAIL](state,action){
    state.data = action.data
  }
}

export default {
  state,
  mutations
}