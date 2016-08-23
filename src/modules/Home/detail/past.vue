<template>
    <div>
        <div v-for="item in goodsPast" class="item">
            <div class="title">期号：{{item.id}} (揭晓时间：{{item.openTime|formateTime}})</div>
            <div class="item-content">
                <div class="pic"><img :src="item.avatarUrl"></div>
                <p>幸运儿：<span>{{item.nickname}}</span></p>
                <p class="gray">({{item.address}} {{item.ip}})</p>
                <p>用户ID：{{item.kgUid}}</p>
                <p>幸运号码：{{item.winCode}}</p>
                <p>本期参与：<span class="red">{{item.joinNumber}}</span>人次</p>
            </div>
        </div>
        <div style="height:.4rem;overflow:hidden;"><load-more :loading="isLoadList" :hasmore="hasMoreList"><load-more></div>
    </div>
</template>

<script type="text/ecmascript-6">
import { LoadMore } from '../../../components'
import { changeTitle } from '../../../utils/hack'
import { getGoodsPast } from '../../../vuex/actions.home'
export default {
    data(){
        return {
            
        }
    },
    vuex:{
        getters:{
            goodsPast: ({goodsPast}) => goodsPast.items,
            isLoadList: ({goodsPast}) => goodsPast.isLoading,
            hasMoreList: ({goodsPast}) => goodsPast.hasMore
        },
        actions:{
            getGoodsPast
        }
    },
    components: {
        LoadMore
    },
    init(){
        console.log(this.goodsUser)
        changeTitle('胖熊一元买')
    },
    created(){
        this.getGoodsPast({pageSize:10,page:1},false)
    },
    methods : {
        loadMore () {
            this.getGoodsPast({pageSize:10,page:1},true)
        }
    },
    ready(){
        window.scrollTo(0, 0);
    },
    filters: {
        formateTime
    }
}
function formateTime (time){
    let t = new Date(time)
    return t.getFullYear()+'-'+intNum(t.getMonth()+1)+'-'+intNum(t.getDate())+ ' '+intNum(t.getHours())+':'+intNum(t.getMinutes())+':'+intNum(t.getSeconds())
}
function intNum(n){
    return n < 10 ? '0'+n:n;
}

</script>
<!-- 引入样式 -->
<style lang="less" scoped>
@import "index.less";
.item {
    position: relative;
    width: 7.3rem/2;
    margin: auto;
    margin-top: .15rem;
    &:after {
        position: absolute;
        width: 7.3rem/2;
        height: .1rem;
        content: ' ';
        bottom: -.05rem;
        left: 0;
        background: url(../../../assets/images/bg_pastawarder.png) center bottom no-repeat;
        background-size: 100% auto;
    }
    .title {
        position: relative;
        height: .44rem;
        width: 100%;
        background: url(../../../assets/images/bg_pastawarder.png) center top no-repeat;
        background-size: 100% auto;
        font-size: .12rem;
        color: #FFF;
        line-height: .4rem;
        text-indent: .12rem;
    }
    .item-content {
        position: relative;
        background: url(../../../assets/images/pastbg.png) center top repeat-y;
        background-size: 100% auto;
        height: 1rem;
        img {
            width: .4rem;
            height: .4rem;
            border-radius: 50%;
            margin-left: .12rem;
            float: left;
        }
        p {
            padding-left: .6rem;
            font-size: .12rem;
            color: #333;
            line-height: .19rem;
            margin: 0;
            span {
                color: #5393E0;
                &.red {
                    color: #ef4835;
                }
            }
            &.gray {
                color: #AAA;
            }
        }
    }
}
</style>
