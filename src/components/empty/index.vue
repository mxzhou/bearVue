<template>
  <div class="empty" :class="{'pad':pad}" v-if="show">
    <img :src="imgEmpty"/>
    <p class="desc">{{title}}</p>
    <a class="empty-btn" @click="fn">{{btn}}</a>
  </div>
  <div class="guess" v-if="show">
    <h3 class="hd">猜你喜欢</h3>
    <div class="bd">
      <scroller lock-y scrollbar-x>
        <ul class="guess-list clearfix" :style="{'width':(this.items.length+(this.items.length-1)*0.15)+'rem'}">
         <li v-for="item in items">
           <div class="li_hd">
             <img class="coverImg" :src="item.coverImgUrl">
           </div>
           <div class="li_bd f-toe">
             {{item.goodsName}}
           </div>
           <div class="li-ft">
            <div class="bar">
              <div class="active"
                   :style="{'width':((item.needNumber-item.surplusNumber)/item.needNumber)+'rem'}"></div>
            </div>
           </div>
         </li>
        </ul>
      </scroller>
    </div>
  </div>
</template>

<script>
import imgEmpty from '../../assets/images/img_empty.png'
import Scroller from '../scroller'
export default {
  components: {
    Scroller
  },
  data () {
    return {
      imgEmpty:imgEmpty
    }
  },
  computed: {
    styles () {
      return {
        'width': (this.items.length+(this.items.length-1)*0.15)+'rem'
      }
    }
  },
  props: {
    pad:{
      type: Boolean,
      default: false
    },
    items:{
      type: Array,
      default: []
    },
    show: {
      type: Boolean,
      default: false
    },
    title:{
      type: String,
      default:''
    },
    btn:{
      type: String,
      default:''
    },
    fn:{
      type:Function,
      default:function(){
        alert(1)
      }
    }
  },
  watch: {
    show (val) {
      this.$emit(val ? 'on-show' : 'on-hide')
    }
  }
}
</script>

<style lang="less">
@import "./index.less";
</style>
