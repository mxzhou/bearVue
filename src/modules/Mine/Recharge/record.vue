<style lang="less" scoped>
  @import "./index.less";
</style>
<template>
  <div>
    <ul class="record">
      <template v-for="item in items">
        <li>
          <p class="title">{{payType[item.payType]}}</p>
          <div class="clearfix">
            <div class="desc"><p>{{item.createTime|formatDate}}</p><p>{{payStatus[item.payStatus]}}</p></div>
            <p class="money">{{item.money}}元</p>
          </div>
        </li>
      </template>
    </ul>
    <div class="ui-bottom">
      <a class="ui_btn_bottom">充值</a>
    </div>
  </div>
</template>

<script>
  import { Loading, Group, Cell } from '../../../components'
  import {getRechargeRecordList} from '../../../vuex/actions'
  import {changeTitle} from '../../../utils/hack'
  import {formatDate} from '../../../utils/filters'
  export default {
    props: {
      money: Number
    },
    components: {
      Loading,Group,Cell
    },

    data () {
      return {
        payType:{
          1:'微信',
          2:'支付宝'
        },
        payStatus:{
          1:'已支付'
        }
      }
    },
    filters:{
      formatDate
    },
    vuex:{
      getters:{
        items:({rechargeRecord})=>rechargeRecord.items
      },

      actions:{
        getRechargeRecordList,
      }
    },
    init(){
      changeTitle('充值记录');
    },
    created(){
      this.getRechargeRecordList()
    },
    methods: {
      add:function(){
        alert(0)
      }
    }
  }

  function tick (i, cb) {
  }
</script>
