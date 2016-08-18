<template>
  <div class="ui_dialog_alert" v-show="show" :transition="maskTransition" @touchmove="!this.scroll && $event.preventDefault()">
    <div class="ui_mask" @click="hideOnBlur && (show = false)"></div>
    <div class="ui_dialog" v-show="show" :transition="dialogTransition">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    maskTransition: {
      type: String,
      default: 'vux-fade'
    },
    dialogTransition: {
      type: String,
      default: 'vux-dialog'
    },
    hideOnBlur: Boolean,
    scroll: {
      type: Boolean,
      default: true
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
/*@import '../../styles/ui/widget/ui_tips/ui_mask.less';*/
/*@import '../../styles/ui/widget/ui_tips/ui_dialog.less';*/
</style>
