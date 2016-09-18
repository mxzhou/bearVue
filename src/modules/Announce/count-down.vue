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
      items:{},
      timeTemp:0,
      remain_ssec:0,
      remain_msec:0,
      remain_sec:0,
      remain_minute:0,
      remain_hour:0
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
    this.times = this.time;
    this.timeTemp = this.times;                           // 临时时间
    alert(this.timeTemp)
    this.remain_ssec = 0;                    // mm
    this.remain_msec = 0;
    this.remain_sec = 0;                     // 秒
    this.remain_minute = 0;                  // 分钟
    this.remain_hour = 0;                    // 小时
    this.timetag = Date.now();               // 上一帧的时间
    this.hour = 0;                           // 最终显示小时
    this.min = 0;                            // 最终显示分钟
    this.sec = 0;                            // 最终显示秒
    this.ssec = 0;
    this.msec = 0;
    this.count();
    this.reqAni = window.requestAnimationFrame(this.begin);
  },
  beforeDestroy () {
    cancelAnimationFrame(this.reqAni)
  },
  methods: {
    count(){
      console.log(this.timeTemp)
      this.timeTemp = parseInt(this.timeTemp / 10);
      this.remain_ssec = this.timeTemp % 10;

      this.timeTemp = parseInt(this.timeTemp / 10);
      this.remain_msec = this.timeTemp % 10;

      this.timeTemp = parseInt(this.timeTemp / 10);
      // 秒数
      this.remain_sec = this.timeTemp % 60;
      this.timeTemp = parseInt(this.timeTemp / 60);
      // 分数
      this.remain_minute = this.timeTemp % 60;
      this.timeTemp = parseInt(this.timeTemp / 60);
      // 小时数
      this.remain_hour = this.timeTemp % 24;
      this.timeTemp = parseInt(this.timeTemp / 24);
      console.log('count')
      console.log(this.remain_minute+':'+this.remain_sec+':'+this.remain_hour)

    },
    begin() {
      let _this = this,hour,min,sec,ssec,msec;
      let minus = Date.now() - this.timetag;
      if ((minus) >= 10) {
        this.times = this.times - minus;
        console.log(this.times)
        this.count()
        console.log(this.remain_minute+':'+this.remain_sec+':'+this.remain_hour)
        //   当时间结束后倒计时停止
        if ((this.remain_minute <= 0) && (this.remain_sec <= 0) && (this.remain_hour <= 0)) {
          this.remain_minute = this.remain_sec = this.remain_hour = 0;
          _this.$set('lastTime', '正在开奖');
          _this.$http.post('/goods/win',{id:_this.itemId}).then((response) => {
            _this.$set('items', response.data);
            _this.$set('show', false);
          }, (response) => {
            // error callback
          });
          return;
        }
        alert(0)
        this.timetag = Date.now();
      }
      // 以下部分做为时间显示时补零
      hour = this.remain_hour < 10 ? '0' + this.remain_hour : this.remain_hour;
      min = this.remain_minute < 10 ? '0' + this.remain_minute : this.remain_minute;
      sec = this.remain_sec < 10 ? '0' + this.remain_sec : this.remain_sec;
      ssec = this.remain_ssec;
      msec = this.remain_msec;
      _this.$set('lastTime', min + ':' + sec + ':' +msec+ssec);
      this.reqAni = window.requestAnimationFrame(this.begin);
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
