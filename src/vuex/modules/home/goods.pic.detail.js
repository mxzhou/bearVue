import {
  SUCCESS_GET_GOODS_PIC_DETAIL,
  FAILURE_GET_GOODS_PIC_DETAIL
} from '../../types.home'

const state = {
  items:[]
}

const mutations = {
  [FAILURE_GET_GOODS_PIC_DETAIL](state){
    state.items = []
  },
  [SUCCESS_GET_GOODS_PIC_DETAIL](state,action){
    console.log(action.list)
    let list = action.list
    let dataList = []
    for(let i=0; i< list.length; i ++){
      dataList.push({img:list[i]})
    }
    state.items = dataList
  }
}

export default {
  state,
  mutations
}