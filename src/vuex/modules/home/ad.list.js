import {
  SUCCESS_GET_AD_LIST,
  FAILURE_GET_AD_LIST
} from '../../types'

const state = {
  items:[]
}

const mutations = {
  [FAILURE_GET_AD_LIST](state){
    state.items = []
  },
  [SUCCESS_GET_AD_LIST](state,action){
    state.items = action.list
  }
}

export default {
  state,
  mutations
}