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
    methods: {
      moveFn:function(){
        let $body = document.body
        if(!(this.loading || !this.hasmore)) {
          if($body.scrollTop + window.innerHeight + 100 >= $body.clientHeight){
            this.$parent.loadMore()
          }
        }
      },
      scrollFn:function(){
        let $body = document.body
        if(!(this.loading || !this.hasmore)) {
          if($body.scrollTop+window.innerHeight+50>=$body.clientHeight){
            this.$parent.loadMore()
          }
        }
      }
    },
    ready(){
      let $body = document.body
      $body.addEventListener('touchmove',this.moveFn,false)
      document.addEventListener('scroll',this.scrollFn,false)
    },
    destroyed () {
      let $body = document.body
      $body.removeEventListener('touchmove',this.moveFn)
      document.removeEventListener('scroll',this.scrollFn)
    }
  }

</script>
