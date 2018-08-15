<template>
    <div class="down-load-banner" ref="appBanner">
      <div class="g-row">
        <div class="close">
          <i class="iconfont icon-guanbi1" @click="$emit('closeApp')" ></i>
        </div>
        <div class="sub-title">
          <div class="bg-logo">
            <img src="../../../static/youxuan.png" alt="">
          </div>
          <div class="sub-content">
            <p class="txt1">网易严选</p>
            <p class="txt2">立即领取APP新人专享1000元礼包</p>
          </div>
        </div>
        <a href="javascript:;" class="open-app">打开APP</a>
      </div>
    </div>
</template>

<script>
  export default {
    methods: {

    },
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .down-load-banner
    height .96rem
    width 100%
    background #333
    position relative
    z-index 2
    .g-row
      padding .12rem .2rem .12rem .16rem
      width 100%
      height .96rem
      margin-right auto
      margin-left auto
      background #333
      box-sizing border-box
      display flex
      position relative
      .close
          width .5rem
          height .5rem
          margin-top .2rem
          margin-right .12rem
          text-align center
          i
            color #fff
            font-size 26px
      .sub-title
          display flex
          .bg-logo
            width .72rem
            height .72rem
            margin-right .12rem
            img
              width 100%
              height 100%
          .sub-content
            color #fff
            padding-top .08rem
            .txt1
              font-size .24rem
              margin-bottom .08rem
            .txt2
              font-size .22rem
      .open-app
        position absolute
        width 1.36rem
        height .51rem
        margin-top .09rem
        border 1px solid #b4282d
        background-color #b4282d
        overflow hidden
        border-radius 4px
        right .2rem
        text-align center
        color #fff
        line-height .51rem
</style>
