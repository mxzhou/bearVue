<style lang="less" scoped>
  @import "index.less";
</style>
<template>
  <div>
    <tab>
      <tab-item :selected="demo1 === '已发货'" @click="demo1 = '已发货'">已发货</tab-item>
      <tab-item :selected="demo1 === '未发货'" @click="demo1 = '未发货'">未发货</tab-item>
      <tab-item :selected="demo1 === '全部订单'" @click="demo1 = '全部订单'">全部订单</tab-item>
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
        demo1: '未发货',
        demo5: '未发货',
        demo2: '美食',
        list3: ['收到的消息', '发出的消息'],
        demo3: '收到的消息',
        list4: ['正在正映', '即将上映'],
        demo4: '即将上映',
        demo6: '未发货',
        index: 0
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
