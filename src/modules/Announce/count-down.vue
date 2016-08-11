<style scoped>
  .p{
    font-size: .12rem;
    color: #aaa;
    line-height: .2rem;
  }
  .last{
    font-size: .24rem;
    color: #F1453D;
    line-height: .33rem;
  }
  .em{
    width: .21rem;
    height: .21rem;
    vertical-align: middle;
    position: relative;
    top: -.02rem;
  }
  .label{
    position: absolute;
    width: .54rem;
    height: .54rem;
    top: -.1rem;
    left: -1.2rem;
  }
</style>
<template>
  <div v-if="show" class="last">
    <img :src="imglabel" class="label">
    <img class="em" :src="imgRecount"/>
    <span :time="time">{{lastTime}}</span>
  </div>

  <template v-if="!show">
    <p class="p">中奖者：{{items.data.nickname}}</p>
    <p class="p">本期参与：<span class="color-red">{{items.data.joinNumber}}</span>人次</p>
    <p class="p">揭晓时间：{{(items.servertime+'|'+items.data.openTime)|formatDate}}</p>
  </template>
</template>

<script type="text/ecmascript-6">
import imglabel from '../../assets/images/img_lable.png'
import imgRecount from '../../assets/images/ic_s_recount.png'
import {getWin} from '../../vuex/actions/actions.open'
export default {
  components: {

  },
  data(){
    return{
      lastTime:'',
      show:true,
      imgRecount:imgRecount,
      imglabel:imglabel,
      items:{}
    }
  },
  filters: {
    formatDate
  },
  props: {
    time: {
      type: Number,
      default: 0
    },
    itemId:{
      type: Number
    }
  },
  created(){
    var _this = this;
    var times = this.time;
    var timeTemp,                           // 临时时间
        remain_ssec = 0,                    // mm
        remain_sec = 0,                     // 秒
        remain_minute = 0,                  // 分钟
        remain_hour = 0,                    // 小时
        timetag = Date.now(),               // 上一帧的时间
        hour = 0,                           // 最终显示小时
        min = 0,                            // 最终显示分钟
        sec = 0;                            // 最终显示秒
    function count(){
      timeTemp = parseInt(times / 10);
      remain_ssec = timeTemp % 100;
      timeTemp = parseInt(timeTemp / 100);
      // 秒数
      remain_sec = timeTemp % 60;
      timeTemp = parseInt(timeTemp / 60);
      // 分数
      remain_minute = timeTemp % 60;
      timeTemp = parseInt(timeTemp / 60);
      // 小时数
      remain_hour = timeTemp % 24;
      timeTemp = parseInt(timeTemp / 24);
    }

    count();

    function begin() {
      var minus = Date.now() - timetag;
      if ((minus) >= 100) {
        times = times - minus;
        count()
        //   当时间结束后倒计时停止
        if ((remain_minute <= 0) && (remain_sec <= 0) && (remain_hour <= 0)) {
          remain_minute = remain_sec = remain_hour = 0;
          _this.$set('lastTime', '正在开奖');

          _this.$http.get('/api/goods/win').then((response) => {
            _this.$set('items', response.data);
            _this.$set('show', false);
          }, (response) => {
            // error callback
          });
          return;
        }
        timetag = Date.now();
      }
      // 以下部分做为时间显示时补零
      if (remain_hour < 10) {
        hour = '0' + remain_hour;
      } else {
        hour = remain_hour;
      }
      if (remain_minute < 10) {
        min = '0' + remain_minute;
      } else {
        min = remain_minute;
      }
      if (remain_sec < 10) {
        sec = '0' + remain_sec;
      } else {
        sec = remain_sec;
      }
      _this.$set('lastTime', min + ':' + sec + ':' + remain_ssec);
      window.requestAnimationFrame(begin);
    }
    window.requestAnimationFrame(begin);
  },
  methods: {}
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
