<template>
  <div v-show="show" class="vux-toast" :transition="transition">
    <div class="ui_mask_transparent"></div>
      <div class="ui_toast" :style="{width: width}" :class="toastClass">
        <i class="ui_icon_toast" v-show="type !== 'text'"></i>
        <p class="ui_toast_content"><slot></slot></p>
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
    time: {
      type: Number,
      default: 2000
    },
    type: {
      type: String,
      default: 'success'
    },
    transition: {
      type: String,
      default: 'vux-fade'
    },
    width: {
      type: String,
      default: '1rem'
    }
  },
  computed: {
    toastClass () {
      return {
        'ui_toast_forbidden': this.type === 'warn',
        'ui_toast_cancel': this.type === 'cancel',
        'ui_toast_success': this.type === 'success',
        'ui_toast_text': this.type === 'text'
      }
    }
  },
  watch: {
    show (val) {
      if (val) {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.show = false
        }, this.time)
      }
    }
  }
}
</script>

<style lang="less">
/*@import '../../styles/ui/widget/ui_tips/ui_mask.less';*/
/*@import '../../styles/ui/icon/ui_icon_font.less';*/
/*@import '../../styles/ui/widget/ui_tips/ui_toast.less';*/

.ui_toast {
  z-index: 200;
  transform: translateX(-50%);
  margin-left: 0!important;
}
.ui_toast_forbidden {
  color: #F76260;
}
.ui_toast.ui_toast_text{
  min-height: 0;
}
.ui_toast_text .ui_toast_content {
  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 15px;
}
.ui_toast_success .ui_icon_toast:before {
  content: "\EA08";
}
.ui_toast_cancel .ui_icon_toast:before {
  content: "\EA0D";
}
.ui_toast_forbidden .ui_icon_toast:before {
  content: "\EA0B";
  color: #F76260;
}
</style>
