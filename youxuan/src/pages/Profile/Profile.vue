<template>
  <div class="loginWrapper">
    <LoginHeader/>
    <div class="logoWrap">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
    </div>
    <div class="btnWrap">
      <div class="loginByphone" @click="$router.replace('/login')"><i class="iconfont icon-shouji" ></i><span>手机号码登录</span></div>
      <div class="loginByemail"><i class="iconfont icon-email" ></i><span>邮箱账号登录</span></div>
      <div class="registerByphone"><span>手机号快捷注册</span><i  class="iconfont icon-jiantou"></i></div>
    </div>
    <div class="loginType">
      <div class="login-type">
        <span>
          <a href="javascript:;" class="iconfont icon-weixin"></a>
          <span>微信</span>
        </span>
      </div>
      <div class="login-type login-qq">
        <span>
          <a href="javascript:;" class="iconfont icon-qq"></a>
          <span>QQ</span>
        </span>
      </div>
      <div class="login-type">
        <span>
          <a href="javascript:;" class="iconfont icon-weibo"></a>
          <span>微博</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import LoginHeader from '../Login/LoginHeader'
  export default {
    data() {
      return {}
    },
    methods: {},
    components: {
      LoginHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .loginWrapper
    width 100%
    position relative
    .logoWrap
      text-align center
      padding-top 1.6rem
      padding-bottom 1.6rem
      img
        width 2.68rem
        height .9rem

    .btnWrap
      padding 0 .4rem
      margin-bottom 2.05rem
      .loginByphone, .loginByemail
        margin-bottom .32rem
        border 1px solid #b4282d
        font-size .28rem
        color: #fff
        height .94rem
        line-height .94rem
        background-color #b4282d
        text-align center
        border-radius 4px
        .icon-shouji, .icon-email
          font-size .32rem
          margin-right .08rem
      .loginByemail
        background-color #fff
        color #b4282d
      .registerByphone
        text-align center
        .icon-jiantou
          font-size .32rem
          margin-left .08rem

    .loginType
      position absolute
      width 100%
      height .4rem
      bottom -4.6rem
      text-align center
      .login-type
        display inline-block
        text-align center
        padding 0 .4rem
        span
          text-align center
          a
            font-size .40rem
            text-align center

      .login-qq
        border-left 1px solid
        border-right 1px solid
</style>
