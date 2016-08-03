<style lang="less" scoped>
  .box{
    display: flex;
    flex-wrap:wrap;
    padding: .15rem .15rem 0;
    justify-content: space-between;
  }
  .btn{
    display: block;
    width: 1rem;
    height: .36rem;
    line-height: .36rem;
    font-size: .16rem;
    color: #999;
    text-align: center;
    border: 1px solid #999999;
    border-radius: .04rem;
    margin-bottom: .15rem;
  }
  .btn.selected{
    background: #0c7;
    color: #fff;
    border: none;
  }
</style>
<template>
  <div>
    <group title="请选择充值金额（元）">
      <div class="box">
        <template v-for="item in moneyList">
          <a class="btn" :class="{'selected':$index == index}" @click="selectFunc($index)">{{item.key}}</a>
        </template>
      </div>
    </group>
    <group title="选择支付方式">
      <template v-for="item in list">
        <cell :title="item.text" :link="item.link" :is-icon="item.isIcon" :icon-url="item.img">
        </cell>
      </template>
    </group>
    <div class="ui-bottom">
      <a class="ui_btn_bottom" @click="confirm()">确认充值</a>
    </div>
  </div>
</template>

<script>
  import { Loading, Group, Cell } from '../../../components'
  import {getRechargeRecordList} from '../../../vuex/actions'
  import {changeTitle} from '../../../utils/hack'
  import {formatDate} from '../../../utils/filters'
  import alipay from '../../../assets/images/ic_alipay.png'
  import wepay from '../../../assets/images/ic_wepay.png'
  import debitcard from '../../../assets/images/ic_debitcardpay.png'
  import creditcard from '../../../assets/images/ic_creditcardpay.png'
  import pin from './img/ic_s_pin.png'
  export default {
    components: {
      Loading,Group,Cell
    },

    data () {
      return {
        index:1000,
        moneyList:[
          {
            key:'20'
          },
          {
            key:'50'
          },{
            key:'100'
          },{
            key:'200'
          },{
            key:'500'
          },{
            key:'其他金额'
          }
        ],
        list:[
          {
            text:"微信支付",img:wepay,isIcon:true
          },
          {
            text:"支付宝支付",img:alipay,isIcon:true
          },
          {
            text:"储蓄卡",img:debitcard,isIcon:true
          },
          {
            text:"信用卡",img:creditcard,isIcon:true
          }
        ],
      }
    },
    vuex:{
      getters:{
      },

      actions:{
        getRechargeRecordList,
      }
    },
    init(){
      changeTitle('充值');
    },
    created(){
    },
    methods: {
      confirm:function(){
        alert(0)
      },
      selectFunc:function(index){
        this.index = index;
        alert(this.moneyList[index].key)
      }
    }
  }

  function tick (i, cb) {
  }
</script>
