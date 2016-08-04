import {
  SUCCESS_GET_ANNOUNCE_LIST,
  FAILURE_GET_ANNOUNCE_LIST
} from '../../types.home'

const state = {
  items:[]
}

const mutations = {
  [FAILURE_GET_ANNOUNCE_LIST](state){
    state.items = []
  },
  [SUCCESS_GET_ANNOUNCE_LIST](state,action){
    state.items = action.list
  }
}

export default {
  state,
  mutations
}