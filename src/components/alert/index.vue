<template>
  <dialog class="ui_dialog_alert"
  :show="show"
  :mask-transition="maskTransition"
  :dialog-transition="dialogTransition"
  @on-hide="$emit('on-hide')"
  @on-show="$emit('on-show')">
    <div class="ui_dialog_hd"><strong class="ui_dialog_title">{{title}}</strong></div>
    <div class="ui_dialog_bd"><slot></slot></div>
    <div class="ui_dialog_ft">
      <a href="javascript:;" class="ui_btn_dialog primary" @click="onHide">{{buttonText}}</a>
    </div>
  </dialog>
</template>

<script>
import Dialog from '../dialog'

export default {
  components: {
    Dialog
  },
  props: {
    show: Boolean,
    title: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      default: 'OK'
    },
    maskTransition: {
      type: String,
      default: 'vux-fade'
    },
    dialogTransition: {
      type: String,
      default: 'vux-dialog'
    }
  },
  methods: {
    onHide () {
      this.show = false
    }
  }
}
</script>

<style lang="less">
/*@import '../../styles/ui/widget/ui_tips/ui_mask.less';*/
/*@import '../../styles/ui/widget/ui_tips/ui_dialog.less';*/
</style>
