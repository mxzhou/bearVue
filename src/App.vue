<template>
  <div class="top-box">
    <router-view
            transition="fade"
            transition-mode="out-in">
    </router-view>
    <winning :show.sync="show" num="100000000" name="iPhone 6s Plus 128G 颜色…"></winning>
    <nav-bar :active="page"></nav-bar>
    <loading :show="loading"></loading>
    <toast :show=""></toast>
  </div>
</template>

<script type="text/ecmascript-6">
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
  window.cancelAnimationFrame = window.cancelAnimationFrame
      || window.cancelRequestAnimationFrame
      || window.webkitCancelAnimationFrame
      || window.webkitCancelRequestAnimationFrame
      || window.mozCancelRequestAnimationFrame
      || window.oCancelRequestAnimationFrame
      || window.msCancelRequestAnimationFrame
      || clearTimeout;
})(window);
import FastClick from 'fastclick'
import store from './vuex/store'
import {Loading,Winning,NavBar,Toast} from './components'
const options = {};
FastClick.attach(document.body, options);
export default {
  store,
  components: { Loading,Winning,NavBar,Toast },
  data(){
    return{
      show: false,
      page: 'none'
    }
  },
  vuex: {
    getters: {

      loading:({loading}) => loading.item.show

    }
  },
  methods: {
    goRouter (link) {
      link = link.replace(/\//gi,'')
      if(link == 'home' || link == ''){
        this.page = 'home'
      }else if(link == 'announce'){
        this.page = 'announce'
      }else if(link == 'share'){
        this.page = 'share'
      }else if(link == 'mine'){
        this.page = 'mine'
      }else{
        this.page = 'none'
      }
    }
  }
}
</script>

<style lang="less">
  @import "./styles/ui/ui.less";
  html{
    height: 100%;
  }
  body {
    background-color: #eee;
    width: 3.75rem;
    margin: 0 auto;
  }
  .fade-transition {
    transition: opacity  .1s ease;
  }
  .fade-enter, .fade-leave {
    opacity: 0;
  }
</style>
