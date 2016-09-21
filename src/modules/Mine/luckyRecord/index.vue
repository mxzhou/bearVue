<style lang="less">
  @import "index.less";
</style>
<template>
  <div>
    <ul class="lucky-list">
      <template v-for="item in items">
        <li @click="detailFunc(item.id)">
          <div class="box">
            <div class="left">
              <img class="img" :src="item.coverImgUrl">
            </div>
            <div class="right">
              <div class="desc">
                <p class="name">{{item.goodsName}}</p>
                <p class="p">期号：{{item.id}}</p>
                <p class="p">总需：{{item.needNumber}}</p>
                <p class="p">
                  幸运号码：<span class="color-red">{{item.winCode}}</span>
                </p>
                <p class="p">
                  本期参与：<span class="color-red">{{item.joinNumber}}</span>人次
                </p>
                <p class="p">
                  揭晓时间：{{item.openTime|formatDate}}
                </p>
              </div>
            </div>
          </div>
          <div class="bottom clearfix">
            {{orderStatus[item.orderStatus]}}
            <a v-if="item.orderStatus == 0" class="btn f-fr" @click.stop="selectAddress(item.id)">选择收货地址</a>
            <a v-if="item.orderStatus == 3" class="btn f-fr" @click.stop="selectAddress(item.id)">查看物流</a>
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Tab, TabItem,Loading } from '../../../components'
  import {changeTitle} from '../../../utils/hack'
  import {getLuckyList} from '../../../vuex/actions'
  import {formatDate} from '../../../utils/filters'


  export default {
    components: {
      Tab, TabItem,Loading
    },
    filters: {
      formatDate
    },
    data () {
      return {
        title: '全部',
        orderStatus: {
          '0':'已中奖',
          '1':'等待奖品派发',
          '2':'奖品已派发',
          '3':'奖品已发货',
          '5':'已晒单'
        }
      }
    },
    init() {
      changeTitle('幸运记录')
    },
    vuex:{
      getters:{
        items:function(store){
          return store.luckyList.items
        }
      },

      actions:{
        getLuckyList,
      }
    },
    created(){
      this.getLuckyList({pageNumber:1,pageSize:10})
    },
    methods: {
      selectAddress:function(id){
        router.go({ name: 'selectAddress',params: { id: id }})
      },
      detailFunc:function(id){
        router.go({name:'luckyDetail',params: { id: id }})
      }
    }
  }

  function tick (i, cb) {
  }
</script>
