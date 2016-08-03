<style lang="less" scoped>
  @import "index.less";
  @import "../../../styles/ui/widget/ui_bar/ui_bar.less";
  .list{
    background: #fff;
    padding-top: .44rem;
  }
  .list li{
    border-bottom: solid 1px #c7c7cc;
    padding: .1rem;
    display: flex;
    align-items: flex-start;
  }
  .left{
    width: .8rem;
    margin-right: .1rem;
  }
  .img{
    width: .8rem;
    height: .8rem;
  }
  .right{
    width: 2.65rem;
    position: relative;
  }
  .desc{
    width: 100%;
    text-align: left;
  }
  .short{
    width: 1.91rem;
  }
  .name{
    line-height: .2rem;
    color: #333;
    font-size: .14rem;
  }
  .p{
    font-size: .12rem;
    color: #aaa;
    line-height: .2rem;
  }
  .fix{
    position: fixed;
    top:0;
    width: 100%;
    z-index: 1000;
  }
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
            <div class="desc"  :class="{'short':item.status == 0}">
              <p class="name">{{item.goodsName}}</p>
              <p class="p">期号：{{item.id}}</p>
              <div class="ui_bar" v-if="item.status == 0">
                <div class="active" :style="{'width':((item.needNumber-item.surplusNumber)/item.needNumber)+'rem'}"></div>
              </div>
              <div class="p clearfix">总需：{{item.needNumber}}
                <div class="f-fr" v-if="item.status == 0">剩余：<span class="color-orange">{{item.surplusNumber}}</span></div>
              </div>
            </div>
            <div class="clearfix p">
              本期参与：<span class="color-red">{{item.userJoinNumber}}</span>人次
              <p class="f-fr color-blue">查看详情></p>
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


  export default {
    components: {
      Tab, TabItem,Loading
    },
    data () {
      return {
        title: '全部'
      }
    },
    init() {
      changeTitle('我的夺宝')
    },
    vuex:{
      getters:{
        items:({snarchRecord})=>snarchRecord.items
    },

    actions:{
      getSnarchRecordList,
    }
    },
    init(){
      changeTitle('充值记录');
    },
    created(){
      this.getSnarchRecordList()
    },
    methods: {

    }
  }

  function tick (i, cb) {
  }
</script>
