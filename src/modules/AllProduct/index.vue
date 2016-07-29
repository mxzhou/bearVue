<template>
  <div class="clearfix">
    <div class="menu">
      <scroller lock-x>
        <div class="box1">
          <ul class="typeList">
            <template v-for="item in items">
              <li class="item" :class="{ 'active': (index == $index)}" @click="loadList($index,$event)">
                {{item.name}}
              </li>
            </template>
          </ul>
        </div>
      </scroller>
    </div>
    <div class="content">
      <scroller lock-x scrollbar-y>
        <ul class="goodsList">
          <template v-for="item in list">
            <li class="clearfix">
              <div class="left">
                <img :src="item.coverImgUrl">
              </div>
              <div class="middle">
                <p>{{item.goodsName}}</p>
              </div>
              <div class="right">
              </div>
            </li>
          </template>
        </ul>
      </scroller>
    </div>
    <loading :show="loading" :text="text1"></loading>

  </div>
</template>

<script>
  import { Scroller, Masker ,Loading } from '../../components'
  import {getTypeList,getGoodsList} from '../../vuex/actions'

  export default {
    components: {
      Scroller,
      Masker,
      Loading

    },
    data () {
      return {
        index:0,
        text1: '加载中...'
      }
    },
    methods:{
      loadList:function(index,event){
        event.preventDefault();
        event.stopPropagation();
        this.index = index;
        console.log(index);
        console.log(event)
        this.getGoodsList();
      }
    },

    vuex:{
      getters:{
        items: ({typeList}) => typeList.items,
        list: ({goodsList}) => goodsList.items.goodsList,
        loading:({loaDing}) => loaDing.item.show
      },

      actions:{
        getTypeList,
        getGoodsList,
      }
    },
    created(){
      this.getTypeList();
      this.getGoodsList();
  }
  }
</script>

<style scoped lang="less">
  @import 'index.less';
</style>
