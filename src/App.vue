<template>
  <div class="top-box">
    <router-view
            transition
            transition-mode="out-in">
    </router-view>
    <winning :show.sync="show" num="100000000" name="iPhone 6s Plus 128G 颜色…"></winning>
  </div>
</template>

<script>
import FastClick from 'fastclick'
import store from './vuex/store'
import {Winning} from './components'
const options = {};
FastClick.attach(document.body, options);
export default {
  store,
  components: { Winning},
  data(){
    return{
      show:true
    }
  }
}
</script>

<style lang="less">
  body {
    background-color: #eee;
    width: 3.75rem;
    margin: 0 auto;
  }
</style>
