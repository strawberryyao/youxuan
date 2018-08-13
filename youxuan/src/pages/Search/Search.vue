<template>
    <div class="searchWrap">
      <div class="searchInp">
        <div class="searchInner">
          <div>
            <i class="iconfont icon-search"></i>
            <input type="search">
          </div>
        </div>
      </div>
      <div class="hotSearch">

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
  .searchWrap
    width 100%
    height 4.12rem
    background-color #fff
    font-size .24rem
    .searchInp
      height .87rem
      .searchInner
        padding 0 .3rem
        width 100%
        height 100%
        box-sizing border-box
    .hotSearch
      width 100%
      height 3.25rem
</style>
