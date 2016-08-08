<style lang="less" scoped>
  @import "index.less";
</style>
<template>
  <div>
    <div class="rule">
      <div class="banner">
        <img :src="imgBanner"/>
      </div>
      <p class="hd">如何拿到5个夺宝币？</p>
      <div class="bd">
        <ul>
          <li class="clearfix">
            <div class="left">1</div>
            <div class="right">
              <p class="title">内容详细</p>
              <p class="content">详细是晒单的精华。建议您的晒单不少于30个字，提供3张不同的照片（跪求高清无码）。</p>
            </div>
          </li>
          <li class="clearfix">
            <div class="left">2</div>
            <div class="right">
              <p class="title">真实</p>
              <p class="content">真实是晒单的灵魂。因此，您可以将快递单号也晒上来哦（快递单上的个人隐私部分，建议您马赛克处理下）。</p>
            </div>
          </li>
          <li class="clearfix">
            <div class="left">3</div>
            <div class="right">
              <p class="title">传奇show</p>
              <p class="content">大家都喜欢沾仙气呢。因此，您可以出镜和商品合个影什么的，给大家一起膜拜就再好不过了。</p>
            </div>
          </li>
        </ul>
      </div>
      <p class="hint">
        小提示：<br/>
        晒单的质量越高越好，还可能获得额外的夺宝币奖励哦~
      </p>
    </div>
    <div class="ui-bottom">
      <a class="ui_btn_bottom" @click="startFunc">开始晒单</a>
    </div>
  </div>
</template>

<script>
  import {Loading} from '../../components'
  import {changeTitle} from '../../utils/hack'
  import {getOpenList} from '../../vuex/actions/actions.open'
  import imgBanner from '../../assets/images/bg_showupbanner.jpg'

  export default {
    components: {
      Loading
    },
    data () {
      return {
        imgBanner: imgBanner,
      }
    },
    init() {
      changeTitle('晒单')
    },
    vuex: {
      getters: {
        items: function (store) {
          return store.openList.items.buyLogList
        }
      },
      actions: {
        getOpenList
      }
    },
    created(){
    },
    methods: {
      startFunc: function (index) {
        router.go('/share/unShare');
      }
    }
  }
</script>
