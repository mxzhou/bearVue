<template>
  <div class="vux-picker">
    <flexbox :gutter="0">
      <flexbox-item v-for="(index, one) in data" style="margin-left:0;">
        <div class="vux-picker-item" :id="'vux-picker-' + uuid + '-' + index"></div>
      </flexbox-item>
    </flexbox>
  </div>
  <loading :show="show" text="加载中"></loading>
</template>

<script type="text/ecmascript-6">
import Scroller from './scroller'
import Flexbox from '../flexbox'
import FlexboxItem from '../flexbox-item'
import Loading from '../loading'
import Manager from './chain'
import api from '../../api'

export default {
  components: {
    Flexbox,
    FlexboxItem,
    Loading
  },
  created () {
    if (this.columns !== 0) {
      const length = this.columns
      this.store = new Manager(this.data, length)
      this.data = this.store.getColumns(this.value)
    }
  },
  ready () {
    this.$nextTick(() => {
      this.render(this.value)
    })
  },
  props: {
    data: {
      type: Array
    },
    columns: {
      type: Number,
      default: 0
    },
    value: {
      type: Array,
      twoWay: true
    },
    itemClass: {
      type: String,
      default: 'scroller-item'
    }
  },
  methods: {
    getId (i) {
      return `#vux-picker-${this.uuid}-${i}`
    },
    getScroller:function(data,index){
      console.log(this.scroller)
      if (this.columns === 0) {
        return
      }

      if(index >= 3){
        return;
      }
      const _this = this;
      this.show = true;
      api.getAreaList(data).then(response=>{
        this.show = false;
        var data = response.data.data;
        _this.scroller[index] && _this.scroller[index].destroy()
        _this.scroller[index] = new Scroller(_this.getId(index), {
          data: data,
          defaultValue: data[0].id, //value[i] ||
          itemClass: _this.item_class,
          onSelect (value) {
            var _index = index;
            _this.value.$set(0, value)
            if(_index>=2){
              return
            }
            _this.$emit('on-change', _this.getValue())
            if (_this.columns !== 0) {
              _this.renderChain({addressType:(_index+2),addressId:value},(_index+1))
            }
          }
        })
        var i = index + 1;
        this.getScroller({addressType:(i+1),addressId:data[0].id},(index+1))
      }, response => {
        this.show = false;
        console.log('response fail');
      });
    },
    renderChain:function(data,index){
      if (this.columns === 0) {
        return
      }
      if(index >= 3){
        return;
      }

      this.scroller[index].destroy();
      let ID = this.getId(index);

      const _this = this;
      this.show = true;
      api.getAreaList(data).then(response=>{
        this.show = false;
        var data = response.data.data;
        _this.scroller[index] = new Scroller(ID, {
          data: data,
          defaultValue: data[0].id, //value[i] ||
          itemClass: _this.item_class,
          onSelect (value) {
            _this.value.$set(index, value)
            _this.$emit('on-change', _this.getValue())
            _this.renderChain({addressType:(index+2),addressId:value},(index+1))
          }
        })
        this.value.$set(index, data[0].value)
        this.renderChain({addressType:(index+2),addressId:data[0].value},(index+1))
      }, response => {
        this.show = false;
        console.log('response fail');
      });
    },
    render (data, value) {
      const columns = this.columns;
      this.getScroller({addressId:0,addressType:1},0);
    },
    getValue () {
      let data = []
      for (var i = 0; i < this.data.length; i++) {
        data.push(this.scroller[i].value)
      }
      return data
    }
  },
  data () {
    return {
      show:false,
      scroller: [],
      count: 0,
      uuid: Math.random().toString(36).substring(3, 8)
    }
  },
//  watch: {
//    value (val, oldVal) {
//      // render all the scroller for chain datas
//      if (this.columns !== 0) {
//        if (val !== oldVal) {
//          this.data = this.store.getColumns(val)
//          this.$nextTick(function () {
//            this.render(this.data, val)
//          })
//        }
//      } else {
//        for (let i = 0; i < val.length; i++) {
//          if (this.scroller[i].value !== val[i]) {
//            this.scroller[i].select(val[i])
//          }
//        }
//      }
//    },
//    data (newData) {
//      if (Object.prototype.toString.call(newData[0]) === '[object Array]') {
//        this.$nextTick(() => {
//          this.render(newData, this.value)
//          // emit on-change after rerender
//          this.$nextTick(() => {
//            this.$emit('on-change', this.getValue())
//          })
//        })
//      } else {
//        if (this.columns !== 0) {
//          const length = this.columns
//          this.store = new Manager(newData, length)
//          this.data = this.store.getColumns(this.value)
//        }
//      }
//    }
//  },
  beforeDestroy () {
    for (let i = 0; i < this.count; i++) {
      this.scroller[i].destroy()
      this.scroller[i] = null
    }
  }
}
</script>

<style>
@import './scroller.css';
</style>

