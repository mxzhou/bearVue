<style lang="less" scoped>
  .charge{
    padding-bottom: .44rem;
  }
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
  .btn::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  .btn::-webkit-outer-spin-button {
    -webkit-appearance: none;	/* 有无看不出差别 */
  }
  input.btn{
    outline: none;
    -webkit-appearance: none;
    padding: .1rem;
  }
  .btn:focus{
    border: .01rem solid #0c7;
    color: #333;
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
  <div class="charge">
    <group title="请选择充值金额（元）">
      <div class="box">
        <template v-for="item in moneyList">
          <a class="btn" :class="{'selected':$index == index}" @click="selectFunc($index)">{{item.key}}</a>
        </template>
        <input type="number" class="btn" @focus="focusFunc" @blur="blurFunc" v-model="other" placeholder="其他金额">
      </div>
    </group>
    <group title="选择支付方式">
      <template v-for="item in list">
        <cell :title="item.text" :link="item.link" :big="true" :is-icon="item.isIcon" :icon-url="item.img" @click="selecrFunc2($index)">
          <a class="select" :class="{'marked':$index == index2}"></a>
        </cell>
      </template>
    </group>
    <div class="ui-bottom" :style="bottomStyle">
      <a class="ui_btn_bottom" @click="confirm">确认充值</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
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
        other:'',
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
        bottomStyle:{

        }
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
        var index = this.index
        if(index<6){
          alert(this.moneyList[index].key)
        }else if(index == 6){
          alert(this.other)
        }
        alert(this.list[this.index2]['text'])
        router.go('/mine/chargeSuccess')
      },
      selectFunc:function(index){
        this.index = index;
        console.log(this.moneyList[index].key);
      },
      selecrFunc2:function(index){
        this.index2 = index;
      },
      focusFunc:function(){
        this.index = 6;
        this.bottomStyle = {
          'position':'static',
          'margin-top':'6rem'
        }
      },
      blurFunc:function(){
        this.bottomStyle = {}
      }
    }
  }

  function tick (i, cb) {
  }
</script>
