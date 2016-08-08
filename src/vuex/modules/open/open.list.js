import {
  SUCCESS_GET_OPEN_LIST,
  FAILURE_GET_OPEN_LIST
} from '../../types/types.open'

const state = {
  items:[]
}

const mutations = {
  [FAILURE_GET_OPEN_LIST](state){
    state.items = []
  },
  [SUCCESS_GET_OPEN_LIST](state,action){
    console.log( action.list)
    state.items = action.list
  }
}

export default {
  state,
  mutations
}