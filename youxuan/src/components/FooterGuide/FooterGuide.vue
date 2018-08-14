<template>
<div class="footerBar">
  <div class="navbar-item" :class="{activety: item.to === $route.path || $route.meta.highlight}"
       v-for="(item,index) in items" @click="$router.push(item.to)">
    <span class="iconfont footer-icon" :class="item.class"></span>
    <span class="footer-title">{{item.title}}</span>
  </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        items:[
          {title:'首页',to:'/home',class:'icon-shouye'},
          {title:'识物',to:'/recognize',class:'icon-hui'},
          {title:'分类',to:'/classify',class:'icon-iconset0497'},
          {title:'购物车',to:'/shopcart',class:'icon-gouwuche'},
          {title:'个人',to:'/profile',class:'icon-geren'}
        ]
      }
    },
    methods: {},
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footerBar
    width 100%
    height .96rem
    background-color #fafafa
    border-top 1px solid #d9d9d9
    justify-content space-around
    position fixed
    z-index 5
    left 0
    bottom 0
    display flex
    text-align content
    justify-content space-around
    .navbar-item
      display flex
      flex-direction column
      justify-content space-around
      align-items center
      &.activety
        color #b4282d
      .footer-icon
        font-size .45rem


</style>
