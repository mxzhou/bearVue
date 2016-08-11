import {
  SUCCESS_GET_WIN,
  FAILURE_GET_WIN
} from '../../types/types.open'

const state = {
  items:{}
}

const mutations = {
  [FAILURE_GET_WIN](state){
    state.items = {}
  },
  [SUCCESS_GET_WIN](state,action){
    state.items = action.data
  }
}

export default {
  state,
  mutations
}