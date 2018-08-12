<template>
  <div class="fx">
    <img class="logo " src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png"
         alt="logo">
    <i class="iconfont icon-search"></i>
    <input class="fx1" type="text" placeholder="搜索商品，共11765款好物">
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
  @import "../../../static/css/reset.css"
.fx
  display flex
  align-items: center
  padding 0.2rem
  background #fff
  position relative
  .logo
   height 0.4rem
  input
    flex 1
    text-align center
    margin-left .2rem
    padding 0 0.4rem
    background #EDEDED
    line-height .56rem
    border-radius .05rem
  .iconfont
    position absolute
    left 2.5rem
    color #555
    font-size .28rem

</style>
