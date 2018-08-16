<template>
  <div class="RecommendWrapper">
    <div class="RecommendInnerWrapper">

      <a href="javascript:;" class="recommend-container">
        <div class="recommend-bg">
          <div class="recommend-tag">严选推荐</div>
        </div>
        <div class="recommend-content">
          <div class="recommend-line1">
            <span>解锁花式告白新方式</span>
            <span>9.9元起</span>
          </div>
          <div class="recommend-info">40款恋爱小甜饼高甜来袭！</div>
        </div>
      </a>
      <a href="javascript:;" class="recommend-item">
      <div class="topicInfo">
        <div class="author-container">
          <div class="author">
            <div class="author-avatar">
              <img src="//yanxuan.nosdn.127.net/90c03e36d904a4e80155e43962da4875.png?imageView&quality=75&thumbnail=48y48" alt="">
            </div>
            <div class="nickname">丁磊</div>
          </div>
        </div>
        <div class="text-title"><span>减肥也要减得身心愉快</span></div>
        <div class="text-detail">韩国乳清蛋白代餐粉，6瓶限时8.5折</div>
      </div>
      <div class="minorPic">
        <div class="goods-recommend">丁磊的好货推荐</div>
      </div>
    </a>
      <a href="javascript:;" class="recommend-item">
        <div class="topicInfo">
          <div class="author-container">
            <div class="author">
              <div class="author-avatar">
                <img src="//yanxuan.nosdn.127.net/90c03e36d904a4e80155e43962da4875.png?imageView&quality=75&thumbnail=48y48" alt="">
              </div>
              <div class="nickname">丁磊</div>
            </div>
          </div>
          <div class="text-title"><span>减肥也要减得身心愉快</span></div>
          <div class="text-detail">韩国乳清蛋白代餐粉，6瓶限时8.5折</div>
        </div>
        <div class="minorPic">
          <div class="goods-recommend">丁磊的好货推荐</div>
        </div>
      </a>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {},
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .RecommendWrapper
    padding 0 .3rem .4rem
    margin-bottom .2rem
    background-color #fff

    .recommend-container
        display block
        position relative
        color #333
        border 1px solid #d9d9d9
        border-radius .08rem
        overflow hidden
        margin-bottom .3rem
        .recommend-bg
          position relative
          height 3.86rem
          border-radius .08rem .08rem 0 0
          overflow hidden
          background url("//yanxuan.nosdn.127.net/9c16d0d118f00d9db00fa6414aea0487.jpg")
          background-size cover
          background-position center
          .recommend-tag
            display inline-block
            padding 0 .16rem
            height .34rem
            line-height .34rem
            background-color rgba(255,255,255,.9)
            border 1px solid #d9d9d9
            border-radius .2rem
            color #333
            position absolute
            font-size .24rem
            left .2rem
            top .2rem

        .recommend-content
          overflow hidden
          position relative
          padding .24rem .20rem .67rem
          background-color #fff
          .recommend-line1
            margin-bottom .19rem
            display flex
            justify-content space-between
            align-items center
            line-height .28rem
            font-size .36rem
          .recommend-info
            position relative
            font-size .28rem
            line-height .34rem
            color #7f7f7f
            text-overflow ellipsis
            white-space nowrap
            overflow hidden
    .recommend-item
      display flex
      background-color #fff
      color #333
      border 1px solid #d9d9d9
      border-radius .08rem
      margin-bottom .3rem
      .topicInfo
        display flex
        flex 1
        flex-direction column
        justify-content center
        overflow hidden
        position relative
        padding-left .2rem
        padding-right .3rem
        .author-container
          margin-bottom: .25rem
          .author
            height 0.48rem
            font-size 0.20rem
            display flex
            align-items center
            .author-avatar
              width 0.46rem
              height 0.46rem
              margin-right .08rem
              border-radius 50%
              overflow hidden
              border 1px solid #d9d9d9
            .nickname
              color #333
              text-overflow ellipsis
              white-space nowrap
              overflow hidden
        .text-title
          margin-bottom .14rem
          line-height .29rem
          span
            margin-right .3rem
            font-size .32rem
            text-overflow ellipsis
            white-space nowrap
            overflow hidden
        .text-detail
          position relative
          font-size .24rem
          line-height .36rem
          color #7f7f7f
      .minorPic
        position relative
        width 2.8rem
        height 2.7rem
        background-image url("//yanxuan.nosdn.127.net/1d8904d2e205f93006053e34ade2223d.jpg?imageView&quality=75")
        background-size cover


  .goods-recommend
    display inline-block
    padding 0 .16rem
    height .34rem
    line-height .34rem
    background-color rgba(255,255,255,.9)
    border 1px solid #d9d9d9
    border-radius .2rem
    color #333
    position absolute
    font-size .24rem
    top .15rem
    left .15rem

</style>
