<style lang="less" scoped>
.header{
  background: url(../../../assets/images/bg_header.jpg);
  width: 3.75rem;
  height: 1rem;
  display: flex;
  align-items: center;
}
.p{
  color: #fff;
  font-size: .14rem;
  width: 3.35rem;
  margin: 0 auto;
  line-height: 1;
}
.p strong{
  font-size: .28rem;
  margin: 0 .1rem;

}
.button{
  float: right;
  -webkit-appearance: none;
  width: .6rem;
  height: .32rem;
  line-height: .32rem;
  color: #fff;
  font-size: .16rem;
  border-radius: 4px;
  border: 1px #fff solid;
  background: transparent;
  text-align: center;
  display: block;
}
.button:visited,.button:active{
  background: transparent;
  border: 1px #fff solid;
}

</style>
<template>
  <div class="header">
    <p class="p clearfix">
      夺宝币余额：<strong>{{money}}</strong>元
      <a class="button" @click="add">充值</a>
    </p>
  </div>
  <toast :show="show" type="text">{{errorMsg}}</toast>
</template>

<script type="text/ecmascript-6">
  import {Toast} from '../../../components'
  export default {
    components: {
      Toast
    },
    data () {
      return {
        money:0,
        errorMsg:'',
        show:false
      }
    },
    methods: {
      add:function(){
        router.go('/mine/charge')
      }
    },
    created(){
      this.$http.post('/user/consumeMoney',{}).then((response) => {
        let data = response.data
        if(data.errorCode!=0){
          this.$set('errorMsg', data.errorMsg);
          this.$set('show', true);
          return;
        }
        this.$set('money', data.data);
      }, (response) => {
        // error callback
      });
    }
  }

  function tick (i, cb) {
  }
</script>
