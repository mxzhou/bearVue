<template>
  <div class="top-box">
    <router-view
            transition
            transition-mode="out-in">
    </router-view>
  </div>
</template>

<script>
import store from './vuex/store'

export default {
  store,
  components: { }
}
</script>

<style lang="less">
  @import './styles/ui/base/reset.less';

  body {
    background-color: #fbf9fe;
  }
</style>
