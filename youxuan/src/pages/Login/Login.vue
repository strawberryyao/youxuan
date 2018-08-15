<template>
    <div id="login-bg">
      <LoginHeader/>
      <div class="logo-wrap">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="formWrap">
        <div class="phone-input">
          <input type="text" placeholder="请输入手机号">
        </div>
        <div class="auth-code">
          <input type="text" placeholder="请输入验证码">
          <span class="getAuthcode">获取验证码</span>
        </div>
        <div class="problem">
          <span>遇到问题?</span>
          <span>使用密码验证登录</span>
        </div>
      </div>
      <div class="btnWrap">
        <div class="loginByphone" @click="$router.replace('/login')"><span>登录</span></div>
        <div class="loginByemail"><span>其他登录方式</span></div>
        <div class="registerByphone"><span>手机号快捷注册 </span><i  class="iconfont icon-jiantou"></i></div>
      </div>


    </div>
</template>

<script>
  import LoginHeader from './LoginHeader'
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
  #login-bg
    background-color #fff
    width 100%
    .logo-wrap
      text-align center
      padding-top 1.6rem
      padding-bottom 1.6rem
      img
        width 1.92rem
        height .64rem
    .formWrap
      width 7.5rem
      box-sizing border-box
      padding 0 .4rem
      .phone-input
        height .9rem
        width 100%
        padding-left .16rem
        border-bottom 1px solid #ccc
        input
          margin-top .28rem
          margin-bottom .28rem
          outline none
      .auth-code
        margin-top .3rem
        line-height .9rem
        width 100%
        padding-left .16rem
        border-bottom 1px solid #ccc
        position relative
        input
          margin-top .28rem
          margin-bottom .28rem
          outline none
        .getAuthcode
            position absolute
            right .1rem
            border 1px solid #7F7F7F
            display block
            line-height .42rem
            border-radius 8px
            bottom .25rem
            padding 0 .05rem
      .problem
          display flex
          justify-content space-between
          padding .4rem 0


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
      .loginByemail
        background-color #fff
        color #b4282d
      .registerByphone
        text-align center
        .icon-jiantou
          font-size .32rem


  #app
    width 100%
    height 100%
    background #f5f5f5
    display flex
    flex-flow column


</style>
