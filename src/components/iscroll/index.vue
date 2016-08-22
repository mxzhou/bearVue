<template>
  <div>
    <div id="wrapper" class="wrapper">
      <div class="scroller">
        <div  class="pullDown">
          <span>下拉刷新…</span>
        </div>
        <slot></slot>
        <div class="pullUp">
          <span>上拉加载更多…</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import IScroll from 'iscroll/build/iscroll-probe'

export default {
  props: {

  },
  methods: {
    reset(){
      this.myScroll.refresh()
    },
    pullDownAction(){
      this.$emit('pulldown:loading', this.uuid)
      this.myScroll.refresh();
    },
    pullUpAction(){
      this.$emit('pullup:loading', this.uuid)
      this.myScroll.refresh();
    }
},
  compiled () {
    this.uuid = Math.random().toString(36).substring(3, 8)
  },
  computed: {
  },
  ready () {
    var _this = this;
    var pullDownFlag,pullUpFlag;
    function positionJudge(){
      console.log('y:'+this.y)
      console.log('scrollY:'+this.maxScrollY)
      if(this.y>50){    //判断下拉
        pullDownFlag = 1;
      }else if(this.y<(this.maxScrollY-50)){   //判断上拉
        pullUpFlag = 1;
      }
    }
    function action(){
      if(pullDownFlag==1){
        _this.pullDownAction();
        pullDownFlag = 0;
      }else if(pullUpFlag==1){
        _this.pullUpAction();
        pullUpFlag = 0;
      }
    }
    pullDownFlag = 0;
    pullUpFlag = 0;
    _this.myScroll = new IScroll("#wrapper",{
      probeType: 3,
      mouseWheel: false,//鼠标滑轮开启
      scrollbars: true,//滚动条可见
      fadeScrollbars: true,//滚动条渐隐
      interactiveScrollbars: true,//滚动条可拖动
//      shrinkScrollbars: 'scale', // 当滚动边界之外的滚动条是由少量的收缩
//      useTransform: true,//CSS转化
//      useTransition: true,//CSS过渡
//      bounce: true,//反弹
//      freeScroll: false,//只能在一个方向上滑动
//      startX: 0,
//      startY: 0,
    });
    _this.myScroll.on('scroll',positionJudge);
    _this.myScroll.on("scrollEnd",action);
  },
  events: {
    'pulldown:reset' (uuid) {
      this.reset()
    },
    'pullup:reset' (uuid) {
      this.reset()
    }
  },
  beforeDestroy () {
    this.myScroll = null;
  }
}
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
