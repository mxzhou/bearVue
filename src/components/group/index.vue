<template>
  <div>
    <div class="ui_cells_title" v-if="title" :style="{color:titleColor}" v-html="title"></div>
    <div class="ui_cells" :class="{'vux-no-group-title':!title}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    titleColor: String
  }
}
</script>

<style lang="less">
@import '../../styles/ui/widget/ui_cell/ui_access.less';
@import '../../styles/ui/widget/ui_cell/ui_cell_global.less';

.vux-no-group-title {
  margin-top:15px;
}
.ui_cells > a {
  color:#000;
}
</style>
