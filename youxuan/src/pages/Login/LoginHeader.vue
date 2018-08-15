<template>
  <div class="login-header">
    <a href="#/home" class="login-left"><i class="iconfont icon-shouye"></i></a>
    <a href="#/home" class="login-middle">
      <i class="wangyi-bg"></i>
    </a>
    <div class="login-right">
      <a href="#/search"><i class="iconfont icon-search"></i></a>
      <a href="#/shopCart"><i class="iconfont icon-gouwuche"></i></a>
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
  .login-header
    height 100%
    padding-right .16rem
    padding-left .24rem
    box-sizing border-box
    display flex
    line-height .87rem
    justify-content space-between
    background-color #fafafa
    .login-left
      display inline-block
      text-decoration none
      color #333
      .icon-shouye
        font-size .5rem
    .login-middle
      display inline-block
      text-decoration none
      color color #999
      text-align center
      line-height .87rem
      .wangyi-bg
        display block
        width 1.72rem
        height .54rem
        background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png")
        background-position 0 2.8rem
        margin-top .15rem
    .login-right
      a
        display inline-block
        text-decoration none
        color #999
        i.icon-search, .icon-gouwuche
          font-size .5rem
        .icon-search
          margin-right .15rem
        .icon-gouwuche
          margin-left .1rem
</style>
