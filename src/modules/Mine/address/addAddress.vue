<style lang="less" scoped>
  @import "index.less";
</style>
<template>
  <div class="">
    <ul v-if="items.length>0">
      <template v-for="item in items">
        <li>

        </li>
      </template>
    </ul>
    <div v-if="items.length == 0">
      <div class="ui-bottom">
        <a class="ui_btn_bottom" @click="addAddress">添加新地址</a>
      </div>
    </div>
    <loading :show="loading" :text="text1"></loading>

  </div>
</template>

<script>
  import { Loading, Group, Cell } from '../../../components'
  import {getAddressList} from '../../../vuex/actions'
  import {changeTitle} from '../../../utils/hack'

  export default {
    components: {
      Loading,
      Group,
      Cell,
    },
    data () {
      return {
      }
    },
    init() {
      changeTitle('地址列表')
    },
    vuex:{
      getters:{
        items:function(store){
          return store.addressList.items
        }
      },
      actions:{getAddressList}
    },
    created(){
      this.getAddressList()
    },
    methods: {
      addAddress:function(){
        router.go('/mine/addAddress')
      }
    }
  }
</script>
