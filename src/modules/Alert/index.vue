<!--模板 -->
<template>
  <div>
    <group>
      <switch title="Toggle" :value.sync="show"></switch>
    </group>
    <alert :show.sync="show" title="hahahhha">Message</alert>
  </div>
</template>

<!--VM定义 -->
<script>
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
  ready(){
    changeTitle('Alert')
  },
  methods:{
    onHide(){
      console.log('on hide')

    },
    onshow(){
      console.log('on show')

    }
  }
}
</script>
<!-- 引入样式 -->

