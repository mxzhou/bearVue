<style lang="less" scoped>
  @import "index.less";
</style>
<template>
  <div>
    <ul class="list">
      <template v-for="item in items">
        <li>
          <div class="left">
            <img class="img" :src="item.coverImgUrl">
            <img :src="imglabel" class="label"  v-show="item.status==3">
          </div>
          <div class="right">
            <p class="name">{{item.goodsName}}</p>
            <p class="p">总需：{{item.needNumber}}</p>

            <div v-show="item.status==5">
              <p class="p">中奖者：{{item.nickname}}</p>
              <p class="p">本期参与：<span class="color-red">{{item.winnerJoinNumber}}</span>人次</p>
              <p class="p">揭晓时间：{{item.openTime|formatDate}}</p>
            </div>
            <div v-show="item.status==3" class="last">
              <img class="em" :src="imgRecount"/>
              <span>04:31:26</span>
            </div>
          </div>
        </li>
      </template>
    </ul>
    <nav-bar active="announce"></nav-bar>
  </div>
</template>

<script>
  import {Loading,NavBar} from '../../components'
  import {changeTitle} from '../../utils/hack'
  import {getOpenList} from '../../vuex/actions/actions.open'
  import {formatDate} from '../../utils/filters'
  import imglabel from '../../assets/images/img_lable.png'
  import imgRecount from '../../assets/images/ic_s_recount.png'


  export default {
    components: {
      Loading,NavBar
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
        imglabel:imglabel,
        imgRecount:imgRecount
      }
    },
    init() {
      changeTitle('最新揭晓')
    },
    vuex: {
      getters: {
        items: function(store){
          return store.openList.items
        }
      },
      actions: {
        getOpenList
      }
    },
    created(){
      this.getOpenList()
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
      detailFunc:function(){
        alert(0)
        router.go('/mine/snarchDetail')
      }
    }
  }
</script>
