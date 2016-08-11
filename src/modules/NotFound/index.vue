<!--模板 -->
<template>
  <div class="box">
    <div>
      <img :src="emptyImg"/>
      <p class="description">暂无内容</p>
    </div>
  </div>
</template>

<!--VM定义 -->
<script type="text/ecmascript-6">
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
  padding-top: 1.94rem;
  text-align: center;
}
.description{
  margin-top: .1rem;
  color: #666;
  font-size: .16rem;
  line-height: .24rem;
}
</style>
