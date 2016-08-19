<template>
    <div>   
        <div class="joiner-list">
            <div class="title">
                <span class="fr">2015-32-32 21:32:32 开始</span>
                所有参与者
            </div>
        	<ul class="joiner-list">
        		<li v-for="item in list" class="article-item">
        			<span class="img"><img :src="item.avatarUrl"></span>
                    <a class="username">用户名称</a>
                    <p><span>(天津市 IP:123.150.202.***)</span></p>
                    <p>参与 10 人次<span>2016-01-22 10:55:37.448</span></p>
        		</li>
        		<li v-if="list.length < 1" class="no-content">加载中...</li>
        	</ul>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: ['list'],
  methods: {
    onClick () {

    }
  }
}
</script>
<style lang="less" scoped>
.joiner-list {
    position: relative;
    width: 100%;
    background: #FFF;
    margin-top: .1rem;
    .title {
        height: .44rem;
        line-height: .44rem;
        margin: 0 .1rem;
        border-bottom: 1px solid #D3D6DA;
        font-size: .16rem;
        color: #333;
        span {
            font-size: .12rem;
            color: #AAA;
        }
    }
    ul,li {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    ul {
        padding-bottom: .1rem;
    }
    li {
        display: block;
        width: 100%;
        height: .7rem;
        padding-top: .1rem;
        padding-left: .1rem;
        padding-right: .1rem;
        .img {
            float: left;
            width: .4rem;
            height: .4rem;
            border-radius: 50%;
            overflow: hidden;
            margin-top: .1rem;
            margin-right: .1rem;
            margin-bottom: .2rem;
            img {
                border-radius: 50%;
                width: 100%;
                height: 100%;
            }
        }
        .username {
            color: #5393E0;
            font-size: .14rem;
            line-height: .2rem;
        }
        p {
            margin: 0;
            padding: 0;
            font-size: .12rem;
            line-height: .16rem;
            color: #333;
            span {
                color: #AAA;
            }
        }
    }
}

</style>