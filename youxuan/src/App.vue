<template>
  <div id="app">
    <MaskGift/>
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>
<script>
  /*$route.meta.showFooter 控制底部导航是否显示*/
  import FooterGuide from './components/FooterGuide/FooterGuide'
  import Mask from './components/Mask/Mask'
  export default {
    components:{
      MaskGift:Mask,
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
