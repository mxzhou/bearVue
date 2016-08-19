<style lang="less" scoped>
.loading-text {
  text-align:center;
  padding-bottom: .6rem;
  font-size: .14rem;
  color: #333;
  margin-top: .1rem;
}
</style>

<template>
  <div class="loading-text">
    {{text}}
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  components: {
  },
  data(){
    return{
    }
  },
  props: {    
    text: {
      type: String,
      default: '加载更多'
    },
    loading: {
      type: Boolean,
      default: false
    },
    hasmore : {
      type: Boolean,
      default: true
    }
  },
  watch: {
    hasmore () {
      if(!this.hasmore) {
        this.text = '暂无更多'
      }else {
        this.text = '加载更多'
      }
    }
  },
  destroyed () {
    /*let $body = document.body
    let _this = this
    $body.removeEventListener('touchmove',function(){})
    document.removeEventListener('scroll',function(){})*/
  },
  methods: {
    
  },
  ready(){
    let $body = document.body
    let _this = this
    $body.addEventListener('touchmove',function(){
      if(!(_this.loading || !_this.hasmore)) {
        if($body.scrollTop + window.innerHeight + 100 >= $body.clientHeight){
          _this.$parent.loadMore()
        }
      }
    })
    document.addEventListener('scroll',function(){
      if(!(_this.loading || !_this.hasmore)) {
        if($body.scrollTop+window.innerHeight+50>=$body.clientHeight){
          _this.$parent.loadMore()
        }
      }
    })
  }
}

</script>
