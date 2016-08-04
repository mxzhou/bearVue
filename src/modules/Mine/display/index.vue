<style lang="less" scoped>
  @import "index.less";
</style>
<template>
  <div>
    <tab class="fix">
      <tab-item :selected="demo1 === '待晒单'" @click="demo1 = '待晒单'"><span>待晒单</span></tab-item>
      <tab-item :selected="demo1 === '已晒单'" @click="demo1 = '已晒单'">已晒单</tab-item>
    </tab>
  </div>
</template>

<script>
  import { Tab, TabItem,Loading } from '../../../components'
  import {changeTitle} from '../../../utils/hack'


  export default {
    components: {
      Tab, TabItem,Loading
    },
    data () {
      return {
        demo1: '待晒单',
      }
    },
    init() {
      changeTitle('我的夺宝')
    },
    methods: {

    }
  }

  function tick (i, cb) {
  }
</script>
