<style lang="less" scoped>
  @import "index.less";
</style>
<style>
  .text-area .ui_label{
    position: relative;
    top:-.2rem;
  }
</style>
<template>
  <div class="row">
    <group>
      <x-input title="用户名" placeholder="请输入收货人姓名" :required="false" :value.sync="name"></x-input>
      <x-input title="手机号码" placeholder="请输入手机号码" :required="false" :value.sync="phone"></x-input>
      <address @on-hide="logHide" @on-show="logShow" :title="title" :value.sync="array" :list="addressData" placeholder="请选择"></address>
      <x-textarea title="详细地址" placeholder="" :required="false" :value.sync="detail" class="text-area"></x-textarea>
      <switch title="设置为默认地址" :value.sync="show"></switch>
    </group>

    <div class="ui-bottom">
      <a class="ui_btn_bottom" @click="saveFunc">保存</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { XInput,XTextarea,Group, Address, AddressChinaData, XButton, Cell,Switch} from '../../../components'
  import value2name from '../../../filters/value2name'
  import {changeTitle} from '../../../utils/hack'
  console.log('-------------')
  console.log(AddressChinaData)
  console.log('-------------')
  export default {
    components: {
      Group,
      Address,
      XButton,
      XInput,
      XTextarea,
      Cell,
      Switch
    },
    data () {
      return {
        title: '省市区',
        name: '',
        phone: '',
        detail: '',
        array: [],
        addressData: AddressChinaData,
        show:false
      }
    },
    created(){
      this.array = [];
    },
    methods: {
      changeData () {
        this.value2 = ['430000', '430400', '430407']
      },
      getName (value) {
        return value2name(value, AddressChinaData)
      },
      logHide (str) {
        console.log('on-hide', str)
      },
      logShow (str) {
        console.log('on-show')
      },
      saveFunc:function(){
        router.go('/mine/address')
      }
    }
  }
</script>
