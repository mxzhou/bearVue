<template>
  <i class="{{className}}"></i>
</template>

<script>
export default {
  props: {
    type: String
  },
  computed: {
    className () {
      return `ui_icon ui_icon_${this.type}`
    }
  }
}
</script>

<style lang="less">
@import '../../styles/ui/icon/ui_icon_font.less';

.icon_big:before {
  font-size: 1.04rem
}

.icon_small:before {
  font-size: .12rem;
}
</style>
