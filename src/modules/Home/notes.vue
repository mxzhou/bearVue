<template>
    <div class="announce-bar">
        <span class="fr"><img :src="imgArrow"></span>
        <span class="fl"><img :src="imgAnnounce"></span>
        <ul>
        <li v-for="item in list"><a v-link="{ name: 'mine', params: {aid: item.id } }">恭喜<span class="username">{{item.username}}</span>获得<span class="prize">{{item.prize}}</span>！</a></li>
        </ul>
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
    }
    li {
        display: block;
        width: 3.2rem;
        margin-left: 0.3rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #999;
        span {
            margin: 0 0.03rem;
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