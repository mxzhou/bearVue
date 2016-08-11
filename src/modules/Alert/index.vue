<!--模板 -->
<template>
  <div>
    <group>
      <switch title="Toggle" :value.sync="show"></switch>
    </group>
    <alert :show.sync="show" title="hahahhha" @on-show="onShow" @on-hide="onHide">Message</alert>

  </div>
</template>

<!--VM定义 -->
<script type="text/ecmascript-6">
import {Alert,Switch,Group} from '../../components'
import {changeTitle} from '../../utils/hack'

export default {
  components: {
    Alert,
    Switch,
    Group
  },
  data () {
    return {
     show:false
    }
  },
  init(){
    changeTitle('Alert')
  },
  methods:{
    onHide(){
      console.log('on hide')

    },
    onShow(){
      console.log('on show')

    }
  }
}
</script>
<!-- 引入样式 -->

