<template>
    <div>

        <Swiper :list="adList" :loop="true" :height="adHeight" :top="adTop"></Swiper>
        <Notes :list="announceList"></Notes>
        <Lists :goods-list="goodsHomeList.goodsList"></Lists>
        <Buy :numer="number"></Buy>
    </div>
</template>

<script type="text/ecmascript-6">
import { Swiper,NavBar } from '../../components'
import Notes from './notes.vue'
import Lists from './list.vue'
import Buy from './buy.vue'
import { changeTitle } from '../../utils/hack'
import { getAdList,getAnnounceList,getGoodsList } from '../../vuex/actions.home'
export default {
    data(){
        return {
            adHeight: '1.88rem',
            adTop: '-0.2rem'
        }
    },
    vuex:{
        getters:{
            options: ({options}) => options.item,
            adList: ({adList}) => adList.items,
            announceList: ({announceList}) => announceList.items,
            goodsHomeList: ({goodsHomeList}) => goodsHomeList.items
        },
        actions:{
            getAdList,
            getAnnounceList,
            getGoodsList
        }
    },
    route:{
//        activate ({ next }) {
//            this.getDemoList(this.options)
//            next()
//        }
    },
    ready() {
        
    },
    components: {
        Swiper,
        NavBar,
        Notes,
        Lists,
        Buy
    },
    init(){
        changeTitle('胖熊一元买')
    },
    created(){
        if(this.adList.length < 1){
            this.getAdList()
        }
        if(this.announceList.length < 1){
            this.getAnnounceList()
        }
        if(this.goodsHomeList.length < 1){
            this.getGoodsList()
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
