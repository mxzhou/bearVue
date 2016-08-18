<style lang="less">
  @import "index.less";
</style>
<template>
  <div>
    <tab class="fix-top">
      <template v-for="item in titleList">
        <tab-item :selected="item === '全部'" @click="getList($index)">{{item}}</tab-item>
      </template>
    </tab>
    <ul class="snarch-list" v-show="!show">

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
              <a class="f-fr color-blue" @click.stop="detailFunc(item.id)">查看详情></a>
              <img :src="received" v-if="item.status != 0" alt="已获得" class="received"/>
            </div>
            <div class="detailInfo" v-if="item.status == 5">
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
    <empty :fn="fn" :show="show" title="暂无夺宝记录" btn="立即夺宝" :pad="pad" :items="items"></empty>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Tab, TabItem,Loading,Empty} from '../../../components'
  import {changeTitle} from '../../../utils/hack'
  import {getSnarchRecordList} from '../../../vuex/actions'
  import {formatDate} from '../../../utils/filters'
  import received from '../../../assets/images/img_bingostamp.png'


  export default {
    components: {
      Tab, TabItem, Loading,Empty
    },
    filters: {
      formatDate
    },
    data () {
      return {
        pad:true,
        show:false,
        title: '全部',
        titleList:['全部','进行中','已揭晓'],
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
      getList:function(index){
        if(index == 1){
          this.show = true;
        }else{
          this.show = false;

        }
      },
      fn:function(){
        alert('立即夺宝')
      },
      addFunc:function() {
        alert('add')
      },
      detailFunc:function(id){
        alert(id)
        router.go({name:'snarchDetail',params:{id:id}});
      }
    }
  }
</script>
