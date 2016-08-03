<template>
    <div class="announce-bar">
        <ul>
            <li><span class="fr">恭喜<span class="username">用户的方面</span>获得<span class="prize">1000元充值卡</span>！</li>
        </ul>
    </div>
</template>
<script>
import arrow from '../../assets/images/ic_s_arrow.png'
import announce from '../../assets/images/ic_announce.png'
export default {
  props: ['indexImg'],
  data () {
      return {
        imgArrow: arrow,
        imgAnnounce: announce
      }
    },
}
</script>
<style lang="less" scoped>
  .announce-bar {
    position: relative;
    width: 100%;
    height: 0.4rem;
    background: #FFF;
    ul,li {
        margin: 0;
        padding: 0;
        list-style: none;
    }
  }
</style>