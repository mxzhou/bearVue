<!--模板 -->
<template>
  <div>
    NotFound
  </div>
</template>

<!--VM定义 -->
<script>
export default {
  components: {
  },
  data () {
    return {
      list:[
        {path:'alert',text:'alert'},
        {path:'toast',text:'toast'}
      ]
    }
  }
}
</script>
<!-- 引入样式 -->
<style lang="less" scoped>
@import "NotFound.less";
</style>
