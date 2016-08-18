<template>
  <dialog class="ui_dialog_confirm"
  :show="show"
  :mask-transition="maskTransition"
  :dialog-transition="dialogTransition"
  @on-hide="$emit('on-hide')"
  @on-show="$emit('on-show')">
    <div class="ui_dialog_hd"><strong class="ui_dialog_title">{{title}}</strong></div>
    <div class="ui_dialog_bd"><slot></slot></div>
    <div class="ui_dialog_ft">
      <a href="javascript:;" class="ui_btn_dialog default" @click="onCancel">{{cancelText}}</a>
      <a href="javascript:;" class="ui_btn_dialog primary" @click="onConfirm">{{confirmText}}</a>
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
    show: {
      type: Boolean,
      default: false,
      twoWay: true
    },
    title: {
      type: String,
      required: true
    },
    confirmText: {
      type: String,
      default: 'confirm'
    },
    cancelText: {
      type: String,
      default: 'cancel'
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
    onConfirm () {
      this.show = false
      this.$emit('on-confirm')
    },
    onCancel () {
      this.show = false
      this.$emit('on-cancel')
    }
  }
}
</script>

<style lang="less">
/*@import '../../styles/ui/widget/ui_tips/ui_mask.less';*/
/*@import '../../styles/ui/widget/ui_tips/ui_dialog.less';*/
</style>