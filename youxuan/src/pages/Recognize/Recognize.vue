<template>
  <div>
    <LoginHeader/>
    <div class="topic-container">
      <!--两翼轮播-->
      <div class="inner-container">
        <div class="swiper-container-one">
          <div class="swiper-wrapper">
            <a class="swiper-slide swiper-slide-one"><img class="recognition-img"
                                                          src="//yanxuan.nosdn.127.net/03ca6f1617063cc3e7e9a9d18ee15e17.jpg?imageView&quality=75"
                                                          alt=""></a>
            <a class="swiper-slide swiper-slide-one">
              <img class="recognition-img"
                   src="//yanxuan.nosdn.127.net/2e847dc5262aa3e136db2fdb0bb8ce58.jpg?imageView&quality=75" alt="">
              <div class="recognition-content">
                <div class="recognition-subtitle">严选HOME</div>
                <div class="recognition-title">精致女孩的单身公寓</div>
                <div class="recognition-desc">女神范软装指南</div>
              </div>
            </a>
            <a class="swiper-slide swiper-slide-one">
              <img class="recognition-img"
                   src="//yanxuan.nosdn.127.net/17412c21bc7293ae2f307f4536deed49.jpg?imageView&quality=75" alt="">
              <div class="recognition-content">
                <div class="recognition-subtitle">挑款师推荐</div>
                <div class="recognition-title">鞋柜里独宠的舒适好鞋</div>
                <div class="recognition-desc">不费心思的百搭鞋品</div>
              </div>
            </a>
            <a class="swiper-slide swiper-slide-one"><img class="recognition-img"
                                                          src="//yanxuan.nosdn.127.net/61e1b1d8c59a08287f20e050bd30c7c8.jpg?imageView&quality=75"
                                                          alt=""></a>
            <a class="swiper-slide swiper-slide-one"><img class="recognition-img"
                                                          src="//yanxuan.nosdn.127.net/a6afa6e92f825f1a659f1e927c007ff5.jpg?imageView&quality=75"
                                                          alt=""></a>
          </div>
        </div>
      </div>
      <!--严选文章轮播-->
      <div class="topic-banners">
        <div class="swiper-container-two">
          <div class="swiper-wrapper">
            <a class="swiper-slide topic-item">
              <div class="topic-img"><img
                src="//yanxuan.nosdn.127.net/32fb54dda7de5c4a80b4d45d370e045e.png?imageView&quality=75" alt=""></div>
              <div class="article">336篇文章</div>
              <div class="topic-title">严选推荐</div>
            </a>
            <a class="swiper-slide topic-item">
              <div class="topic-img"><img
                src="//yanxuan.nosdn.127.net/32fb54dda7de5c4a80b4d45d370e045e.png?imageView&quality=75" alt=""></div>
              <div class="article"></div>
              <div class="topic-title"></div>
            </a>
            <a class="swiper-slide topic-item">
              <div class="topic-img"><img
                src="//yanxuan.nosdn.127.net/32fb54dda7de5c4a80b4d45d370e045e.png?imageView&quality=75" alt=""></div>
              <div class="article"></div>
              <div class="topic-title"></div>
            </a>
            <a class="swiper-slide topic-item">
              <div class="topic-img"><img
                src="//yanxuan.nosdn.127.net/32fb54dda7de5c4a80b4d45d370e045e.png?imageView&quality=75" alt=""></div>
              <div class="article"></div>
              <div class="topic-title"></div>
            </a>
            <a class="swiper-slide topic-item">
              <div class="topic-img"><img
                src="//yanxuan.nosdn.127.net/32fb54dda7de5c4a80b4d45d370e045e.png?imageView&quality=75" alt=""></div>
              <div class="article"></div>
              <div class="topic-title"></div>
            </a>
            <a class="swiper-slide topic-item">
              <div class="topic-img"><img
                src="//yanxuan.nosdn.127.net/32fb54dda7de5c4a80b4d45d370e045e.png?imageView&quality=75" alt=""></div>
              <div class="article"></div>
              <div class="topic-title"></div>
            </a>
            <a class="swiper-slide topic-item">
              <div class="topic-img"><img
                src="//yanxuan.nosdn.127.net/32fb54dda7de5c4a80b4d45d370e045e.png?imageView&quality=75" alt=""></div>
              <div class="article"></div>
              <div class="topic-title"></div>
            </a>
            <a class="swiper-slide topic-item">
              <div class="topic-img"><img
                src="//yanxuan.nosdn.127.net/32fb54dda7de5c4a80b4d45d370e045e.png?imageView&quality=75" alt=""></div>
              <div class="article"></div>
              <div class="topic-title"></div>
            </a>
            <a class="swiper-slide topic-item">
              <div class="topic-img"><img
                src="//yanxuan.nosdn.127.net/32fb54dda7de5c4a80b4d45d370e045e.png?imageView&quality=75" alt=""></div>
              <div class="article"></div>
              <div class="topic-title"></div>
            </a>

          </div>
        </div>
      </div>
    </div>
    <!--为你推荐-->
    <Split/>
    <div class="recommend-title">为你推荐</div>
    <Recommend/>
    <Recommend/>
    <Split/>
    <!--十点一刻-->
    <div class="recommend-title">十点一刻</div>
    <div></div>

    <!--严选臻品(为你推荐)-->
    <div></div>
    <!--严选Look-->
    <div></div>
    <!--更多精彩-->
    <div></div>
  </div>

</template>

<script>
  import Swiper from 'swiper'
  import LoginHeader from '../Login/LoginHeader'
  import Recommend from '../../components/Recommend/Recommend'

  export default {
    data() {
      return {}
    },
    methods: {},
    mounted() {
      var swiper = new Swiper('.swiper-container-one', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        centeredSlides: true,
      })

      var swiper2 = new Swiper('.swiper-container-two', {
        slidesPerView: 3.7,
        spaceBetween: 10,
      });
    },

    components: {
      LoginHeader,
      Recommend
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    background-color #fff
    width 100%

  .inner-container
    width 6.9rem
    height 3.85rem
    padding .24rem 0
    background-color #fff
    margin 0 .3rem
    .swiper-slide-one
      display block
      padding 0 .1rem
      background-color #fff
      text-align center
      width 6.9rem !important
      box-sizing border-box
      .recognition-img
        height 3.85rem
        width 6.7rem
      .recognition-content
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        margin auto
        width 4.66rem
        height 1.98rem
        background-color rgba(255, 255, 255, .9)
        flex-direction column
        align-items center
        justify-content center
        display flex
        .recognition-subtitle
          color #7f7f7f
          font-size .2rem
          padding 0 .08rem
          position relative
          line-height .3rem
          &:before, &:after
            content ' '
            position absolute
            top 0
            bottom 0
            margin auto
            width .24rem
            height 1px
            background-color #999
          &:before
            left -0.2rem
        .recognition-title
          line-height .48rem
          color #333
          margin-top .16rem
          font-weight 700
          font-size .32rem
        .recognition-desc
          font-size .24rem
          color #333
          line-height .36rem
          margin-top .04rem

  .topic-banners
    overflow hidden
    padding .32rem .3rem .28rem
    height 2.86rem
    background-color #fff
    margin-bottom .2rem
    box-sizing border-box
  .topic-item
    position relative
    width 1.64rem
    height 2.1rem
    margin-right .24rem
    .topic-img
      width 1.64rem
      height 1.64rem
      margin-bottom .22rem
      border-radius .04rem
      img
        width 100%
        height 100%
    .article
      position absolute
      top .04rem
      right .16rem
      color #fff
      width 1.16rem
      height .32rem
      border-radius 0 .08rem 0 0
      font-size .24rem
    .topic-title
      color #333
      font-size .24rem
      line-height 1
      text-align center
      width 1.84rem
      margin-left -.1rem
  .recommend-title
    background-color #fff
    text-align center
    font-size .32rem
    height 1.2rem
    line-height 1.2rem
</style>
