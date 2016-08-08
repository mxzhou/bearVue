<template>
    <div>

        <Swiper :list="adList" :loop="true" :height="adHeight" :top="adTop"></Swiper>

    </div>
</template>

<script>
import { Swiper } from '../../../components'
import { changeTitle } from '../../../utils/hack'
import { getGoodsUser,getGoodsDetail,getGoodsJoiner } from '../../../vuex/actions.home'
export default {
    data(){
        return {
            adHeight: '1.88rem',
            adTop: '-0.2rem',
            showBuy: false
        }
    },
    vuex:{
        getters:{
            options: ({options}) => options.item,
            goodsUser: ({goodsUser}) => goodsUser.items,
            goodsJoiner: ({goodsJoiner}) => goodsJoiner.items,
            goodsDetail: ({goodsDetail}) => goodsDetail.items
        },
        actions:{
            getGoodsUser,
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
        Swiper
    },
    init(){
        changeTitle('胖熊一元买')
    },
    created(){
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
        console.log(this.$data);
    }

}
</script>
<!-- 引入样式 -->
<style lang="less">
@import "index.less";

</style>
