<template>
    <div>
    <span  v-for="item in goodsPicDetail">
        <img :src="item.img"></span>
    </div>
</template>

<script type="text/ecmascript-6">
import { changeTitle } from '../../../utils/hack'
import { getGoodsPicDetail } from '../../../vuex/actions.home'
export default {
    data(){
        return {
            
        }
    },
    vuex:{
        getters:{
            goodsPicDetail: ({goodsPicDetail}) => goodsPicDetail.items
        },
        actions:{
            getGoodsPicDetail
        }
    },
    components: {
    },
    init(){
        changeTitle('图文详情')
    },
    created(){
        this.getGoodsPicDetail()
    },
    methods : {
        
    },
    ready(){
        window.scrollTo(0, 0);
    }
}

</script>
<!-- 引入样式 -->
<style lang="less" scoped>
div {
    margin: 0;
}
img {
    width: 100%;
    margin: 0;
    float: left;
}
</style>
