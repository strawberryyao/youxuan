<template>
  <div id="home">
    <div class="fix">
      <DownloadBanner/>
      <!--头部-->
      <Header/>
      <!--头部导航条-->
      <HeaderScroll/>
    </div>
    <!--轮播-->
    <div class="mt254">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in banners" :key="index">
            <a href="javascript:">
              <img :src="item.picUrl" style="width: 750px;height: 400px"/>
            </a>
          </div>
         <!-- <div class="swiper-slide">
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
          </div>-->

        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <ul class="service">
      <li><i class="iconfont icon-duigoudaibiankuang"></i><span class="text">网易自营品牌</span>
      </li>
      <li><i class="iconfont icon-duigoudaibiankuang"></i><span class="text">30天无忧退换</span>
      </li>
      <li><i class="iconfont icon-duigoudaibiankuang"></i><span class="text">48小时快速退款</span>
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
        <li class="manufacturerList" v-for="(item,index) in homeData.tagList" :key="item.id" v-if="index<=3">
          <a href="javascript:;">
            <div class="detail">
              <h4 class="title">{{item.name}}</h4>
              <span>{{item.floorPrice}}元起</span>
              <span class="newPro" v-show="item.newOnShelf">上新</span>
            </div>
            <img
              :src="item.picUrl"/>
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
    <GoodsList :data="homeData.newItemNewUserList"/>
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
    <GoodsList :data="homeData.newItemNewUserList"/>
    <!--显示抢购-->
    <Split/>
    <div class="flashSale">
      <a href="javascript:;">
        <div class="bg-w">
          <div class="left-item">
            <div class="limitTime">严选限时购</div>
            <div class="countDown">
              <span class="h">3</span>
              <span class="colon">:</span>
              <span class="min">3</span>
              <span class="colon">:</span>
              <span class="sec">3</span>
            </div>
            <div class="nextSale">
              <span>下一场14：00开始</span>
            </div>
          </div>
          <div class="right-item">
            <img
              src="http://yanxuan.nosdn.127.net/cf57f10e83e63b83fbec9328fb2a8a4e.png?imageView&quality=85&thumbnail=330x330"
              alt="">
            <div class="priceTag">
              <span>￥82</span>
              <span>￥117</span>
            </div>
          </div>
        </div>
      </a>
    </div>
    <Split/>
    <!--福利社-->
    <div class="weal">
      <a href="javascript:;" class="weal-bg">
      </a>
    </div>

    <!--专题精选-->
    <div class="direct-supply">
      <header class="bd">
        <a href="javascript:;">
          <span>专题精选</span>
          <i class="iconfont icon-rightarrow"></i>
        </a>
      </header>
      <div class="swiper-container3">
        <div class="swiper-wrapper subject-wrap">
          <div class="swiper-slide subject1" v-for="(item,index) in homeData.topicList" :key="item.id">
            <a href="javascript:;"  class='subject-item'>
              <img :src="item.itemPicUrl" alt="">
            </a>
            <div class="line1">{{item.title}}</div>
            <div class="line2 ellipsis">{{item.subtitle}}</div>
          </div>

        </div>
      </div>
    </div>
    <Split/>
    <!--分类商品列表-->
    <CategoryGoods :data="homeData.cateList"/>
    <!--底部导航-->
    <HomeFooter class="bm97"/>

  </div>

</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'

  import Header from '../../components/Header/Header'
  import HeaderScroll from '../../components/HeaderScroll/HeaderScroll'
  import GoodsList from '../../components/GoodsList/GoodsList'
  import DownloadBanner from '../../components/DownloadBanner/DownloadBanner'
  import CategoryGoods from '../../components/CategoryGoods/CategoryGoods'
  import FooterGuide from '../../components/FooterGuide/FooterGuide'
  import HomeFooter from '../../components/HomeFooter/HomeFooter'

  export default {
    data() {
      return {}
    },
    computed:{
      ...mapState(['homeData','data','banners'])
    },
    methods: {

    },
    mounted() {
      this.$store.dispatch('getData')
      this.$store.dispatch('getHome')
      this.$store.dispatch('getBanner')
     // this.topBanners()



    },
    watch:{
      banners(val){
        this.$nextTick(()=>{
          new Swiper('.swiper-container', {
            loop: true, // 循环轮播
            autoplay: true,
            pagination: {  // 分页器
              el: '.swiper-pagination',

            },
          });
        })
      },
      homeData(){
        this.$nextTick(()=>{
          var swiper = new Swiper('.swiper-container3', {
            slidesPerView: 1.25,
            spaceBetween: 30,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
          })
        })
      }
    },
    components: {
      Header,
      HeaderScroll,
      GoodsList,
      DownloadBanner,
      CategoryGoods,
      FooterGuide,
      HomeFooter
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
    .mt254
      margin-top 2.54rem
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
          .newPro
            color #B4A078
            font-size 18px
            border 1px solid #B4A078
            border-radius 2px
            display inline-block
            width .64rem
            margin-top .1rem
            font-size 22px
            text-align center
        img
          width 3.55rem
          height 2.38rem

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

  .flashSale
    width 100%
    height 3.8rem
    background #fff
    box-sizing border-box
    .bg-w
      padding .3rem .4rem .3rem .56rem
      margin-bottom .2rem
      /*box-sizing border-box*/
      height 3.2rem
      display flex
      position relative
      .left-item
        padding-top .8rem
        display flex
        flex 1
        flex-direction column
        height 2.4rem
        .limitTime
          color #333
          font-size .36rem
          line-height .36rem
          margin-bottom .24rem
          letter-spacing .12rem
        .countDown
          display flex
          .h, .min, .sec
            background #444
            width .62rem
            height .56rem
            display inline-block
            line-height .56rem
            text-align center
            font-size .36rem
            color #fff
            border-radius 4px
          .colon
            color: #333
            font-size .3rem
            width .2rem
            display inline-block
            text-align center
            font-weight 700
            line-height .56rem
        .nextSale
          color: #333
          font-size .24rem
          line-height .24rem
          height .24rem
          margin-top .4rem
      .right-item
        width 3.2rem
        height 3.2rem
        img
          width 100%
          height 100%
          line-height 3.2rem
        .priceTag
          width .96rem
          height .96rem
          border-radius 100%
          position absolute
          right .45rem
          bottom .6rem
          background-color rgba(244, 143, 24, .95)
          display flex
          flex-direction column
          text-align center
          align-items center
          justify-content center
          span
            color #fff
            &:nth-child(2)
              text-decoration line-through


  .weal
    width 7.5rem
    height 3rem
    .weal-bg
      display block
      background-image url("http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg")
      width 100%
      height 100%

  .swiper-container3
    .subject-wrap
      width 5.75rem
      height 4.17rem
      margin 0 .3rem
      .subject1
        width 5.75rem !important
        margin-right .21rem!important
        box-sizing border-box
        .subject-item
          display block
          width 5.75rem
          height 3.22rem
          margin-bottom .16rem
          border-radius 8px
          img
            width 100%
            height 100%
        .line1
          height .41rem
          font-family: PingFangSC-Light,helvetica,'Heiti SC'
          color: #333
          font-size .28rem
          line-height .41rem
          margin-bottom .1rem
        .line2
          color: #7F7F7F
          font-size .24rem
          font-family: PingFangSC-Light,helvetica,'Heiti SC'

  .bm97
    margin-bottom .97rem

</style>
