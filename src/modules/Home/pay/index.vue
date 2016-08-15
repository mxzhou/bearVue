<template>
  <div>
      <div class="dropdown-block" :class="show ? 'active' : ''">
        <div class="select-item" @click="dropFunc()">
        <span class="fr"><em>{{cartDetail.totalCost}}</em>夺宝币 <i class="icon-drop"></i></span>
          商品合计
        </div>
        <div class="dropdown">
          <div class="title">
            <span class="fr">数量：<em>{{cartDetail.total}}</em></span>注：请确认如下订单明细
          </div>
          <div class="item" v-for="item in cartDetail.goodsList">
            <span class="fr"><em>{{item.number}}</em> 人次</span>
            <span class="fl">{{item.goodsName}}</span>
          </div>
        </div>
        <div class="dropdown-line"></div>
      </div>
      <!-- 余额支付 -->
      <div class="pay-item pay-yue">
        <div class="title">
        <span class="fr" @click="selectYE()"><em><i v-if="showYe">{{consumePayNum}}夺宝币</i> <i class="icon-check" :class="showYe ? 'active' : ''"></i></em></span>
          <h3>余额支付</h3>
          <p>余额：{{userConsumeMoney}}夺宝币</p>
        </div>
      </div>
      <!-- 其他支付 -->
      <div class="pay-item">
        <div class="title" @click="showPayFunc()">
        <span class="fr"><em><i v-if="showOtherPayNum">{{otherPayNum}}夺宝币</i> <i class="icon-drop" :class="showPay ? 'active' : ''"></i></em></span>其他支付方式
        </div>
        <group v-if="showPay" style="margin-top:-.2rem;" :hide="hideTop">
          <template v-for="item in list">
            <cell :title="item.text" :link="item.link" :is-icon="item.isIcon" :icon-url="item.img" @click="selectFunc($index)">
              <a class="select" :class="{'marked':$index == index}"></a>
            </cell>
          </template>
        </group>
      </div>
  </div>
</template>

<script>
  import {changeTitle} from '../../../utils/hack'
  import { Loading, Group, Cell } from '../../../components'
  import alipay from '../../../assets/images/ic_alipay.png'
  import wepay from '../../../assets/images/ic_wepay.png'
  import debitcard from '../../../assets/images/ic_debitcardpay.png'
  import creditcard from '../../../assets/images/ic_creditcardpay.png'
  import { getCartDetail,getUserConsumeMoney } from '../../../vuex/actions.home'
  export default {
    components: {
      Loading,Group,Cell
    },
    data () {
      return {
        index: -1,
        show: false,
        hideTop: true,
        showPay: false,
        showYe: false,
        showOtherPayNum: false,
        consumePayNum: 0,
        otherPayNum: 0,
        list:[
          {text:"微信支付",img:wepay,isIcon:true},
          {text:"支付宝支付",img:alipay,isIcon:true},
          {text:"储蓄卡",img:debitcard,isIcon:true},
          {text:"信用卡",img:creditcard,isIcon:true}
        ]
      }
    },
    vuex:{
        getters:{
            cartDetail: ({cartDetail}) => cartDetail.items,
            userConsumeMoney: ({userConsumeMoney}) => userConsumeMoney.items
        },
        actions:{
            getCartDetail,
            getUserConsumeMoney
        }
    },
    created () {
      
      if(this.cartDetail.length < 1){
          this.getCartDetail()
      }
      this.getUserConsumeMoney()

    },
    watch: {
      userConsumeMoney () {
        if(this.userConsumeMoney<=0){
          this.otherPayNum = this.cartDetail.totalCost
        }else{
          if(this.userConsumeMoney < this.cartDetail.totalCost){
            this.otherPayNum = this.cartDetail.totalCost - this.userConsumeMoney
            this.consumePayNum = this.userConsumeMoney
          }else if(this.userConsumeMoney == this.cartDetail.totalCost){
            this.consumePayNum = this.userConsumeMoney
          }else{
            this.consumePayNum = this.cartDetail.totalCost
          }
        }
        if(this.otherPayNum!=0){
          this.index = 0
        }
      },
      consumePayNum () {
        let show = this.consumePayNum == 0 ? false:true
        this.showYe = show
      },
      otherPayNum () {
        let show = this.otherPayNum == 0 ? false:true
        this.showOtherPayNum = show
        this.showPay = show
        if(this.index==-1){
          this.index = 0
        }
        if(!show){
          this.index = -1
        }
      }
    },
    init(){
      changeTitle('支付订单');
    },
    methods: {
      selectFunc: function(index){
        this.index = index;
        if(this.userConsumeMoney >= this.cartDetail.totalCost){
          this.otherPayNum = this.cartDetail.totalCost
          this.consumePayNum = 0
        }
      },
      dropFunc () {
        this.show = !this.show
      },
      showPayFunc () {        
        this.showPay = !this.showPay
      },
      selectYE () {
        if(this.userConsumeMoney>0){
          this.showYe = !this.showYe;
          //余额大于需要支付的金额
          if(this.userConsumeMoney >= this.cartDetail.totalCost){
            if(this.showYe){
              this.consumePayNum = this.cartDetail.totalCost
              this.otherPayNum = 0
            }else{
              this.consumePayNum = 0
              this.otherPayNum = this.cartDetail.totalCost
            }
          }else{
            if(this.showYe){
              this.otherPayNum =  this.cartDetail.totalCost - this.userConsumeMoney
              this.consumePayNum = this.userConsumeMoney
            }else{
              this.otherPayNum =  this.cartDetail.totalCost
              this.consumePayNum = 0
            }
          }
        }
      }
    }
  }
</script>
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
    -webkit-appearance: none; /* 有无看不出差别 */
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
  .select-item {
    position: relative;
    width: 100%;
    height: .44rem;
    padding: 0 .15rem;
    line-height: .44rem;
    color: #333;
    font-size: .16rem;
    background: #FFF;
    span {
      display: inline-block;
      .icon-drop {
        display: inline-block;
        width: .1rem;
        height: .05rem;
        background: url(../../../assets/images/ic_s_downarrow.png) right center no-repeat;
        background-size: .1rem auto;
        vertical-align: .03rem;
      }
      em {
        color: #F24957;
        font-style: normal;
      }
    }
  }
  .dropdown {
    position: relative;
    width: 3.55rem;
    max-height: 1.56rem;
    background: #FCFCFC;
    margin: auto;
    padding-bottom: .05rem;
    overflow: auto;
    display: none;
    -webkt-overflow-scrolling: touch;    
    .title {
      height: .4rem;
      line-height: .4rem;
      color: #AAA;
      font-size: .14rem;
      border-bottom: .01rem solid #D3D6DA;
      margin: 0 .1rem;
      span {
        color: #333;
        em {
          color: #5393E0;
          font-style: normal;
        }
      }
    }
    .item {
      position: relative;
      padding: 0 .1rem;
      font-size: .14rem;
      line-height: .27rem;
      padding-top: .06rem;
      clear: both;
      span {
        color: #AAA;
        em {
          color: #F24957;
          font-style: normal;
        }
      }
      .fl {
        color: #333;
        width: 2.55rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .dropdown-line {
    width: 7.22rem/2;
    height: .28rem/2;
    content: ' ';
    background: url(../../../assets/images/bg_listdetail_tail.png) center top no-repeat;
    background-size: 100% auto;
    margin: auto;
    z-index: 101;
    position: absolute;
    left: 50%;
    margin-left: -7.22rem/4;
    display: none;
  }
  .dropdown-block.active {
    .select-item {
      z-index: 101;
      box-shadow: 0 0 .2rem rgba(0,0,0,.1);
    }
    .dropdown {
      display: block;
      box-shadow: 0 -.01rem .02rem rgba(0,0,0,.1);
    }
    .dropdown-line {
      display: block;
    }
    .icon-drop {
      -webkit-transform: rotate(180deg);
    }
  }
  .pay-item {
    background: #FFF;
    .title {
      height: .44rem;
      line-height: .44rem;
      color: #333;
      font-size: .16rem;
      margin-left: .1rem;
      padding-right: .15rem;
      span {
        .icon-drop {
          display: inline-block;
          width: .1rem;
          height: .05rem;
          background: url(../../../assets/images/ic_s_downarrow.png) right center no-repeat;
          background-size: .1rem auto;
          vertical-align: .03rem;
          &.active {
            -webkit-transform: rotate(180deg);
          }
        }
        i {
          font-style: normal;
        }
        .icon-check {
          width: .2rem;
          height: .2rem;
          background: url(../../../assets/images/elm_unmark_2.png) no-repeat;
          background-size: contain;
          border-radius: 100%;
          display: inline-block;
          vertical-align: -.03rem;
          &.active {
            background: url(../../../assets/images/elm_marked_2.png) no-repeat;
            background-size: contain;
          }
        }
        em {
          color: #F24957;
          font-style: normal;
        }
      }
    }
    &.pay-yue {
      margin-top: .3rem;
      .title {
        line-height: .22rem;
        border-bottom: .01rem solid #D3D6DA;
        span {
          line-height: .44rem;
        }        
        h3 {
          line-height: .2rem;
          margin: 0;
          font-weight: normal;
          padding-top: .03rem;
          font-size: .16rem;
        }
        p {
          line-height: .22rem;
          font-size: .12rem;
          color: #AAA;
          margin: 0;
        }
      }
    }
  }
</style>