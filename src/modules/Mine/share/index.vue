<style lang="less" scoped>
  @import "index.less";
</style>
<template>
  <div>
    <tab class="fix">
      <tab-item :selected="title === '待晒单'" @click="getList(0)"><span>待晒单</span></tab-item>
      <tab-item :selected="title === '已晒单'" @click="getList(1)">已晒单</tab-item>
    </tab>
    <ul class="list" v-show="indexList == 0">
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

    <ul class="list" v-show="indexList == 1">
      <template v-for="item in items">
        <li class="box">
          <div class="left">
            <img class="img" :src="item.coverImgUrl">
          </div>
          <div class="right" :class="{'noBorder':$index == 0}">
            <p class="hd clearfix">
              <span class="color-blue">{{item.nickname}}</span>
              <span class="time">{{item.openTime|formatDate}}</span>
            </p>
            <p class="bd">感谢酷狗夺宝、感谢酷狗全家八辈子，祖坟冒青烟才能让我中一次，好爽</p>
            <div class="ft">
              <img class="display-img" :src="item.coverImgUrl">
              <img class="display-img" :src="item.coverImgUrl">
              <img class="display-img" :src="item.coverImgUrl">
            </div>
            <div class="status clearfix">
              <img class="recommend" :src="recommend"/>
              <div class="le  f-fl">
                <p class="f-toe">{{item.goodsName}}</p>
                <p class="f-toe">期号：{{item.id}}</p>
              </div>
              <div class="re f-fr">
                <a class="btn">我也要</a>
              </div>
            </div>
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
  import {formatDate} from '../../../utils/filters'
  import recommend from '../../../assets/images/elm_recommendshowup.png'

  export default {
    components: {
      Tab, TabItem,Loading
    },
    filters: {
      formatDate
    },
    data () {
      return {
        title: '待晒单',
        titleList:['待晒单','已晒单'],
        indexList: 0,
        recommend:recommend
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
        this.indexList = index;
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
