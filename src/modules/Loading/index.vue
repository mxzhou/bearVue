<template>
  <div>
    <group>
      <switch title="Toggle" :value.sync="show1" @on-change="show1change"></switch>
    </group>
    <loading :show="show1" :text="text1"></loading>
  </div>
</template>

<script type="text/ecmascript-6">
import { Loading, Group, Switch } from '../../components'
import {changeTitle} from '../../utils/hack'
export default {
  components: {
    Loading,
    Group,
    Switch
  },
  data () {
    return {
      show1: false,
      text1: 'Processing'
    }
  },
  init() {
    changeTitle('Loading')
  },
  methods: {
    show1change (val) {
      if (val) {
        tick(0, (percent) => {
          if (percent === 100) {
            this.show1 = false
            this.text1 = 'Start processing'
            return
          }
          this.text1 = `${percent}% completed`
        })
      }
    }
  }
}

function tick (i, cb) {
  setTimeout(function () {
    i++
    cb(i)
    if (i < 100) {
      tick(i, cb)
    }
  }, 50)
}
</script>
