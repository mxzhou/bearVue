<!--模板 -->
<template>
    <div>
        <group>
            <template v-for="item in list">
                <cell :title="item.text" :link="item.path"></cell>
            </template>
        </group>
    </div>
</template>

<!--VM定义 -->
<script>
import {Group,Cell} from '../../components'
import {changeTitle} from '../../utils/hack'
import { getDemoList,getArticleList } from '../../vuex/actions'
export default {
    vuex:{
        getters:{
            options: ({options}) => options.item,
            articleList: ({articleList}) => articleList.items,
            list: ({demoList}) => demoList.items
        },
        actions:{
            getDemoList,
            getArticleList
        }
    },
    route:{
//        activate ({ next }) {
//            this.getDemoList(this.options)
//            next()
//        }
    },
    components: {
        Group,
        Cell
    },
    init(){
        changeTitle('Home')
    },
    created(){
        console.log(this.options)
        this.getArticleList(this.options)
        this.getDemoList(this.options)

    }

}
</script>
<!-- 引入样式 -->
<style lang="less" scoped>
</style>
