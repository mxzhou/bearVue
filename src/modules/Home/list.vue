<template>
    <div>
    	<ul class="goods-list">
    		<li v-for="item in goodsList" class="article-item">
    			<div class="pic"><a v-link="{ name: 'goodsDetail',params: {aid: item.id } }"><img :src="item.coverImgUrl"></a></div>
    			<h3><a v-link="{ name: 'goodsDetail',params: {aid: item.id } }">{{item.goodsName}}</a></h3>
    			<div class="goods-control"><div class="goods-status">
                    <div class="progress-bar">
                      <div class="inner" style="{{(item.surplusNumber+'|'+item.needNumber)|caProgress}}"></div>
                    </div>
                    <div class="btn-area"><a @click="onClick(item.surplusNumber)" class="btn btn-green fr">夺宝</a>
                        <p>总需: {{ item.needNumber}}</p>
                        <p>剩余: <span class="yellow">{{ item.surplusNumber}}</span></p>
                    </div>
                  </div>
                </div>
    		</li>
    		<li v-if="goodsList.length < 1" class="no-content">加载中...</li>
    	</ul>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: ['goodsList'],
  filters: {
    caProgress
  },
  methods: {
    onClick (num) {
      this.$parent.showBuyFunc(num)
    }
  }
}
function caProgress(number){
    let surplusNumber = number.split('|')[0]
    let needNumber = number.split('|')[1]
    return 'width:'+((needNumber-surplusNumber)/needNumber*100)+'%'
}
</script>
<style lang="less" scoped>
  .goods-list {
  	margin-top: 0.1rem;
  	padding-bottom: 0.6rem;
  	overflow: hidden;
  	ul,li {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    li {
    	display: block;
    	width: 50%;
    	height: 2.74rem;
    	background: #FFF;
    	border-right: 0.01rem solid #D3D6DA;
    	border-bottom: 0.01rem solid #D3D6DA;
    	float: left;
    	&:nth-child(even) {
    		border-right: none;
    	}
    }
    h3 {
    	margin: 0.08rem 0.1rem;
    	font-size: 0.14rem;
    	font-weight: normal;
    	color: #333;
    	line-height: 0.2rem;
    	height: 0.4rem;
    	overflow: hidden;
    }
    .pic {
    	position: relative;
    	width: 1.48rem;
    	height: 1.48rem;
    	margin: 0.1rem auto;
    	img {
    		width: 100%;
    		height: 100%;
    	}
    }
    .btn-area {
    	line-height: 0.16rem;
    	.btn-green {
    		display: inline-block;
    		width: 0.63rem;
    		height: 0.3rem;
    		text-align: center;
    		line-height: 0.3rem;
    		background: #00CC77;
    		color: #FFF;
    		font-size: 0.14rem;
    		border-radius: 0.04rem;
    		&:active {
    			background: #008950;
    		}
    	}
    }
    .goods-control {
	  position: relative;
	  height: 0.6rem;
	  width: 1.68rem;
	  margin-left: 0.1rem;
	  color: #999;
	  font-size: 0.12rem;
	  .progress-bar {
	    width: 100%;
	    height: 0.06rem;
	    background: #edebec;
	    border-radius: 0.03rem;
	    margin-bottom: 0.1rem;
	    overflow: hidden; 
	  }
	  .progress-bar .inner {
	      height: 0.06rem;
	      width: 55%;
	      border-radius: 0.05rem;
	      background: -webkit-linear-gradient(left, #ff7927, #ffd054); 
	  }  
	  em {
	    color: #FCA826;
	    font-style: normal; 
	  }
	}
  }
</style>