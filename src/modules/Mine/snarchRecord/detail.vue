<style lang="less" scoped>
  @import "./index.less";
</style>
<template>
  <div>
    <div class="sDetail">
      <div class="desc">
        <p class="p1">外星人15.6英寸游戏本ALW15ER-3718</p>
        <p class="p2">期号: 301221522</p>
        <p class="p2">本期参与: <span class="color-red">2</span>人次</p>
      </div>
      <ul class="list2">
        <li class="clearfix title">
          <div class="left">夺宝时间</div>
          <div class="right">参与人次</div>
        </li>
        <template v-for="item in items">
          <li>
            <div class="border clearfix" :class="{'noBorder':$index == 0}">
              <div class="left">{{item.buyTime|formatDate}}</div>
              <div class="right">
                <p><span class="color-red">{{item.buyNumber}}</span>人次</p>
                <a class="color-blue" @click="lookNum(item.id)">查看号码></a>
              </div>
            </div>
          </li>
        </template>
      </ul>
    </div>
    <alert :show.sync="show" title="幸运号码" button-text="确定">
      <p class="lucktNum">
        <span>1005654</span>
        <span>1005654</span>
        <span>1005654</span>
        <span>1005654</span>
        <span>1005654</span>
        <span>1005654</span>
        <span>1005654</span>
        <span>1005654</span>
        <span>1005654</span>
        <span>1005654</span>
        <span>1005654</span>
        <span>1005654</span>
        <span>1005654</span>
        <span>1005654</span>
        <span>1005654</span>
      </p>
    </alert>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Alert,Loading, Group, Cell } from '../../../components'
  import {getDetailList} from '../../../vuex/actions'
  import {changeTitle} from '../../../utils/hack'
  import {formatDate} from '../../../utils/filters'
  export default {
    props: {
      money: Number
    },
    components: {
      Alert,Loading,Group,Cell
    },

    data () {
      return {
        show:false,
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
      },
      lookNum:function(id){
        alert(id)
        this.show = true
      }
    }
  }

  function tick (i, cb) {
  }
</script>
