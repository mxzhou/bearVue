<template>
  <div>
    <div class="announce-bar">
        <span class="fr"><img :src="imgArrow"></span>
        <span class="fl"><img :src="imgAnnounce"></span>
        <ul>
        <li v-for="item in list"><a v-link="{ name: 'mine',params: {aid: item.id } }">恭喜<span class="username">{{item.username}}</span>获得<span class="prize">{{item.prize}}</span>！</a></li>
        </ul>
    </div>
  </div>
</template>
<script>
import arrow from '../../assets/images/ic_s_arrow.png'
import announce from '../../assets/images/ic_announce.png'
export default {
  props: ['list'],
  data () {
    return {
      imgArrow: arrow,
      imgAnnounce: announce
    }
  },
  attached () {
    let idx = 0
    let len = this.$el.querySelector('ul li')
    let $ul = this.$el.querySelector('ul')
    setInterval(function(){
      if(idx<4){
        idx++
        $ul.style.marginTop='-'+idx*0.4+'rem'
      }else{
        idx = 0
        $ul.style.marginTop="0"
      }
    },2000);
  },
  methods: {
    onClick () {
      go(this.link, this.$router)
    }
  }
}
</script>
<style lang="less" scoped>
  .announce-bar {
    position: relative;
    width: 100%;
    height: 0.4rem;
    background: #FFF;
    font-size: 0.14rem;
    line-height: 0.4rem;
    overflow: hidden;
    .fl {
        margin-top: 0.03rem;
        margin-left: 0.08rem;
        img {
            width: 0.16rem;
        }
    }
    .fr {
        margin-top: 0;
        margin-right: 0.08rem;
        img {
            width: 0.06rem;
        }
    }
    ul,li {
        margin: 0;
        padding: 0;
        list-style: none;
        -webkit-transition-duration: .5s;
    }
    li {
        display: block;
        width: 3.8rem;
        color: #999;
        height: 0.4rem;
        span {
            margin: 0 0.03rem;
        }
        a {
          color: #999;
          display: block;
          height: 100%;
          padding-right: 0.3rem;
          padding-left: 0.06rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .username {
           color: #333;
        }
        .prize {
           color: #FD9727;
        }
    }
  }
</style>