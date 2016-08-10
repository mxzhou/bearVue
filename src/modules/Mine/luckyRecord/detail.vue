<style lang="less" scoped>
  @import "index.less";
</style>
<template>
  <div class="product-detail">
    <div class="block">
      <p class="head">奖品状态</p>
      <ul class="status">
        <template v-for="item in list">
          <li class="clearfix">
            <div class="circle">
              <div class="selected" v-if="item.selected"></div>
              <div class="line" v-if="$index !=3"></div>
            </div>
            <div class="left">{{item.name}}</div>
            <div class="right">2016-01-22 15:04</div>
          </li>
        </template>
      </ul>
    </div>
    <div class="block">
      <p class="head">地址信息</p>
      <div class="box">
        <div class="bd">
          <p class="clearfix">
            <span class="color-blue">用户名</span>
            <span class="phone">13800138000</span>
          </p>
          <div class="clearfix">
            <p class="address">广东省广州市天河区黄埔大道中315号羊城晚报创意产业园内编 1-18</p>
          </div>
        </div>
      </div>
    </div>
    <div class="block">
      <p class="head">物流信息</p>
      <div class="detail">
        <div class="desc">
          <p class="p clearfix logistics">
            <span class="color-blue">网易游戏印象 游戏表情创意擦手巾</span><br>
            物流公司: 韵达快递<br>
            运单号码: 31009027454<br>
          </p>
          <a class="btn">查看物流</a>
        </div>
      </div>
    </div>
    <div class="block">
      <p class="head">奖品详情</p>
      <div class="detail">
        <div class="left">
          <img class="img" src="http://p1.fx.kgimg.com/v2/kmh_1_img/T1Bc_4BbK_1RCvBVdK.jpg">
        </div>
        <div class="right">
          <div class="desc">
            <p class="name">iPhone6 4.7英寸 64G 颜色随机 自带美颜滤镜 ILCE-7RM2</p>
            <p class="p">
              期号：312734745772<br>
              总需：10086<br>
              本期参与：<span class="color-red">2</span>人次<br>
              揭晓时间：2016-01-22 04:32:51</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { Tab, TabItem,Loading } from '../../../components'
  import {changeTitle} from '../../../utils/hack'
  import {getSnarchRecordList} from '../../../vuex/actions'


  export default {
    components: {
      Tab, TabItem, Loading
    },
    data () {
      return {
        title: '全部',
        list: [
          {name: '获得奖品'}, {name: '确认收货地址'}, {name: '奖品派发', selected: true}, {name: '已签收'}
        ]
      }
    },
    init() {
      changeTitle('商品详情')
    },
    created(){
    },
    methods: {}
  }

  function tick(i, cb) {
  }
</script>
