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
    export default {
        components: {
            Group,
            Cell
        },
        data () {
            return {
                list: [
                    {path: 'alert', text: 'alert'},
                    {path: 'toast', text: 'toast'}
                ]
            }
        },
        ready(){
            changeTitle('Home')
        }

    }
</script>
<!-- 引入样式 -->
<style lang="less" scoped>
</style>
