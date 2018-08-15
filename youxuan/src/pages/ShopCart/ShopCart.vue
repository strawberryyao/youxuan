<template>
<div id="shopCart">
  <div class="shopCartBar">
    <div class="innerWrap">
      <span class="shap-cart">购物车</span>
      <div class="get-coupon">领券</div>
    </div>
    <div class="shopcart-service">
      <ul class="service-list">
        <li class="service-item"><i class="service-policy"></i><span>30天无忧退货</span></li>
        <li class="service-item"><i class="service-policy"></i><span>48小时快速退款</span></li>
        <li class="service-item"><i class="service-policy"></i><span>满88元免邮费</span></li></ul>
    </div>
  </div>
  <div class="shopCart-bg">
    <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png" class="big-shopcart"/>
    <div class="loginBtn">
      <div class="add-goods">去添加点什么吧</div>
      <a href="#/login">
        <div class="login-btn">登录</div>
      </a>

    </div>
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
#shopCart
  width 100%
  height 100%
  background-color #f4f4f4
  position relative
  .shopCartBar
    width 100%
    height .88rem
    position fixed
    left 0
    top 0
    z-index 5
    .innerWrap
      background-color #fff
      padding 0 .3rem
      text-align center
      position relative
      .shap-cart
        font-size .36rem
        line-height .88rem
        text-align center
        display inline-block
      .get-coupon
        position absolute
        top 0
        right .3rem
        color #B4282D
        line-height .88rem
        font-size .3rem
    .shopcart-service
      display flex
      width 100%
      height .7rem
      .service-list
        display flex
        width 100%
        padding-left .3rem
        padding-right .3rem
        box-sizing border-box
        height 100%
        justify-content space-between
        text-align center
        .service-item
          display flex
          align-items center
          font-size .24rem
          .service-policy
            width .09rem
            height .09rem
            vertical-align middle
            margin-right .08rem
            background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-1d7541974f.png")
            display inline-block

  .shopCart-bg
    width 100%
    height 3rem
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    margin auto
    text-align center
    .big-shopcart
      width 2.48rem
      height 2.48rem
      display inline-block
    .loginBtn
      margin-top -0.2rem
      .add-goods
        margin-bottom .5rem
        font-size .28rem
        color: #999
      .login-btn
        width 4.8rem
        height .92rem
        background-color #b4282d
        color #fff
        line-height .92rem
        text-align center
        font-size .3rem
        margin auto
        border-radius .04rem
</style>
