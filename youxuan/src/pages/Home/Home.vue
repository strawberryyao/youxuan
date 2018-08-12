<template>
  <div id="home">
    <div class="fix">
      <!--头部-->
      <Header/>
      <!--头部导航条-->
      <HeaderScroll/>
    </div>
    <!--轮播-->
    <div class="mt158">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:">
              <img
                src="https://yanxuan.nosdn.127.net/e8404dffe57eff5100feb721f9380386.jpg?imageView&thumbnail=750x0&quality=75"/>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:">
              <img
                src="https://yanxuan.nosdn.127.net/28bf39ed14733245c5feee26625b8886.jpg?imageView&thumbnail=750x0&quality=75"/>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:">
              <img
                src="https://yanxuan.nosdn.127.net/799c6a461aac7b0adaf5845586ad3afa.jpg?imageView&thumbnail=750x0&quality=75"/>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:">
              <img
                src="https://yanxuan.nosdn.127.net/eb9cd3e186765f0d106ed06eec1e43c9.jpg?imageView&thumbnail=750x0&quality=75"/>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:">
              <img
                src="https://yanxuan.nosdn.127.net/cb99c824c96f5636574744f0446947a0.jpg?imageView&thumbnail=750x0&quality=75"/>
            </a>
          </div>

        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <ul class="service">
      <li><a href="#javascript:;"><i class="iconfont icon-duigoudaibiankuang"></i><span class="text">网易自营品牌</span></a>
      </li>
      <li><a href="#javascript:;"><i class="iconfont icon-duigoudaibiankuang"></i><span class="text">30天无忧退换</span></a>
      </li>
      <li><a href="#javascript:;"><i class="iconfont icon-duigoudaibiankuang"></i><span class="text">48小时快速退款</span></a>
      </li>
    </ul>
    <!--品牌直供-->
    <div class="direct-supply">
      <header class="bd">
        <a href="javascript:;">
          <span>品牌制造商直供</span>
          <i class="iconfont icon-rightarrow"></i>
        </a>
      </header>
      <ul class="manufacturer">
        <li class="manufacturerList">
          <a>
            <div class="detail">
              <h4 class="title">CK制造商</h4>
              <span>25元起</span>
              <span class="newPro">上新</span>
            </div>
            <img
              src="http://yanxuan.nosdn.127.net/e57c3fb16c4633c292d8c0e7cb053a6f.png?imageView&thumbnail=355x0&quality=65"/>
          </a>
        </li>
        <li class="manufacturerList">
          <a>
            <div class="detail">
              <h4 class="title">Nine West制造商</h4>
              <span>209元起</span>
              <span class="newPro">上新</span>
            </div>
            <img
              src="http://yanxuan.nosdn.127.net/cc056d931b009298769d65b94175d696.png?imageView&thumbnail=355x0&quality=65"/>
          </a>
        </li>
        <li class="manufacturerList">
          <a>
            <div class="detail">
              <h4 class="title">海外制造商</h4>
              <span>9.9元起</span>
              <span class="newPro">上新</span>
            </div>
            <img
              src="http://yanxuan.nosdn.127.net/5e2f6d68ca4cf25b18d6573eafa2a4d4.png?imageView&thumbnail=355x0&quality=65"/>
          </a>
        </li>
        <li class="manufacturerList">
          <a>
            <div class="detail ">
              <h4 class="title ellipsis">Ralph Lauren制造商</h4>
              <span>19元起</span>
            </div>
            <img
              src="http://yanxuan.nosdn.127.net/7f55f337f98a198ac3d629847171d5d2.png?imageView&thumbnail=355x0&quality=65"/>
          </a>
        </li>
      </ul>
    </div>
    <!--背景标题-->
    <header class="bg-brand">
      <a href="javascript:" class="more">
        <span>新品首发</span>
        <div class="all">
          <span>查看全部</span>
          <i class="iconfont icon-jiantou"></i>
        </div>
      </a>
    </header>
    <!--新品首发列表-->
    <GoodsList/>
    <!--好物精选。背景-->
    <Split/>
    <header class="bg-brand bg2">
      <a href="javascript:" class="more good-thing">
        <span>人气推荐 · 好物精选</span>
        <div class="all all2">
          <span>查看全部</span>
          <i class="iconfont icon-jiantou"></i>
        </div>
      </a>
    </header>

  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  import Header from '../../components/Header/Header'
  import HeaderScroll from '../../components/HeaderScroll/HeaderScroll'
  import GoodsList from '../../components/GoodsList/GoodsList'


  export default {
    data() {
      return {}
    },
    methods: {},
    mounted() {
      new Swiper('.swiper-container', {
        loop: true, // 循环轮播
        autoplay: true,
        pagination: {  // 分页器
          el: '.swiper-pagination',
        },
      })
    },
    components: {
      Header,
      HeaderScroll,
      GoodsList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #home
    width 100%
    height 100%
    background-color #f4f4f4
    .fix
      position fixed
      top 0
      width 100%
      z-index 10
    .mt158
      margin-top 1.58rem
    .swiper-pagination-bullet
      width .3rem
      height .05rem
      border-radius 0
      &.swiper-pagination-bullet-active
        opacity: 1
        background #fff

  .service
    display flex
    background #fff
    justify-content space-around
    font-size .22rem
    li
      line-height .35rem
      padding .19rem 0 .18rem
      .icon-duigoudaibiankuang
        color #b4282d
        font-size .24rem
        padding .1rem

  .direct-supply
    background #fff
    width: 100%
    margin-top .22rem
    padding-bottom .08rem
    .bd
      justify-content center
      display flex
      align-items center
      font-size .32rem
      height 1.1rem
      box-sizing border-box
      a
        color #333
        display flex
        align-items center
        span
          padding .08rem 0
          margin-right .08rem
        .icon-rightarrow
          font-size .28rem

    .manufacturer
      display flex
      flex-wrap wrap
      width 100%
      margin 0 .16rem
      .manufacturerList
        background-color #f4f4f4
        box-sizing border-box
        margin-bottom .08rem
        position relative
        height 2.38rem
        &:nth-child(1)
          margin-right .08rem
        &:nth-child(3)
          margin-right .08rem
        .detail
          position absolute
          top 0
          left 0
          padding .2rem 0 0 .2rem
          display flex
          flex-direction column
          h4.title
            color #333
            margin-bottom .08rem
            line-height .33rem

  .bg-brand
    background url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png")
    height 2.6rem
    margin-bottom .32rem
    margin-top .15rem
    display flex
    justify-content center
    align-items center
    .more
      display block
      text-align center
      font-size .32rem
      color #8BA0B6
      span
        padding 0 .08rem
      .all
        position relative
        margin .16rem auto 0
        width 2.4rem
        font-size .28rem
        line-height .56rem
        background #D8E5F1
        text-align center
        .icon-jiantou
          font-size .24rem
          position absolute
          right .4rem
  .bg2
    background url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap2-d626e0b52a.png")
    margin-top 0
    .good-thing
      color #B4A078
      font-size .36rem
      .all
        background #F4E9CB


</style>
