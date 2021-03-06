import {
  SUCCESS_GET_DETAIL_LIST,
  FAILURE_GET_DETAIL_LIST
} from '../../types'

const state = {
  items:[]
}

const mutations = {
  [FAILURE_GET_DETAIL_LIST](state){
    state.items = []
  },
  [SUCCESS_GET_DETAIL_LIST](state,action){
    console.log( action.list)
    state.items = action.list
  }
}

export default {
  state,
  mutations
}