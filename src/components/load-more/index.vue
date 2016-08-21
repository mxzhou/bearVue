<style lang="less" scoped>
  .loading-text {
    text-align:center;
    padding-bottom: .6rem;
    font-size: .12rem;
    color: #999;
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
        default: '加载中...'
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
          this.text = '加载中...'
        }
      }
    },
    methods: {
      scrollFn:function(){
        let $body = document.body
        if(!this.loading && this.hasmore) {
          if($body.scrollTop+window.innerHeight+50>=$body.clientHeight){
            this.$parent.loadMore()
          }
        }
      }
    },
    ready(){
      let $body = document.body
      $body.addEventListener('touchmove',this.scrollFn,false)
      document.addEventListener('scroll',this.scrollFn,false)
    },
    destroyed () {
      let $body = document.body
      $body.removeEventListener('touchmove',this.scrollFn)
      document.removeEventListener('scroll',this.scrollFn)
    }
  }
</script>
