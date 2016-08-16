<style lang="less" scoped>
  @import "index.less";
</style>
<template>
  <div>
    <div>
      <scroller lock-x scrollbar-y use-pullup use-pulldown @pulldown:loading="load" v-if="show" @pullup:loading="loadBottom" :height="height">
        <ul class="list">
          <template v-for="item in items">
            <single :item="item"></single>
          </template>
        </ul>
      </scroller>
    </div>
    <div class="edit" @click="goRule">
      <img class="img" :src="edit"/>
    </div>
    <loading :show="loading" :text="text1"></loading>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Tab, TabItem,Loading ,NavBar,Scroller} from '../../components'
  import Single from './single.vue'
  import {changeTitle} from '../../utils/hack'
  import {getShareList} from '../../vuex/actions/actions.share'
  import {formatDate} from '../../utils/filters'
  import edit from '../../assets/images/ic_addarticle.png'
  export default {
    components: {
      Tab, TabItem,Loading,NavBar,Single,Scroller
    },
    filters: {
      formatDate
    },
    data () {
      return {
        edit:edit,
        show:false,
        lStorage:localStorage,
        sStorage:sessionStorage,
        pageNumber:1,
        text1: '加载中...',
        height:'',
      }
    },
    init() {
      changeTitle('晒单')
    },
    ready(){

    },
    vuex: {
      getters: {
        items: function(store){
          return store.shareList.items
        },
        loading:({loaDing}) => loaDing.item.show
      },
      actions: {
        getShareList
      }
    },
    created(){
      var doc = document,
          metaEl = doc.querySelector('meta[name="viewport"]'),
          scale,
          dpr,
          font = doc.documentElement.style['font-size'].replace('px',''),
          match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
      scale = parseFloat(match[1]);
      var dHeight = document.documentElement.getBoundingClientRect().height;
      var height = dHeight - 0.6*font;
      this.$set('height',height+'px');
      this.getShareList();
    },
    watch: {
      items(val, oldVal) {
        if (val.length > 0) {
          this.show = true;
          this.pageNumber++
          console.log(this.pageNumber)
        }
      },
    },
    methods: {
      load (uuid) {
        this.pageNumber = 1;
        this.getShareList({pageSize:20,pageNumber:1},false)
        setTimeout(() => {
          this.$broadcast('pulldown:reset', uuid)
        }, 20)
      },
      loadBottom:function(uuid){
        this.getShareList({pageSize:20,pageNumber:this.pageNumber},true)
        setTimeout(() => {
          this.$nextTick(() => {
            this.$broadcast('pullup:reset', uuid)
          })
        }, 20)
      },
      goRule:function(){
        router.go('/share/rule')
      }
    }
  }
</script>
