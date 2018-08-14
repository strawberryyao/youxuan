<template>
  <div class="copyright">
    <div class="content-g">
      <div class="bd">
        <a href="javascript:;" class="goApp">下载APP</a>
        <a href="javascript:;">电脑版</a>
      </div>
      <p class="desc">
        <span>网易公司版权所有 © 1997-2018</span>
        <br>
        <span>食品经营许可证：JY13301080111719</span>
      </p>
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
  .copyright
    border-top 1px solid rgba(0,0,0,.15);
    background-color #414141
    .content-g
      padding .54rem .2rem .28rem
      height 2.44rem
      box-sizing border-box
      display: flex;
      flex-direction column
      justify-content center
      align-items center
      .bd
        a
          display inline-block
          width 1.7rem
          height .6rem
          border: 1px solid #999;
          color #ffffff
          font-size 24px
          line-height .62rem
          text-align center
          &.goApp
            margin-right .5rem
      .desc
        margin-top .36rem
        color #999999
        line-height .32rem
        span
          font-size .24rem

</style>
