<style lang="less" scoped>
@import "./index.less";
</style>
<template>
    <div>
      <div class="status check">
        <img :src="imgCheck">
        <p class="p">支付正在处理中...</p>
        <p class="desc">{{time}}秒后确认支付结果</p>
      </div>
  </div>
</template>

<script>
  import {changeTitle} from '../../../utils/hack'
  import imgCheck from '../../../assets/images/img_charging.png'
  let timer 
  export default {
    components: {
    },
    data () {
      return {
        time: 5,
        imgCheck: imgCheck
      }
    },
    ready(){
      changeTitle('支付结果');
      let data = this.$data;
      timer = setInterval(function(){
        if(data.time>0){
          data.time--
          console.log(data.time)
        }else{
          clearInterval(timer)
          router.go('/pay/result');
        }
      },1000);
    },
    methods: {
     
    },
    beforeDestroy () {
      clearInterval(timer)
    }
  }
  function tick (i, cb) {
  }
</script>
