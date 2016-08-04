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
    border: .01rem solid #999999;
    border-radius: .04rem;
    margin-bottom: .15rem;
  }
  .btn.selected{
    background: #0c7;
    color: #fff;
    border: none;
  }
  .select{
    width: .2rem;
    height: .2rem;
    background: url(../../../assets/images/elm_unmark_2.png) no-repeat;
    background-size: contain;
    border-radius: 100%;
    display: block;
  }
  .marked{
    background: url(../../../assets/images/elm_marked_2.png) no-repeat;
    background-size: contain;
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
        <cell :title="item.text" :link="item.link" :is-icon="item.isIcon" :icon-url="item.img" @click="selecrFunc2($index)">
          <a class="select" :class="{'marked':$index == index2}"></a>
        </cell>
      </template>
    </group>
    <div class="ui-bottom">
      <a class="ui_btn_bottom" @click="confirm">确认充值</a>
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
  export default {
    components: {
      Loading,Group,Cell
    },

    data () {
      return {
        index:0,
        index2:0,
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
        router.go({name:'/mine/chargeSuccess'})
      },
      selectFunc:function(index){
        this.index = index;
        alert(this.moneyList[index].key)
      },
      selecrFunc2:function(index){
        this.index2 = index;
      },
    }
  }

  function tick (i, cb) {
  }
</script>
