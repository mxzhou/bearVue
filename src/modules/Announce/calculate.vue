<style lang="less" scoped>
  @import "index.less";
</style>
<template>
  <div>
    <div class="calc">
      <div class="equation">
        <p class="hd">
          计算公式
        </p>
        <div class="bd">
          幸运号码 = <span class="bracket">(
          <div class="f-ib">
            <span class="num">数值A</span>
            <span class="total">商品所需人次</span>
          </div>)</span>
          取余数 + 10000001
        </div>
      </div>
      <p class="text-right desc" @click="detailFunc(0)"><a class="color-blue">详情</a></p>
      <div class="info" v-show="show1">
        <p class="desc">幸运号码计算方式：</p>
        <p class="desc">1、取该商品最后购买时间前网站所有商品100条购买时间记录（限时揭晓商品取截止时间前网站所有商品100条购买时间记录）；</p>
        <p class="desc">2、时间按时、分、秒、毫秒依次排列组成一组数值。 例如：15:13:14.334换算成数值为151314334；</p>
        <p class="desc">3、将这100组数值之和除以商品总需参与人次后取余数，余数加上10,000,001即为“幸运号”。</p>
      </div>
    </div>
    <div class="calc">
      <p class="title">数值A</p>
      <p class="desc">= 截止取该商品最后购买时间前网站所有商品100条购买时间记录的加总</p>
      <p class="desc">= <span class="color-red">10047842</span></p>
      <p class="text-right desc" @click="detailFunc(1)"><a class="color-blue">详情</a></p>
      <div class="info" v-show="show2">
       <table class="table">
         <thead>
         <tr>
           <th class="t1">购买时间</th>
           <th class="t2">转化值</th>
           <th class="t3">昵称</th>
         </tr>
         </thead>
         <tbody>
         <tr>
           <td>15:13:14.334</td>
           <td><span class="color-red">151314334</span></td>
           <td>伊利蛋蛋</td>
         </tr>
         <tr>
           <td>15:13:14.334</td>
           <td><span class="color-red">151314334</span></td>
           <td>伊利蛋蛋</td>
         </tr>
         <tr>
           <td>15:13:14.334</td>
           <td><span class="color-red">151314334</span></td>
           <td>伊利蛋蛋</td>
         </tr>
         </tbody>
       </table>
      </div>
    </div>
    <div class="calc">
      <p class="title">计算结果</p>
      <p class="desc">幸运号码: <span class="color-red">10003995</span></p>
    </div>

  </div>
</template>

<script>
  import {Loading} from '../../components'
  import {changeTitle} from '../../utils/hack'
  import {getOpenList} from '../../vuex/actions/actions.open'


  export default {
    components: {
      Loading
    },
    data () {
      return {
        index:1000,
        show1:false,
        show2:false,
        title1:'详情',
        title2:'详情'
      }
    },
    init() {
      changeTitle('计算详情')
    },
    vuex: {
      getters: {
        items: function(store){
          return store.openList.items.buyLogList
        }
      },
      actions: {
        getOpenList
      }
    },
    created(){
    },
    methods:{
      detailFunc:function(index){
        if(index == 0){
          this.show1 = !this.show1
          this.title1 = (this.show1 ? '收起':'详情')
        }else if(index == 1){
          this.show2 = !this.show2
          this.title2 = (this.show2 ? '收起':'详情')

        }
      }
    }
  }
</script>
