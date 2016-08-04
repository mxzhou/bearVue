<style lang="less" scoped>
  @import "index.less";
</style>
<template>
  <div>
    <tab class="fix">
      <tab-item :selected="title === '待晒单'" @click="getList(0)"><span>待晒单</span></tab-item>
      <tab-item :selected="title === '已晒单'" @click="getList(1)">已晒单</tab-item>
    </tab>
    <ul class="list">
      <template v-for="item in items">
        <li>
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

<script>
  import { Tab, TabItem,Loading } from '../../../components'
  import {changeTitle} from '../../../utils/hack'
  import {getSnarchRecordList} from '../../../vuex/actions'


  export default {
    components: {
      Tab, TabItem,Loading
    },
    data () {
      return {
        title: '待晒单',
        titleList:['待晒单','已晒单']
      }
    },
    init() {
      changeTitle('晒单')
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
        alert('晒单')
      },
      getList:function(index){
        this.title = this.titleList[index];
        if(index == 0){

        }else if(index == 1){

        }
      }
    }
  }

  function tick (i, cb) {
  }
</script>
