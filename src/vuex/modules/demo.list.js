import {
  SUCCESS_GET_DEMO_LIST,
  FAILURE_GET_DEMO_LIST
} from '../types'

const state = {
  items:[]
}

const mutations = {
  [FAILURE_GET_DEMO_LIST](state){
    state.items = []
  },
  [SUCCESS_GET_DEMO_LIST](state,action){
    state.items = action.list
  }
}

export default {
  state,
  mutations
}