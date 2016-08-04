<style lang="less" scoped>
  @import "index.less";
</style>
<template>
  <div>
    <tab class="fix">
      <tab-item :selected="title === '全部'" @click="title = '全部'">全部</tab-item>
      <tab-item :selected="title === '进行中'" @click="title = '进行中'">进行中</tab-item>
      <tab-item :selected="title === '已揭晓'" @click="title = '已揭晓'">已揭晓</tab-item>
    </tab>
    <ul class="list">
      <template v-for="item in items">
        <li>
          <div class="left">
            <img class="img" :src="item.coverImgUrl">
          </div>
          <div class="right">
            <div class="desc" :class="{'short':item.status == 0}">
              <p class="name">{{item.goodsName}}</p>
              <p class="p">期号：{{item.id}}</p>
              <div class="ui_bar" v-if="item.status == 0">
                <div class="active"
                     :style="{'width':((item.needNumber-item.surplusNumber)/item.needNumber)+'rem'}"></div>
              </div>
              <div class="p clearfix">总需：{{item.needNumber}}
                <div class="f-fr" v-if="item.status == 0">剩余：<span class="color-orange">{{item.surplusNumber}}</span>
                </div>
              </div>
            </div>
            <div class="clearfix p f-pr">
              本期参与：<span class="color-red">{{item.userJoinNumber}}</span>人次
              <a class="f-fr color-blue" @click="detailFunc">查看详情></a>
              <img :src="received" v-if="item.status != 0" alt="已获得" class="received"/>
            </div>
            <div class="detail" v-if="item.status == 5">
              <p class="p">获奖者：{{item.nickname}}</p>
              <p class="p color999">（{{item.address+' IP：'+item.ip}}）</p>
              <p class="p">用户ID：{{item.id}}</p>
              <p class="p">幸运号码：{{item.code}}</p>
              <p class="p">本期参与：<span class="color-red">{{item.winnerJoinNumber}}</span>人次</p>
              <p class="p">揭晓时间：{{item.openTime|formatDate}}</p>
            </div>
            <a class="add" v-if="item.status == 0" @click="addFunc">追加</a>

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
  import received from '../../../assets/images/img_bingostamp.png'


  export default {
    components: {
      Tab, TabItem, Loading
    },
    filters: {
      formatDate
    },
    data () {
      return {
        title: '全部',
        received:received
      }
    },
    init() {
      changeTitle('夺宝记录')
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
      this.getSnarchRecordList()
    },
    methods:{
      addFunc:function() {
        alert('add')
      },
      detailFunc:function(){
        alert(0)
        router.go('/mine/snarchDetail')
      }
    }
  }
</script>
