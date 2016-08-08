<template>
  <div class="top-box">
    <router-view
            transition
            transition-mode="out-in">
    </router-view>
  </div>
</template>

<script>
import FastClick from 'fastclick'
import store from './vuex/store'
const options = {};
FastClick.attach(document.body, options);
export default {
  store,
  components: { }
}
</script>

<style lang="less">
  body {
    background-color: #eee;
    width: 3.75rem;
    margin: 0 auto;
  }
</style>
