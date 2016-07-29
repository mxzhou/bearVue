<!--模板 -->
<template>
  <div class="box">
    <img :src="emptyImg"/>
    <p class="desc">暂无内容</p>
  </div>
</template>

<!--VM定义 -->
<script>
import img from '../../assets/images/img_empty.png'
export default {

  components: {
  },
  data () {
    return {
      emptyImg:img
    }
  }
}
</script>
<!-- 引入样式 -->
<style lang="less" scoped>
.box{
  display: flex;
  flex-direction:row;
  justify-content:center;
  align-items: center;
  align-content:center;
}
</style>
