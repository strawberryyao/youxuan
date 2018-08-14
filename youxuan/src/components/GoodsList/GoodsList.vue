<template>
  <!--新品列表-->
  <div class="swiper-container2">
    <ul class="swiper-wrapper">
      <li class="swiper-slide swiper2" v-for="item in data" :key="item.id">
        <a href="javascript:;" class="giftLink">
          <div class="img-wrap">
            <img :src="item.primaryPicUrl" alt="">
          </div>
          <div class="tagWrapper">
            <p class="bg-c" style=" background-color:#e5686d">七夕推荐</p>
            <p class="bg-c" style="background-color: #f48f18">七夕礼物价</p>
          </div>
          <div class="giftName">
            <span class="ellipsis">{{item.name}}</span>
          </div>
          <div class="ellipsis text">{{item.simpleDesc}}</div>
          <div class="giftPrice ellipsis"><span>￥{{item.retailPrice}}</span></div>
        </a>
      </li>
      <div class="swiper-slide swiper2 last">
          <a href="javascript:;">
            <span>查看全部</span>
          </a>
      </div>
    </ul>

  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    props:{
      data:Array
    },
    mounted() {
    },
    watch:{
      data(){
        this.$nextTick(()=>{
          var swiper = new Swiper('.swiper-container2', {
            slidesPerView: 2.37,
            spaceBetween: 0,
            pagination: {
              clickable: true,
            },
          });
        })
      }
    },
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
              display block
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
