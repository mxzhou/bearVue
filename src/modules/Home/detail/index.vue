<template>
    <div>

        <Swiper :list="goodsDetail.goodsImgList" :loop="true" :height="adHeight" :theme="theme" :top="adTop"></Swiper>
        <!-- 商品信息 satrt -->
        <div class="info">
            <h3><span class="status green">进行中</span><span class="status blue">已揭晓</span><span class="status gray">已下架</span>{{goodsDetail.goodsName}}</h3>
            <p>狂酷拽霸叼炸天的手机，秒杀安卓WP，装逼实用一样不落，新时代人类的首选</p>
        </div>
        <div class="status-bar" style="display:none;">
            期号：2394024923424
            <div class="progress-bar">
              <div class="inner"></div>
            </div>
            <div class="fr">剩余: <em>2333</em></div>
            <div class="fl">总需: 10086</div>
        </div>
        <div class="status-bar" style="height:0.9rem;display:none;">
            <div class="countdown">
                <a class="fr btn">计算详情</a>
                <p>期号: 301221284</p>
                <h3>揭晓倒计时 00:08:13</h3>
            </div>
        </div>
        <div class="status-bar" style="height:0.9rem;">
            <div class="removed">
                奖品已下架
            </div>
        </div>
        <div class="status-block" style="display:none;">
            <div class="winner-block">
                <div class="inner">
                    <div class="user-pic">
                        <img src="../../../assets/images/img_cartempty.png">
                    </div>
                    <h4>获奖者：<span class="winnerName">是第三方的</span></h4>
                    <p style="color:#AAA;">（中国广东 IP：12423424234）</p>
                    <p>用户ID: 2434234</p>
                    <p>本期参与: <span class="red">234432</span> 人次</p>
                    <p>本期期号: 2434234</p>
                    <p>揭晓时间: 2434234</p>
                </div> 
                <div class="lucky-num">
                    <a class="fr">计算详情&gt;</a>
                    幸运号码：10004435
                </div> 
            </div>
        </div>
        <div class="join">
            你还没有参加，赶快参加吧！
        </div>  
        <!-- 商品信息 satrt -->
        <group style="margin-top:-.1rem;">
          <template v-for="item in list">
            <cell :title="item.text" :link="item.link" :is-icon="item.isIcon" :icon-url="item.img">
            </cell>
          </template>
        </group>
        <Lists :list="goodsJoiner.userList"></Lists>
        <Buy :numer="number" :show="showBuy"></Buy>
        <div class="ui-bottom">
          <a class="ui_btn_bottom" @click="showBuyFunc()">立即夺宝</a>
        </div>
    </div>
</template>

<script>
import { Group, Cell, Swiper } from '../../../components'
import { changeTitle } from '../../../utils/hack'
import Buy from '../buy.vue'
import Lists from './list.vue'
import { getGoodsUser,getAdList,getGoodsDetail,getGoodsJoiner } from '../../../vuex/actions.home'
import clock from '../../../assets/images/ic_s_clock.png'
import cup from '../../../assets/images/ic_s_cup.png'
import photo from '../../../assets/images/ic_s_image.png'
export default {
    data(){
        return {
            adHeight: '2.5rem',
            adTop: '-0.2rem',
            theme: true,
            showBuy: false,
            number: 5,
            list:[
              {
                text:"图文详情",link:'/mine/snarchRecord',img:photo,isIcon:true
              },
              {
                text:"往期揭晓",link:'/mine/luckyRecord',img:cup,isIcon:true
              },
              {
                text:"晒单分享",link:'/mine/displayRecord',img:photo,isIcon:true
              }]
        }
    },
    vuex:{
        getters:{
            options: ({options}) => options.item,
            goodsUser: ({goodsUser}) => goodsUser.items,
            goodsJoiner: ({goodsJoiner}) => goodsJoiner.items,
            goodsDetail: ({goodsDetail}) => goodsDetail.items,
            goodsDetailImg: ({goodsDetail}) => goodsDetail.items.goodsImgList,
            adList: ({adList}) => adList.items
        },
        actions:{
            getGoodsUser,
            getAdList,
            getGoodsDetail,
            getGoodsJoiner
        }
    },
    route:{
//        activate ({ next }) {
//            this.getDemoList(this.options)
//            next()
//        }
    },
    components: {
        Swiper,
        Group,
        Lists,
        Cell,
        Buy
    },
    init(){
        console.log(this.goodsUser)
        changeTitle('胖熊一元买')
    },
    created(){
         if(this.adList.length < 1){
            this.getAdList()
        }
        if(this.goodsUser.length < 1){
            this.getGoodsUser()
        }
        if(this.goodsDetail.length < 1){
            this.getGoodsDetail()
        }
        if(this.goodsJoiner.length < 1){
            this.getGoodsJoiner()
        }
    },
    methods : {
        showBuyFunc () {
            this.showBuy = true
        }
    },
    ready(){
    }

}
</script>
<!-- 引入样式 -->
<style lang="less">
@import "index.less";

</style>
