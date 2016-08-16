<template>
  <div class="ui_cell" :class="{'vux-tap-active': isLink || !!link}"  @click="onClick">
    <div class="ui_cell_hd">
      <img v-if="isIcon" class="icon" :class="big ? 'big':''" :src="iconUrl">
      <slot name="icon"></slot>
    </div>
    <div class="ui_cell_bd" :class="{'ui_cell_primary':primary==='title'}">
      <p class="ui_p">
        {{title}}
        <slot name="after-title"></slot>
      </p>
      <inline-desc>{{inlineDesc}}</inline-desc>
    </div>
    <div class="ui_cell_ft" :class="{'ui_cell_primary':primary==='content', 'with_arrow': isLink || !!link}">
      {{value}}
      <slot name="value"></slot>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import InlineDesc from '../inline-desc'
import { go } from '../../libs/router'

export default {
  components: {
    InlineDesc
  },
  props: {
    title: String,
    isIcon:Boolean,
    iconUrl:String,
    value: String,
    isLink: Boolean,
    inlineDesc: String,
    big: Boolean,
    primary: {
      type: String,
      default: 'title'
    },
    link: {
      type: [String, Object]
    }
  },
  methods: {
    onClick () {
      go(this.link, this.$router)
    }
  }
}
</script>

<style lang="less">
@import '../../styles/tap.less';
@import '../../styles/ui/widget/ui_cell/ui_cell_global.less';
.ui_p{
  font-size: .16rem;
  min-width: .8rem;
}
/*.ui_icon:before{*/
  /*padding: .15rem .45rem;*/
  /*left:.45rem;*/
/*}*/
.icon{
  width: .16rem;
  height: .16rem;
  margin-right: .15rem;
  &.big {
    width: .3rem;
    height: .3rem;
    margin-top: -0.3rem;
    margin-bottom: -0.1rem;
  }
}
.ui_cell_ft.with_arrow:after {
  content: " ";
  display: inline-block;
  transform: rotate(45deg);
  height: .08rem;
  width: .08rem;
  border-width: .02rem .02rem 0 0;
  border-color: #c7c7cc;
  border-style: solid;
  position: relative;
  top: -0.01rem;
  margin-left: .05rem;
}
</style>
