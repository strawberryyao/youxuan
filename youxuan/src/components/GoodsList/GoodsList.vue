<template>
  <!--新品列表-->
  <div class="swiper-container2">
    <div class="swiper-wrapper">
      <div class="swiper-slide swiper2">
        <a href="javascript" class="giftLink">
          <div class="img-wrap">
            <img
              src="http://yanxuan.nosdn.127.net/1c62af3f665ec8a7b9c9723cf1fe3320.png?imageView&quality=65&thumbnail=330x330"
              alt="">
          </div>
          <div class="tagWrapper">
            <p class="bg-c" style=" background-color:#e5686d">七夕推荐</p>
            <p class="bg-c" style="background-color: #f48f18">七夕礼物价</p>
          </div>
          <div class="giftName">
            <span class="elli">情定七夕 · 红玫瑰</span>
          </div>
          <div class="elli text">玫瑰诉情，爱意难休</div>
          <div class="giftPrice"><span>￥88</span></div>
        </a>
      </div>
      <div class="swiper-slide swiper2">
        <a href="javascript:;" class="giftLink">
          <div class="img-wrap">
            <img
              src="http://yanxuan.nosdn.127.net/edf24e85d9b57ed32c0c64ce81dd9aad.png?imageView&quality=65&thumbnail=330x330"
              alt="">
          </div>
          <div class="tagWrapper">
            <p class="bg-c" style=" background-color:#e5686d">七夕推荐</p>
            <p class="bg-c" style="background-color: #f48f18">七夕礼物价</p>
          </div>
          <div class="giftName">
            <span class="elli">情定七夕 · 红玫瑰</span>
          </div>
          <div class="elli text">玫瑰诉情，爱意难休</div>
          <div class="giftPrice"><span>￥88</span></div>
        </a>

      </div>
      <div class="swiper-slide swiper2">
        <a href="javascript:;" class="giftLink">
          <div class="img-wrap">
            <img
              src="http://yanxuan.nosdn.127.net/a173d67801d84e2cc896646ba19a1cb8.png?imageView&quality=65&thumbnail=330x330"
              alt="">
          </div>
          <div class="tagWrapper">
            <p class="bg-c" style=" background-color:#e5686d">七夕推荐</p>
            <p class="bg-c" style="background-color: #f48f18">七夕礼物价</p>
          </div>
          <div class="giftName">
            <span class="elli">情定七夕 · 红玫瑰</span>
          </div>
          <div class="elli text">玫瑰诉情，爱意难休</div>
          <div class="giftPrice"><span>￥88</span></div>
        </a>

      </div>
      <div class="swiper-slide swiper2">
        <a href="javascript:;" class="giftLink">
          <div class="img-wrap">
            <img
              src="http://yanxuan.nosdn.127.net/790ecbc8e5b42e7756948b5476d0fcee.png?imageView&quality=65&thumbnail=330x330"
              alt="">
          </div>
        </a>
      </div>
      <div class="swiper-slide swiper2">
        <a href="javascript:;" class="giftLink">
          <div class="img-wrap">
            <img
              src="http://yanxuan.nosdn.127.net/3a9b0024d32b631d37682093eebc6204.png?imageView&quality=65&thumbnail=330x330"
              alt="">
          </div>
          <div class="tagWrapper">
            <p class="bg-c" style=" background-color:#e5686d">七夕推荐</p>
            <p class="bg-c" style="background-color: #f48f18">七夕礼物价</p>
          </div>
          <div class="giftName">
            <span class="elli">情定七夕 · 红玫瑰</span>
          </div>
          <div class="elli text">玫瑰诉情，爱意难休</div>
          <div class="giftPrice"><span>￥88</span></div>
        </a>
      </div>
      <div class="swiper-slide swiper2">
        <a href="javascript:;" class="giftLink">
          <div class="img-wrap">
            <img
              src="http://yanxuan.nosdn.127.net/4ed0b3ba344a1a8a050de4f06d178b7d.png?imageView&quality=65&thumbnail=330x330"
              alt="">
          </div>
        </a>
      </div>
      <div class="swiper-slide swiper2">
        <a href="javascript:;" class="giftLink">
          <div class="img-wrap">
            <img
              src="http://yanxuan.nosdn.127.net/cb0bb4fe0a7e641a0d4f8a994f4f8514.png?imageView&quality=65&thumbnail=330x330"
              alt="">
          </div>
        </a>
      </div>
      <div class="swiper-slide swiper2">
        <a href="javascript:;" class="giftLink">
          <div class="img-wrap">
            <img
              src="http://yanxuan.nosdn.127.net/5455d75e9c76af37d57307315f8faad7.png?imageView&quality=65&thumbnail=330x330"
              alt="">
          </div>
        </a>
      </div>
      <div class="swiper-slide swiper2 last">
          <a href="javascript:;">
            <span>查看全部</span>
          </a>
      </div>
    </div>

  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    data() {
      return {}
    },
    mounted() {
      var swiper = new Swiper('.swiper-container2', {
        slidesPerView: 2.37,
        spaceBetween: 0,
        pagination: {
          clickable: true,
        },
      });
    },
    methods: {},
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .swiper-container2
    height 4.8rem
    .swiper-wrapper
      width 100%
      height 4.6rem
      .swiper2
        margin-left .3rem
        width 2.8rem!important
        .giftLink
          width 100%
          height 100%
          font-size 24px
          .img-wrap
            background-color #f4f4f4
            margin-bottom .2rem
            img
              width 2.8rem
              height 2.8rem
          .tagWrapper
              display flex
              height .3rem
              overflow hidden
              margin-bottom .16rem
              padding-left .1rem
              font-size 22px
              .bg-c
                padding .05rem .16rem

                margin-left .12rem
                margin-bottom .1rem
                height .3rem
                color #fff
                font-size 20px
                box-sizing border-box

          .giftName
            padding 0 .1rem
            line-height .33rem
            margin .1rem 0
            box-sizing border-box
            span
              text-align center
              font-size .3rem
          .text
            padding 0 .1rem
            margin-bottom .14rem
            color #7f7f7f
            line-height .3rem
            font-size 22px
            box-sizing border-box
          .giftPrice
            color #b4282d
            padding 0 .1rem
      .last
          display flex
          align-items center
          justify-content center
          border 8px solid #f4f4f4
          height 2.8rem !important
          box-sizing border-box
          margin 0 .3rem
          a
            display flex
            justify-content center
            align-items center
            span
              color #666

  .elli
    white-space nowrap
    text-overflow ellipsis
    overflow hidden

</style>
