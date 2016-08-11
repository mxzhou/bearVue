<style lang="less" scoped>
  @import "index.less";
</style>
<template>
  <div>
    <div class="share">
      <div class="hd">
        <x-textarea title="" placeholder="分享此刻的喜悦…" :required="false" :value.sync="content"></x-textarea>
        <div class="file-list" :style="styles">
          <template v-for="item in items">
            <img class="item" />
          </template>
          <div class="item file" @click="upLoad">
            <span>+</span>
          </div>
        </div>
      </div>
      <div class="bd">
        <div class="left">
          <img :src=""/>
        </div>
        <div class="right">
          <p class="name">外星人 15.6 英寸游戏本 型号 ALW15ER - 3718</p>
          <p class="p">期号: 301395031<br>
            总需: 10086</p>
        </div>

      </div>
    </div>
    <div class="ui-bottom">
      <a class="ui_btn_bottom" @click="submitFunc">提交</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Loading,XTextarea} from '../../components'
  import {changeTitle} from '../../utils/hack'
  import {getOpenList} from '../../vuex/actions/actions.open'
  export default {
    components: {
      Loading,
      XTextarea
    },
    data () {
      return {
        content: '',
        items:[1]
      }
    },
    computed: {
      styles () {
        var w = this.items.length +1+0.3+ (this.items.length) * 0.1;
        w = w > 3.5 ? 3.5 : w;
        return {
          'width': w + 'rem'

        }
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
      upLoad:function(){
        alert('upload');
      },
      submitFunc: function (index) {
        router.go('/share');
      }
    }
  }
</script>
