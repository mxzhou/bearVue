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
// support requestAnimationFrame
(function(window) {
  "use strict";
  var lastTime = 0;
  window.requestAnimationFrame = window.requestAnimationFrame ||
      window.webkitrequestAnimationFrame ||
      function(callback) {
        var currTime = Date.now(),
            timeToCall = Math.max(0, 16 - (currTime - lastTime)),
            id = setTimeout(function() {
              callback(currTime + timeToCall);
            }, timeToCall);

        lastTime = currTime + timeToCall;

        return id;
      };
})(window);
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
      show:false
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
