import {
  SUCCESS_GET＿RECHARGE_RECORD_LIST,
  FAILURE_GET＿RECHARGE_RECORD_LIST
} from '../types'

const state = {
  items:[]
}

const mutations = {
  [FAILURE_GET＿RECHARGE_RECORD_LIST](state){
    state.items = []
  },
  [SUCCESS_GET＿RECHARGE_RECORD_LIST](state,action){
    console.log( action.list)
    state.items = action.list
  }
}

export default {
  state,
  mutations
}