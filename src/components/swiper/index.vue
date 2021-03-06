<template>
  <div class="vux-slider" id="{{id}}" :class="theme ? 'white' : ''">
    <div class="vux-swiper" :style="{height: xheight,marginTop:top}">
      <slot></slot>
      <div class="vux-swiper-item" v-for="item in list" @click="clickListItem(item)">
        <a href="javascript:">
          <div class="vux-img" :style="{backgroundImage: buildBackgroundUrl(item.coverImgUrl)}"></div>
          <p class="vux-swiper-desc">{{item.title}}</p>
        </a>
      </div>
    </div>
    <div :class="[dotsClass, 'vux-indicator', 'vux-indicator-' + dotsPosition]" v-show="showDots">
      <a href="javascript:" v-for="key in length">
        <i class="vux-icon-dot" :class="{'active': key === current}"></i>
      </a>
    </div>
  </div>
</template>

<script>
import Swiper from './swiper'
import { go } from '../../libs/router'
let swiperId = 'swiper'+new Date().getTime()
export default {
  ready () {
    if (!(this.list && this.list.length === 0)) {
      this.render()
    }
    this.xheight = this.getHeight()
  },
  methods: {
    clickListItem (item) {
      go(item.url, this.$router)
      this.$emit('on-click-list-item', JSON.parse(JSON.stringify(item)))
    },
    buildBackgroundUrl (url) {
      return `url(${url})`
    },
    render () {
      this.swiper = new Swiper({
        container: document.querySelector('#'+swiperId),
        direction: this.direction,
        auto: this.auto,
        loop: this.loop,
        interval: this.interval,
        threshold: this.threshold,
        duration: this.duration,
        height: this.height || this._height,
        minMovingDistance: this.minMovingDistance,
        imgList: this.imgList
      })
      .on('swiped', (prev, index) => {
        this.current = index
        this.index = index
      })
    },
    rerender () {
      if (!this.$el) {
        return
      }
      this.$nextTick(() => {
        this.index = 0
        this.current = 0
        this.length = this.list.length || this.$children.length
        this.destroy()
        this.render()
      })
    },
    destroy () {
      this.swiper && this.swiper.destroy()
    },
    getHeight () {
      // when list.length > 0, it's better to set height or ratio
      const hasHeight = parseInt(this.height, 10)
      if (hasHeight) return this.height
      if (!hasHeight) {
        if (this.aspectRatio) {
          return this.$el.offsetWidth * this.aspectRatio + 'px'
        }
        if (this.list.length) {
          return '1.88rem'
        } else {
          return 'auto'
        }
      }
    }
  },
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    },
    direction: {
      type: String,
      default: 'horizontal'
    },
    theme: {
      type: Boolean,
      default: false
    },
    showDots: {
      type: Boolean,
      default: true
    },
    dotsPosition: {
      type: String,
      default: 'right'
    },
    dotsClass: String,
    auto: {
      type: Boolean,
      default: false
    },
    loop: Boolean,
    interval: {
      type: Number,
      default: 3000
    },
    threshold: {
      type: Number,
      default: 50
    },
    duration: {
      type: Number,
      default: 300
    },
    height: {
      type: String,
      default: 'auto'
    },
    top: {
      type: String,
      default: 'auto'
    },
    bgsize: {
      type: String,
      default: 'cover'
    },
    aspectRatio: Number,
    minMovingDistance: {
      type: Number,
      default: 0
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      current: this.index,
      mTop: this.top,
      xheight: 'auto',
      length: this.list.length,
      id: swiperId
    }
  },
  watch: {
    list (val) {
      this.rerender()
    },
    current (currentIndex) {
      this.$emit('on-index-change', currentIndex)
    },
    index (val) {
      if (val !== this.current) {
        this.$nextTick(() => {
          this.swiper.go(val)
        })
      }
    }
  },
  beforeDestroy () {
    this.destroy()
  }
}

</script>

<style lang="less">
@pre: vux;
@rex : 1rem/100;
.vux-slider.white {
  .vux-img {
    background-color: #FFF!important;
    background-size: auto 100%!important;
  }
  .vux-icon-dot {
    background-color: #CCC!important;
  }
  .vux-icon-dot.active {
    background-color: #00CC77!important;
  }
}

.@{pre}-slider {
  overflow: hidden;
  position: relative;

  > .@{pre}-indicator, .@{pre}-indicator-right {
    position: absolute;
    right: 0.1rem;
    bottom: 0.02rem;

    > a {
      float: left;
      margin-left: 6*@rex;

      > .@{pre}-icon-dot {
        display: inline-block;
        vertical-align: middle;
        width: 6*@rex;
        height: 6*@rex;
        border-radius: 3*@rex;
        background-color: rgba(255,255,255,.4);
      }
      > .@{pre}-icon-dot.active {
        background-color: #FFF;
      }

    }
  }

  > .@{pre}-indicator-center {
    right: 50%;
    transform: translateX(50%)
  }

  > .@{pre}-indicator-left {
    left: 15px;
    right: auto;
  }

  > .@{pre}-swiper {
    overflow: hidden;
    position: relative;

    > .@{pre}-swiper-item {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      > a {
        display: block;
        width: 100%;
        height: 100%;

        > .@{pre}-img {
          display: block;
          width: 100%;
          height: 100%;
          background: center center no-repeat;
          background-size: cover;
        }

        > .@{pre}-swiper-desc {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 1.4em;
          font-size: 16px;
          padding: 20px 50px 12px 13px;
          color: #fff;
          text-shadow: 0 1px 0 rgba(0, 0, 0, .5);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
        }

      }
    }
  }
}
</style>
