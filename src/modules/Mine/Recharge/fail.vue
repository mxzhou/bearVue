<style lang="less" scoped>
@import "./index.less";
</style>
<template>
  <div class="status">
    <img :src="img">
    <p class="p">{{message}}</p>
    <p class="desc">{{desc1}}</p>
    <p class="desc">{{desc2}}</p>
    <a class="btn" @click="handle">重新充值</a>
  </div>
</template>

<script>
  import { Loading, Group, Cell } from '../../../components'
  import {changeTitle} from '../../../utils/hack'
  import img from '../../../assets/images/img_empty.png'
  export default {
    components: {
    },

    data () {
      return {
        img:img,
        message:'非常抱歉！充值失败',
        desc1:'该笔充值次数异常，如有疑问请与我们联系',
        desc2:'客服电话：020-2654554'
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
