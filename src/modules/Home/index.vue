<template>
    <div>

        <Swiper :list="adList" :loop="true" :height="adHeight" :top="adTop"></Swiper>
        <Notes></Notes>
        
    </div>
</template>

<script>
import { Swiper } from '../../components'
import Notes from './notes.vue'
import { changeTitle } from '../../utils/hack'
import { getDemoList,getArticleList,getAdList } from '../../vuex/actions'
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
            adList: ({adList}) => adList.items
        },
        actions:{
            getAdList
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
        console.log(this.options)
        this.getAdList()
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
