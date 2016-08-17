<template>
  <div class="vux-picker">
    <flexbox :gutter="0">
      <flexbox-item v-for="(index, one) in dataArray" style="margin-left:0;">
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
  ready () {
    this.$nextTick(() => {
      this.render()
    })
  },
  props: {
    data: {
      type: Array
    },
    columns: {
      type: Number,
      default: 3
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
      if (this.columns === 0) {
        return
      }

      if(index >= 3){
        return;
      }
      const _this = this;
      this.show = true;
      api.getAreaList(data).then(response=>{
        _this.show = false;
        var data = response.data.data;
        _this.scroller[index] && _this.scroller[index].destroy()
        _this.scroller[index] = new Scroller(_this.getId(index), {
          data: data,
          defaultValue: data[0].id, //value[i] ||
          itemClass: _this.item_class,
          onSelect (value,name) {
            var _index = index;
            _this.value.$set(index, value)
            _this.name.$set(index, name)
            if (_this.columns !== 0) {
              _this.renderChain({addressType:(_index+2),addressId:value},(_index+1))
            }
          }
        })
        _this.value.$set(index, data[0].id)
        _this.name.$set(index, data[0].addressName)
        var i = index + 1;
        _this.getScroller({addressType:(i+1),addressId:data[0].id},(index+1))
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
        _this.show = false;
        var data = response.data.data;
        _this.scroller[index] = new Scroller(ID, {
          data: data,
          defaultValue: data[0].id, //value[i] ||
          itemClass: _this.item_class,
          onSelect (value,name) {
            _this.value.$set(index, value)
            _this.name.$set(index, name)
            _this.renderChain({addressType:(index+2),addressId:value},(index+1))
          }
        })
        _this.value.$set(index, data[0].id)
        _this.name.$set(index, data[0].addressName)
        _this.renderChain({addressType:(index+2),addressId:data[0].value},(index+1))
      }, response => {
        this.show = false;
        console.log('response fail');
      });
    },
    render () {
      const columns = this.columns;
      this.getScroller({addressId:0,addressType:1},0);
    },
  },
  watch: {
    value (val) {
      if(val.length == 3){
        this.$emit('on-change', val,this.name)
      }
    }
  },
  data () {
    return {
      name:[],
      dataArray:[0,1,2],
      show:false,
      scroller: [],
      count: 0,
      uuid: Math.random().toString(36).substring(3, 8)
    }
  },
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

