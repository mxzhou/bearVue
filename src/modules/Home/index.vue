<template>
    <div>

        <Swiper :list="adList" :loop="true" :height="adHeight" :top="adTop"></Swiper>
        <Notes :list="announceList"></Notes>

    </div>
</template>

<script>
import { Swiper } from '../../components'
import Notes from './notes.vue'
import { changeTitle } from '../../utils/hack'
import { getAdList,getAnnounceList } from '../../vuex/actions.home'
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
            announceList: ({announceList}) => announceList.items
        },
        actions:{
            getAdList,
            getAnnounceList
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
        Notes
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
