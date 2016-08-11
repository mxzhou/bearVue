<style lang="less" scoped>
  @import "index.less";
</style>
<template>
  <div>
    <ul class="list">
      <template v-for="item in items">
        <li class="li">
          <div class="left">
            <img class="img" :src="item.coverImgUrl">
          </div>
          <div class="right">
            <div class="desc short">
              <p class="name">{{item.goodsName}}</p>
              <p class="p">期号：{{item.id}}</p>
              <div class="p clearfix">总需：{{item.needNumber}}
              </div>
            </div>
            <a class="add" @click="addFunc">晒单</a>
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Loading } from '../../components'
  import {changeTitle} from '../../utils/hack'
  import {getSnarchRecordList} from '../../vuex/actions'

  export default {
    components: {
     Loading
    },
    data () {
      return {
      }
    },
    init() {
      changeTitle('待晒单列表')
    },
    vuex: {
      getters: {
        items: function(store){
          return store.snarchRecord.items
        }
      },
      actions: {
        getSnarchRecordList
      }
    },
    created(){
      this.getSnarchRecordList();
    },
    methods: {
      addFunc:function(){
        router.go('/share/share')
      },
    }
  }

  function tick (i, cb) {
  }
</script>
