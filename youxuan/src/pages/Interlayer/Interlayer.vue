<template>
  <div>
    <div class="g-row">
      <img src="//yanxuan.nosdn.127.net/53df1ead033706dcd7da9a91c8977b83.jpg" alt="top">
      <img src="//yanxuan.nosdn.127.net/143424244e87fb8eed45c6984c769a63.jpg" alt="mid">
    </div>
    <div class="g-row">
      <img src="//yanxuan.nosdn.127.net/06a2d444a39e1dfe621b7f0d317de7b4.jpg" alt="bot">
      <a href="/#/downloadapp" class="downloadBtn"></a>
      <a href="/#/home" class="touchScreen"></a>
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
  .g-row
    position relative
    img
      vertical-align top
      width 100%
    .downloadBtn
      position absolute
      display block
      width 4.32rem
      height .98rem
      left 1.44rem
      top .9rem
    .touchScreen
      width 2.54rem
      height .3rem
      position absolute
      display block
      left 2.36rem
      top 2.31rem
</style>
