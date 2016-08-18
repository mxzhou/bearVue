<style lang="less">
  @import "index.less";
</style>
<template>
  <div>
    <scroller lock-x scrollbar-y use-pullup use-pulldown @pulldown:loading="load" v-if="show" @pullup:loading="loadBottom" :height="height" v-ref:scroller>
      <ul class="share-list">
        <template v-for="item in items">
          <single :item="item"></single>
        </template>
      </ul>
    </scroller>
    <div class="share-edit" @click="goRule">
      <img class="img" :src="edit"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Tab, TabItem ,NavBar,Scroller} from '../../components'
  import Single from './single.vue'
  import {changeTitle} from '../../utils/hack'
  import {getShareList} from '../../vuex/actions/actions.share'
  import {formatDate} from '../../utils/filters'
  import edit from '../../assets/images/ic_addarticle.png'
  export default {
    components: {
      Tab, TabItem,NavBar,Single,Scroller
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
        height:'',
        bAdd:false,
        uuid:''
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
        }
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
          if(this.bAdd){
            this.$broadcast('pullup:reset', this.uuid);
          }else{
            this.$broadcast('pulldown:reset', this.uuid);
          }
          this.show = true;
          this.pageNumber++
        }
      },
    },
    methods: {
      load (uuid) {
        this.bAdd = false;
        this.uuid = uuid
        this.pageNumber = 1;
        this.getShareList({pageSize:20,pageNumber:1},false)
      },
      loadBottom:function(uuid){
        this.bAdd = true;
        this.uuid = uuid;
        this.getShareList({pageSize:20,pageNumber:this.pageNumber},true)
      },
      goRule:function(){
        router.go('/share/rule')
      }
    }
  }
</script>
