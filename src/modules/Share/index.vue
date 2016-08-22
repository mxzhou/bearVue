<style lang="less">
  @import "index.less";
</style>
<template>
  <div>
    <iscroll lock-x scrollbar-y use-pullup use-pulldown @pulldown:loading="load" v-if="show" @pullup:loading="loadBottom" :height="height" v-ref:scroller>
      <ul class="share-list">
        <template v-for="item in items">
          <single :item="item" @expand="expandFunc"></single>
        </template>
      </ul>
    </iscroll>
    <div class="share-edit" @click="goRule">
      <img class="img" :src="edit"/>
    </div>
    <div class="m-expand-mask" v-if="bExpand" @click="collapse"></div>
    <div class="expandImg" v-if="bExpand" @click="collapse">
      <img :src="expandSrc" class="expand-img" @click="collapse">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Tab, TabItem ,NavBar,Iscroll} from '../../components'
  import Single from './single.vue'
  import {changeTitle} from '../../utils/hack'
  import {getShareList} from '../../vuex/actions/actions.share'
  import {formatDate} from '../../utils/filters'
  import edit from '../../assets/images/ic_addarticle.png'
  export default {
    components: {
      Tab, TabItem,NavBar,Single,Iscroll
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
        uuid:'',
        bExpand:false,
        expandSrc:''
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
      this.getShareList();
    },
    watch: {
      items(val, oldVal) {
        if (val.length > 0) {
          this.show = true;
          if(this.bAdd){
            this.$broadcast('pullup:reset', this.uuid);
          }else{
            this.$broadcast('pulldown:reset', this.uuid);
          }
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
      },
      expandFunc:function(img){
        this.bExpand = true
        this.expandSrc = img;
      },
      collapse:function(){
        this.bExpand = false
      }
    }
  }
</script>
