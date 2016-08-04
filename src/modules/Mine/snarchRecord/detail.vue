<style lang="less" scoped>
  @import "./index.less";
</style>
<template>
  <div class="sDetail">
    <div class="desc">
      <p class="p1">外星人15.6英寸游戏本ALW15ER-3718</p>
      <p class="p2">期号: 301221522</p>
      <p class="p2">本期参与: <span class="color-red">2</span>人次</p>
    </div>
    <ul class="list2">
      <li class="clearfix title">
        <div class="left">购买时间</div>
        <div class="right">参与人次</div>
      </li>
      <template v-for="item in items">
        <li>
          <div class="border clearfix">
            <div class="left">{{item.buyTime|formatDate}}</div>
            <div class="right">
              <p><span class="color-red">{{item.buyNumber}}</span>人次</p>
              <a class="color-blue">查看号码></a>
            </div>
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
  import { Loading, Group, Cell } from '../../../components'
  import {getDetailList} from '../../../vuex/actions'
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
        items:({detailList})=>detailList.items
      },

      actions:{
        getDetailList,
      }
    },
    init(){
      changeTitle('充值记录');
    },
    created(){
      this.getDetailList()
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
