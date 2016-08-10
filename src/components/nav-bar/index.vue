<template>
  <nav class="ui_nav">
    <template v-for="item in list">
      <div class="item" :class="{'active':item.link==active}" v-link="item.link">
        <img class="img" v-if="item.link==active" :src="oImg[item.link]"/>
        <span v-if="item.link!=active">{{item.name}}</span>
      </div>
    </template>
  </nav>
</template>
<script>
import home from '../../assets/images/ic_tap1.png'
import share from '../../assets/images/ic_tap2.png'
import announce from '../../assets/images/ic_tap3.png'
import mine from '../../assets/images/ic_tap4.png'
export default {
  components: {
  },
  data(){
    return{
      oImg:{
        home:home,
        share:share,
        announce:announce,
        mine:mine
      }

    }
  },
  props: {
    list: {
      type: Array,
      default: function () {
        return [{
          name:'全部商品',
          link:'home'
        },{
          name:'最新揭晓',
          link:'announce'
        },{
          name:'晒单',
          link:'share'
        },{
          name:'我的夺宝',
          link:'mine'
        }]
      },
    },
    active: {
      type: String,
      default: '',
      required:true
    }
  },
  methods: {
  }
}
</script>

<style lang="less">
@import '../../styles/ui/widget/ui_nav/ui_nav.less';
</style>
