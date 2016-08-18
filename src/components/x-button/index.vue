<template>
  <button class="ui_btn" :class="classes" :disabled="disabled">
    {{text}}<slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      default: 'default'
    },
    disabled: Boolean,
    mini: Boolean,
    plain: Boolean,
    text: String
  },
  computed: {
classes () {
return [
{
  ui_btn_disabled: this.disabled,
  ui_btn_mini: this.mini
},
`ui_btn_${this.type}`,
 this.plain ? `ui_btn_plain_${this.type}` : ''
]
}
}
}
</script>

  <style lang="less">
/*@import '../../styles/ui/widget/ui_button/ui_button.less';*/
</style>
