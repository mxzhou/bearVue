<style lang="less" scoped>
@import "./index.less";
</style>
<template>
    <div>
      <div class="status" style="display:none;">
        <img :src="imgFail">
        <p class="p">非常抱歉！充值失败</p>
        <p class="desc">多支付的金额会退回到您的账号余额中<br>下次参与可以直接抵扣</p>
        <a class="btn" @click="handle">重新夺宝</a>
      </div>
      <div class="status">
        <img :src="imgSuccess">
        <p class="p">成功参与一元买！</p>
        <p class="desc">请等待系统为您揭晓</p>
        <a class="btn" @click="handle">继续夺宝</a>
        <a class="btn transparent" @click="goMyRecord()">查看夺宝记录</a>
      </div>
      <div class="list-area">
          <div class="list-title">您成功参与了1件商品共34人次一元买，信息如下</div>
          <div class="list-item">
              <div class="title">
                  <span class="fr"><em>12</em>人次</span>
                  <span class="fl">1箱6瓶丨茅台 53度500毫升五星贵州茅台酒</span>
              </div>
              <p>商品期号：32323322</p>
              <div class="code-list">
                  酷买号码：<span>10000006</span><span>10000006</span><span>10000006</span><span>10000006</span><span>10000006</span><span>10000006</span><span>10000006</span>
              </div>
              <a class="fixbtn">查看全部</a>
          </div>
      </div>
      <div class="list-area">
          <div class="list-title">您参与<span>失败</span>了1件商品共12人次一元买，信息如下</div>
          <div class="list-item">
              <div class="title">
                  <span class="fr"><em>12</em>人次</span>
                  <span class="fl">1箱6瓶丨茅台 53度500毫升五星贵州茅台酒</span>
              </div>
              <p>商品期号：32323322</p>
              <div class="code-list">
                  酷买号码：<span>10000006</span><span>10000006</span><span>10000006</span><span>10000006</span><span>10000006</span><span>10000006</span><span>10000006</span>
              </div>
              <a class="fixbtn">查看全部</a>
          </div>
      </div>
      <div class="list-area">
          <div class="list-title">您参与<span>失败</span>了1件商品共12人次一元买，信息如下</div>
          <div class="list-item">
              <div class="title">
                  <span class="fr"><em>12</em>人次</span>
                  <span class="fl">1箱6瓶丨茅台 53度500毫升五星贵州茅台酒</span>
              </div>
              <p>商品期号：32323322</p>
              <div class="code-list">
                  酷买号码：<span>10000006</span><span>10000006</span><span>10000006</span><span>10000006</span><span>10000006</span><span>10000006</span><span>10000006</span>
              </div>
              <a class="fixbtn">查看全部</a>
          </div>
      </div>
      <div class="list-area">
          <div class="list-title">您参与<span>失败</span>了1件商品共12人次一元买，信息如下</div>
          <div class="list-item">
              <div class="title">
                  <span class="fr"><em>12</em>人次</span>
                  <span class="fl">1箱6瓶丨茅台 53度500毫升五星贵州茅台酒</span>
              </div>
              <p>商品期号：32323322</p>
              <div class="code-list">
                  酷买号码：<span>10000006</span><span>10000006</span><span>10000006</span><span>10000006</span><span>10000006</span><span>10000006</span><span>10000006</span>
              </div>
              <a class="fixbtn">查看全部</a>
          </div>
      </div>
  </div>
</template>

<script>
  import { Loading, Group, Cell } from '../../../components'
  import {changeTitle} from '../../../utils/hack'
  import imgFail from '../../../assets/images/img_empty.png'
  import imgSuccess from '../../../assets/images/img_success.png'
  export default {
    components: {
    },

    data () {
      return {
        imgSuccess: imgSuccess,
        imgFail: imgFail
      }
    },

    init(){
      changeTitle('充值');
    },

    methods: {
      handle:function(){
        router.go('/');
      },
      goMyRecord () {
        router.go('/mine/snarchRecord');
      }
    }
  }
  function tick (i, cb) {
  }
</script>
