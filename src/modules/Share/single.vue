<template>
    <li class="share-box">
      <div class="left">
        <img class="img" :src="item.avatarUrl">
      </div>
      <div class="right" :class="{'noBorder':$index == 0}">
        <p class="hd clearfix">
          <span class="color-blue">{{item.nickname}}</span>
          <span class="time">{{item.openTime|formatDate}}</span>
        </p>
        <p class="bd">{{winWords}}</p>
        <div class="ft">
          <template v-for="img in imgs">
            <img class="display-img" v-lazy="img" @click="expandFunc(img)">
          </template>
        </div>
        <div class="status clearfix">
          <img class="recommend" :src="recommend"/>
          <div class="le  f-fl">
            <p class="f-toe">{{item.goodsName}}</p>
            <p class="f-toe">期号：{{item.id}}</p>
          </div>
          <div class="re f-fr">
            <div class="separate">
              <em class="before"></em>
              <em class="after"></em>
            </div>
            <a class="btn">我也要</a>
          </div>
        </div>
      </div>
    </li>
</template>

<script type="text/ecmascript-6">
  import {formatDate} from '../../utils/filters'
  import recommend from '../../assets/images/elm_recommendshowup.png'
  import edit from '../../assets/images/ic_addarticle.png'
  export default {
    props:{
      item: {
        type: Object,
        required: true
      }
    },
    components: {
    },
    filters: {
      formatDate
    },
    computed:{
      imgs(){
        return this.item.sharePicUrl.split(',')
      }
    },
    methods:{
      expandFunc:function(img){
        this.$emit('expand', img)
      }
    },
    data () {
      return {
        recommend:recommend,
        imgs:[],
        expandSrc:'',
        bExpand:false
      }
    }
  }
</script>
