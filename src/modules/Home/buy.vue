<template>
  <div>
    <div class="buy-block">
      <div class="bg"></div>
      <div class="buy-container">
        <h3>参与人数</h3>
        <a class="btn-close"><img :src="imgClose"></a>
        <div class="input-area">
          <a class="btn-minus" @click="minus()">-</a>
          <input type="tel" maxlength="10" :value="money">
          <a class="btn-plus" @click="plus()">+</a>
        </div>
        <div class="btn-area">
          <template v-for="item in list">
            <a class="link" :class="{'selected':$index == index}" @click="selectMoney($index)">{{item.money}}</a>
          </template>
        </div>
        <div class="status">商品夺宝正火热进行</div>
        <a class="btn">立即夺宝</a>
      </div>
    </div>
  </div>
</template>
<script>
import imgClose from '../../assets/images/ic_s_close_p.png'
export default {
  props: ['number'],
  data () {
    return {
      imgClose: imgClose,
      money: 1,
      list: [
        { money: '5' },
        { money: '20' },
        { money: '50' },
        { money: '包尾' }
      ]
    }
  },
  methods: {
    onClick () {
      go(this.link, this.$router)
    },
    plus () {
      this.money++
    },
    minus () {
      if(this.money>1){
        this.money--
      }
    },
    selectMoney (index) {
      this.index = index;
      let money = this.list[index].money
      if(money=='包尾'){
        this.money = 100
      }else{
        this.money = money
      }
    }
  }
}
</script>
<style lang="less" scoped>
  .buy-block  {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: none;  
    z-index: 101;  
    .bg {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0);
      -webkit-transition-duration: .5s;
    }
    .buy-container {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2.5rem;
      background: #FFF;
      h3 {
        font-size: .16rem;
        color: #333;
        line-height: .4rem;
        text-align: center;
        font-weight: normal;
        margin: .06rem 0;
      }
      .btn-close {
        position: absolute;
        width: .16rem;
        height: .16rem;
        top: .15rem;
        right: .15rem;
        img {
          width: 100%;
        }
      }
      .input-area {
        position: relative;
        width: 3rem;
        height: .4rem;
        margin: .2rem auto;
        input {
          width: 1.8rem;
          height: .4rem;
          line-height: .4rem; 
          margin: 0;
          padding: 0;
          float: left;
          border: .01rem solid #5393E0;
          border-left: none;
          border-right: none;
          font-size: .18rem;
          color: #333;
          text-align: center;
          border-radius: 0;
          box-shadow: none;
        }
         a {
          display: inline-block;
          width: .6rem;
          height: .4rem;
          line-height: .34rem;
          text-align: center;
          font-size: .3rem;
          color: #5393E0;
          background: #EEF5FD;
          border: .01rem solid #5393E0;
          float: left;
          &:nth-child(1) {
            border-top-left-radius: .04rem;
            border-bottom-left-radius: .04rem;
          }
          &:nth-child(3) {
            border-top-right-radius: .04rem;
            border-bottom-right-radius: .04rem;
          }
         }
      }
    }
    .status {
      position: relative;
      width: 100%;
      text-align: center;
      font-size: .14rem;
      color: #AAA;
      line-height: .4rem;
    }
    .btn-area {
      position: relative;
      width: 3rem;
      margin: auto;
      a.link {
        display: inline-block;
        width: .6rem;
        height: .4rem;
        line-height: .4rem;
        border-radius: .04rem;
        margin-right: .2rem;
        border: .01rem solid #CCC;
        font-size: .16rem;
        color: #666;
        text-align: center;
        &:last-child {
          margin-right: 0;
        }
      }
    }
    &.active {
      display: block;
      .bg {
        background: rgba(0,0,0,0.8);
      }
    }
  }
 .btn{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: .44rem;
    line-height: .44rem;
    font-size: .16rem;
    color: #FFF;
    background: #00CC77;
    text-align: center;
    &:active {
      background: #008950;
    }
  }
  .btn.selected{
    background: #0c7;
    color: #fff;
    border: none;
  }
</style>