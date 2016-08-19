<template>
    <div>
        <Swiper :list="adList" :loop="true" :auto="true" :height="adHeight" :top="adTop"></Swiper>
        <Notes :list="announceList"></Notes>
        <Lists :goods-list="goodsHomeList"></Lists>
        <load-more :loading="isLoadList" :hasmore="hasMoreList"></load-more>
        <Buy :number="totalNum" :show="showBuy"></Buy>
    </div>
</template>

<script type="text/ecmascript-6">
import { Swiper,LoadMore } from '../../components'
import Notes from './notes.vue'
import Lists from './list.vue'
import Buy from './buy.vue'
import { changeTitle } from '../../utils/hack'
import { getAdList,getAnnounceList,getGoodsList } from '../../vuex/actions.home'
export default {
    data(){
        return {
            adHeight: '1.88rem',
            adTop: '-0.2rem',
            showBuy: false,
            totalNum: 0
        }
    },
    vuex:{
        getters:{
            options: ({options}) => options.item,
            adList: ({adList}) => adList.items,
            announceList: ({announceList}) => announceList.items,
            goodsHomeList: ({goodsHomeList}) => goodsHomeList.items,
            isLoadList: ({goodsHomeList}) => goodsHomeList.isLoading,
            hasMoreList: ({goodsHomeList}) => goodsHomeList.hasMore
        },
        actions:{
            getAdList,
            getAnnounceList,
            getGoodsList
        }
    },
    ready() {
    },
    components: {
        Swiper,
        Notes,
        Lists,
        Buy,
        LoadMore
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
        this.getGoodsList({pageSize:10,lastId:0},false)
    },
    methods: {
        showBuyFunc (num) {
            this.totalNum = num
            this.showBuy = true
        },
        loadMore () {
            this.getGoodsList({pageSize:10,lastId:0},true)
        }
    }

}
</script>

