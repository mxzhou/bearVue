<style lang="less">
  @import "index.less";
</style>
<template>
  <div>
    <scroller lock-x scrollbar-y use-pullup use-pulldown v-if="show" @pulldown:loading="load"  @pullup:loading="loadBottom" :height="height" v-ref:scroller>
      <ul class="announce-list">
        <template v-for="item in items">
          <li>
            <div class="left">
              <img class="img" v-lazy="item.coverImgUrl">
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
                <count-down :time="item.startTime+60*1000-data.servertime" :item-id="item.id"></count-down>
              </div>
            </div>
          </li>
        </template>
      </ul>
    </scroller>
  </div>
</template>

<script type="text/ecmascript-6">
  import {NavBar,Scroller} from '../../components'
  import CountDown from './count-down.vue'
  import {changeTitle} from '../../utils/hack'
  import {getOpenList} from '../../vuex/actions/actions.open'
  import {getAreaList} from '../../vuex/actions'

  export default {
    components: {
      NavBar,CountDown,Scroller
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
        lastTime:0,
        lastId:0,
        bAdd:false,
        height:'',
        uuid:''
      }
    },
    init() {
      changeTitle('最新揭晓')
    },
    vuex: {
      getters: {
        items: function(store){
          return store.openList.items
        },
        data:function(store){
          return store.openList.data
        }

      },
      actions: {
        getOpenList,getAreaList
      }
    },
    watch: {
      items(val,oldVal) {
        if(this.bAdd){
          this.$broadcast('pullup:reset', this.uuid);
        }else{
          this.$broadcast('pulldown:reset', this.uuid);
        }
        this.show = true
        this.lastId = val[val.length-1].id
      }
    },
    created(){
      var doc = document,
          metaEl = doc.querySelector('meta[name="viewport"]'),
          scale,
          dpr,
          font = doc.documentElement.style['font-size'].replace('px',''),
          match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
      scale = parseFloat(match[1]);
      var dHeight = document.documentElement.getBoundingClientRect().height;
      var height = dHeight - 0.6*font;
      this.$set('height',height+'px');
      this.getOpenList({pageSize:10,lastId:0},false)
    },
    methods:{
      load (uuid) {
        this.bAdd = false;
        this.uuid = uuid
        this.getOpenList({pageSize:10,lastId:0},false)
      },
      loadBottom:function(uuid){
        this.bAdd = true;
        this.uuid = uuid
        this.getOpenList({pageSize:10,lastId:this.lastId},true);
      },
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
