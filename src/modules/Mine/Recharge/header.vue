<style lang="less" scoped>
.header{
  background: url(./img/bg_header.jpg);
  width: 3.75rem;
  height: 1rem;
  display: flex;
  align-items: center;
}
.p{
  color: #fff;
  font-size: .14rem;
  width: 3.35rem;
  margin: 0 auto;
  line-height: 1;
}
.p strong{
  font-size: .28rem;
  margin: 0 .1rem;

}
.button{
  float: right;
  -webkit-appearance: none;
  width: .6rem;
  height: .32rem;
  line-height: .32rem;
  color: #fff;
  font-size: .16rem;
  border-radius: 4px;
  border: 1px #fff solid;
  background: transparent;
  text-align: center;
  display: block;
}
.button:visited,.button:active{
  background: transparent;
  border: 1px #fff solid;
}

</style>
<template>
  <div class="header">
    <p class="p clearfix">
      夺宝币余额：<strong>{{money}}</strong>元
      <a class="button" @click="add">充值</a>
    </p>
  </div>
</template>

<script>
  import {XButton} from '../../../components'
  export default {
    props: {
      money: Number
    },
    components: {
      XButton
    },
    data () {
      return {
      }
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
