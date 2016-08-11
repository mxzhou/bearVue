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
          </div>
          <div class="right">
            <p class="name">{{item.goodsName}}</p>
            <p class="p">总需：{{item.needNumber}}</p>

            <div v-show="item.status==5">
              <p class="p">中奖者：{{item.nickname}}</p>
              <p class="p">本期参与：<span class="color-red">{{item.winnerJoinNumber}}</span>人次</p>
              <p class="p">揭晓时间：{{(data.servertime+'|'+item.openTime)|formatDate}}</p>
            </div>
            <div v-if="item.status==3">
              <count-down :time="item.startTime+2*60*1000-data.servertime" :item-id="item.id"></count-down>
            </div>
          </div>
        </li>
      </template>
    </ul>
    <nav-bar active="announce"></nav-bar>
  </div>
</template>

<script type="text/ecmascript-6">
  import {CountDown,Loading,NavBar} from '../../components'
  import {changeTitle} from '../../utils/hack'
  import {getOpenList} from '../../vuex/actions/actions.open'

  export default {
    components: {
      Loading,NavBar,CountDown
    },
    filters: {
      formatDate
    },

    computed:{
    },
    data () {
      return {
        pad:true,
        show:false,
        title: '全部',
        titleList:['全部','进行中','已揭晓'],
        lastTime:0
      }
    },
    init() {
      changeTitle('最新揭晓')
    },
    vuex: {
      getters: {
        items: function(store){
          return store.openList.items.data.goodsList
        },
        data:function(store){
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
  function intNumber(n){
    return n < 10 ? '0'+n:n;s
  }

  function formatDate(time){
    var servertime = time.split('|')[0];
    var date = time.split('|')[1];
    var st = new Date(Number(servertime));
    var dt = new Date(Number(date));
    if(st.getFullYear()==dt.getFullYear() && st.getMonth()==dt.getMonth() && st.getDate()==dt.getDate()){
      return '今天'+intNumber(dt.getHours())+":"+intNumber(dt.getMinutes());
    }else {
      return dt.getFullYear()+'-'+(dt.getMonth()+1)+'-'+dt.getDate()+' '+intNumber(dt.getHours())+":"+intNumber(dt.getMinutes());
    }
  }
</script>
