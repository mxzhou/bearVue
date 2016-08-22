<template>
    <div>

    </div>
</template>

<script type="text/ecmascript-6">
import { changeTitle } from '../../../utils/hack'
import { getGoodsUser,getGoodsDetail,getGoodsJoiner } from '../../../vuex/actions.home'
export default {
    data(){
        return {
            
        }
    },
    vuex:{
        getters:{
            goodsUser: ({goodsUser}) => goodsUser.items,
            goodsJoiner: ({goodsJoiner}) => goodsJoiner.items,
            goodsDetail: ({goodsDetail}) => goodsDetail.items,
            goodsDetailImg: ({goodsDetail}) => goodsDetail.items.goodsImgList,
            isLoadList: ({goodsJoiner}) => goodsJoiner.isLoading,
            hasMoreList: ({goodsJoiner}) => goodsJoiner.hasMore
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
    },
    init(){
        console.log(this.goodsUser)
        changeTitle('胖熊一元买')
    },
    created(){
        this.getGoodsUser()
    },
    methods : {
        
    },
    ready(){
        window.scrollTo(0, 0);
    }
}

</script>
<!-- 引入样式 -->
<style lang="less">
@import "index.less";

</style>
