<style lang="less" scoped>
  @import "index.less";
</style>
<template>
  <div class="user">
    <Bg :money="188"></Bg>
    <group>
      <template v-for="item in list">
        <cell :title="item.text" :link="item.link" :is-icon="item.isIcon" :icon-url="item.img">
        </cell>
      </template>
    </group>
    <group>
      <template v-for="item in list2">
        <cell :title="item.text" :link="item.link" :is-icon="item.isIcon" :icon-url="item.img">
        </cell>
      </template>
    </group>
    <group>
        <p class="desc">我的ID:101100110</p>
    </group>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Loading, Group, Cell,NavBar } from '../../../components'
  import Bg from './header.vue'
  import {changeTitle} from '../../../utils/hack'
  import clock from '../../../assets/images/ic_s_clock.png'
  import cup from '../../../assets/images/ic_s_cup.png'
  import notepad from '../../../assets/images/ic_s_notepad.png'
  import photo from '../../../assets/images/ic_s_photo.png'
  import pin from '../../../assets/images/ic_s_pin.png'

  export default {
    components: {
      Loading,
      Group,
      Cell,
      Bg,
      NavBar
    },
    data () {
      return {
        navList:[{
          name:'全部商品',
          link:''
        },{
          name:'最新揭晓',
          link:'share'
        },{
          name:'晒单',
          link:'announce'
        },{
          name:'我的夺宝',
          link:'mine'
        }],
        list:[
          {
            text:"夺宝记录",link:'/mine/snarchRecord',img:notepad,isIcon:true
          },
          {
            text:"幸运记录",link:'/mine/luckyRecord',img:cup,isIcon:true
          },
          {
            text:"晒单记录",link:'/mine/displayRecord',img:photo,isIcon:true
          }],
        list2:[
          {
            text:"收货地址",link:'/mine/address',img:pin,isIcon:true
          },
          {
            text:"充值记录",link:'/mine/rechargeRecord',img:clock,isIcon:true
          }],
      }
    },
    init() {
      changeTitle('我的夺宝')
    },
    methods: {

    }
  }

  function tick (i, cb) {
  }
</script>
