<template>
  <div class="winning" v-show="show">
    <div class="mask"></div>
    <div class="content">
      <a class="close" @click.prevent="closeFunc"></a>
      <div class="cover_img"><img :src="src"/></div>
      <p class="num">期号: {{num}}</p>
      <p class="name">{{name}}</p>
      <a class="button">{{button}}</a>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    num: {
      type: String,
      default:0
    },
    src: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    button: {
      type: String,
      default: '设置收货地址'
    }
  },
  methods: {
    closeFunc(){
      this.show=false;
    }
  }
}
</script>

<style lang="less">
@import "./index.less";
</style>
