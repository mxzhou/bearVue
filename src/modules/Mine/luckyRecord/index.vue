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
                  幸运号码：<span class="color-red">{{item.userJoinNumber}}</span>人次
                </p>
                <p class="p">
                  本期参与：<span class="color-red">{{item.userJoinNumber}}</span>人次
                </p>
                <p class="p">
                  揭晓时间：<span class="color-red">{{item.userJoinNumber}}</span>人次
                </p>
              </div>
            </div>
          </div>
          <div class="bottom clearfix">
            {{'已支付'}}
            <a class="btn f-fr" @click.stop="selectAddress(item.id)">选择收货地址</a>
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Tab, TabItem,Loading } from '../../../components'
  import {changeTitle} from '../../../utils/hack'
  import {getSnarchRecordList} from '../../../vuex/actions'


  export default {
    components: {
      Tab, TabItem,Loading
    },
    data () {
      return {
        title: '全部'
      }
    },
    init() {
      changeTitle('幸运记录')
    },
    vuex:{
      getters:{
        items:function(store){
          return store.snarchRecord.items
        }
      },

      actions:{
        getSnarchRecordList,
      }
    },
    created(){
      this.getSnarchRecordList()
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
