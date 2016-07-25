<template>
  <div class="ui_cell" :class="{'vux-tap-active': isLink || !!link}" @click="onClick">
    <div class="ui_cell_hd">
      <slot name="icon"></slot>
    </div>
    <div class="ui_cell_bd" :class="{'ui_cell_primary':primary==='title'}">
      <p>
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
    value: String,
    isLink: Boolean,
    inlineDesc: String,
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

.ui_cell_ft.with_arrow:after {
  content: " ";
  display: inline-block;
  transform: rotate(45deg);
  height: .06rem;
  width: .06rem;
  border-width: .02rem .02rem 0 0;
  border-color: #C8C8CD;
  border-style: solid;
  position: relative;
  top: -1px;
  margin-left: .3rem;
}
</style>
