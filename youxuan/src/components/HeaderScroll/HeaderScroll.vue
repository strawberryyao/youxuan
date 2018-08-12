<template>
  <div class="wrap" ref="wrapper">
    <div class="scrollList">
      <div class="item active">
        推荐
      </div>
      <div class="item">
        居家
      </div>
      <div class="item">
        鞋包配饰
      </div>
      <div class="item">
        服装
      </div>
      <div class="item">
        电器
      </div>
      <div class="item">
        洗护
      </div>
      <div class="item">
        饮食
      </div>
      <div class="item">
        餐厨
      </div>
      <div class="item">
        婴童
      </div>
      <div class="item">
        文体
      </div>
      <div class="item">
        特色区
      </div>
    </div>
  </div>

</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {}
    },
     /*mounted(){
       this.$nextTick(() => {
         this.scroll = new BScroll(this.$refs.wrapper, {
           click:true,
           scrollX:true
         })
       })
     },*/
    methods: {},
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .scrollList
    display flex
    width 100%
    align-items center
    background #fff
    overflow-x auto
    .item
      text-align center
      width  20%
      flex-shrink 0
      padding .12rem 0 .2rem
      &.active
        border-bottom: .03rem solid #b4282d;
        color: #b4282d;






</style>
