<template>
  <div>
    <div v-show="items.length>0">
      <ul class="address_list">
        <template v-for="item in items">
          <li class="box" @click="selectFunc(item.id,$index)">
            <div class="hd">
              <div class="select" :class="{'marked':$index == index}"></div>
            </div>
            <div class="bd">
              <p class="clearfix">
                <span class="color-blue">{{item.receiver}}</span>
                <span class="phone">{{item.mobile}}</span>
              </p>
              <div class="clearfix">
                <p class="address f-fl">
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
      <div class="ui-bottom" v-show="items.length > 0">
        <a class="ui_btn_bottom" @click="submitFunc()">确定</a>
      </div>
    </div>

    <div  v-show="items.length == 0">
      <div class="noAddress">
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
    </div>
    <loading :show="loading" :text="text1"></loading>

  </div>
</template>

<script type="text/ecmascript-6">
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
        arrow:arrow,
        index:0,
        orderId:this.$route.params.id
      }
    },
    init() {
      changeTitle('地址列表')
    },
    created(){
      console.log(this.$route.params.id);
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
        const id =this.$route.params.id;
        router.go({ name: 'addAddress',params: { id: id }})
      },
      editFunc:function(){
        const id =this.$route.params.id;
        router.go({ name: 'editAddress2',params: { id: id }})
      },
      selectFunc:function(id,index){
        this.index = index;
      },
      submitFunc:function(){
        var data = {
          userAddressId: this.items[this.index].id,
          id: this.orderId
        }
        this.$http.post('/user/win/setAddress',data).then((response) => {
          let data = response.data;
          console.log(data)
          if(data.errorCode!=0){
            return;
          }
          location.href = "#/mine/luckyRecord"
        }, (response) => {
          // error callback
        });
        console.log(data);
      }
    }
  }
</script>
