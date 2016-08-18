<template>
  <div id="loadingToast" class="ui_loading_toast" v-if="show">
    <div class="ui_mask_transparent"></div>
    <div class="ui_toast">
      <div class="ui_loading">
        <div class="ui_loading_leaf" v-for="i in 12" :class="['ui_loading_leaf_' + i]"></div>
      </div>
      <!--<p class="ui_toast_content">{{text}}<slot></slot></p>-->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
    text: {
      type: String,
      default: 'Loading'
    }
  }
}
</script>

<style lang="less">
/*@import '../../styles/ui/widget/ui_tips/ui_mask.less';*/
/*@import '../../styles/ui/widget/ui_tips/ui_toast.less';*/
</style>
