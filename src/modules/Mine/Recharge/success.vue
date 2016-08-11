<style lang="less" scoped>
  @import "./index.less";
</style>
<template>
  <div class="status">
    <img :src="img">
    <p class="p">{{message}}</p>
    <a class="btn" @click="handle">立即夺宝</a>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Loading, Group, Cell } from '../../../components'
  import {changeTitle} from '../../../utils/hack'
  import img from '../../../assets/images/img_chargesuccess.png'
  export default {
    components: {
    },

    data () {
      return {
        img:img,
        message:'恭喜您，成功充值100元！'
      }
    },

    init(){
      changeTitle('充值');
    },

    methods: {
      handle:function(){
        alert(0)
      },
    }
  }

  function tick (i, cb) {
  }
</script>
