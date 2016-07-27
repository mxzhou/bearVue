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
    import { getDemoList } from '../../vuex/actions'
    export default {
        vuex:{
                getters:{
                    list: ({demoList}) => demoList.items
                },
                actions:{
                    getDemoList
                }
        },
        route:{
            activate ({ next }) {
                this.getDemoList()
                next()
            }
        },
        components: {
            Group,
            Cell
        },
        ready(){
            changeTitle('Home')
        }

    }
</script>
<!-- 引入样式 -->
<style lang="less" scoped>
</style>
