<style lang="less" scoped>
  @import "index.less";
</style>
<template>
  <div>
    <ul class="list">
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
    <div class="edit" @click="goRule">
      <img class="img" :src="edit"/>
    </div>

  </div>
</template>

<script>
  import { Tab, TabItem,Loading } from '../../components'
  import {changeTitle} from '../../utils/hack'
  import {getSnarchRecordList} from '../../vuex/actions'
  import {formatDate} from '../../utils/filters'
  import recommend from '../../assets/images/elm_recommendshowup.png'
  import edit from '../../assets/images/ic_addarticle.png'
  export default {
    components: {
      Tab, TabItem,Loading
    },
    filters: {
      formatDate
    },
    data () {
      return {
        recommend:recommend,
        edit:edit
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
      goRule:function(){
        router.go('/share/rule')
      }
    }
  }
</script>
