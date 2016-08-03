<!--模板 -->
<template>
    <div>
    
    <Swiper :list="adList" :loop="true" :height="" ></Swiper>
        
    </div>
</template>

<!--VM定义 -->
<script>
import { Swiper } from '../../components'
import { changeTitle } from '../../utils/hack'
import { getDemoList,getArticleList,getAdList } from '../../vuex/actions'
export default {
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
        Swiper
    },
    init(){
        changeTitle('Home')
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
@import "Home.less";
</style>
