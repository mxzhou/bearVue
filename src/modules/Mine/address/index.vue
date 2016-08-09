<style lang="less" scoped>
  @import "index.less";
</style>
<template>
  <div>
    <ul v-show="items.length>0" class="address_list">
      <template v-for="item in items">
        <li class="box">
          <!--<div class="hd">-->
            <!--<div class="select" :class="{'marked':item.ifDefault}"></div>-->
          <!--</div>-->
          <div class="bd">
            <p class="clearfix">
              <span class="color-blue">{{item.receiver}}</span>
              <span class="phone">{{item.mobile}}</span>
            </p>
            <div class="clearfix">
              <p class="address f-fl selected">
                <span class="color-green" v-if="item.ifDefault">[默认]</span>
                {{item.province+item.city+item.area+item.addressDetail}}
              </p>
              <div class="f-fr vertical" @click.stop="editFunc(item.id)">
                <img src="../../../assets/images/ic_s_edit.png" class="edit">
              </div>
            </div>
          </div>
        </li>
      </template>
    </ul>
    <div v-show="items.length == 0" class="noAddress">
      <div class="content">
        <img :src="noAddress">
        <p class="p">您尚未添加任何收货地址</p>
      </div>
      <div class="desc">
        <p class="p">
          点击此处添加收货地址</p>
        <img :src="arrow">
      </div>
    </div>
    <div class="ui-bottom">
      <a class="ui_btn_bottom" @click="addAddress">添加新地址</a>
    </div>
    <div class="ui-bottom">
      <a class="ui_btn_bottom" @click="addAddress">添加新地址</a>
    </div>
    <loading :show="loading" :text="text1"></loading>

  </div>
</template>

<script>
  import { Loading } from '../../../components'
  import {getAddressList} from '../../../vuex/actions'
  import {changeTitle} from '../../../utils/hack'
  import noAddress from '../../../assets/images/img_noadd.png'
  import arrow from '../../../assets/images/img_addaddressarrow.png'

  export default {
    components: {
      Loading
    },
    data () {
      return {
        noAddress:noAddress,
        arrow:arrow
      }
    },
    init() {
      changeTitle('地址列表')
    },
    created(){

    },
    vuex:{
      getters:{
        items:function(store){
          return store.addressList.items
        }
      },
      actions:{getAddressList}
    },
    route:{
      data () {
        this.getAddressList()
      }
    },
    methods: {
      addAddress:function(){
        router.go('/mine/addAddress')
      },
      editFunc:function(id){
        alert(id)
        router.go({name:'editAddress'})

      }
    }
  }
</script>
