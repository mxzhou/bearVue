<style lang="less" scoped>
  @import "index.less";
</style>
<template>
  <div>
    <ul class="list">
      <template v-for="item in items">
        <single :item="item"></single>
      </template>
    </ul>
    <div class="edit" @click="goRule">
      <img class="img" :src="edit"/>
    </div>
    <nav-bar active="share"></nav-bar>
    <!--<confirm :show.sync="show" title="弹出框" cancel-text="取消" confirm-text="确定">{{lStorage}}1{{sStorage}}</confirm>-->
  </div>
</template>

<script type="text/ecmascript-6">
  import { Alert,Confirm,Tab, TabItem,Loading ,NavBar} from '../../components'
  import Single from './single.vue'
  import {changeTitle} from '../../utils/hack'
  import {getShareList} from '../../vuex/actions/actions.share'
  import {formatDate} from '../../utils/filters'
  import edit from '../../assets/images/ic_addarticle.png'
  export default {
    components: {
      Alert,Confirm,Tab, TabItem,Loading,NavBar,Single
    },
    filters: {
      formatDate
    },
    data () {
      return {
        edit:edit,
        show:false,
        lStorage:localStorage,
        sStorage:sessionStorage
      }
    },
    init() {
      changeTitle('晒单')
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
      this.show = true;
    },
    methods: {
      goRule:function(){
        router.go('/share/rule')
      }
    }
  }
</script>
