<template>
  <div id="app">
    <MaskGift/>
    <router-view></router-view>

  </div>
</template>
<script>
  //import FooterGuide from './components/FooterGuide/FooterGuide'
  import Mask from './components/Mask/Mask'
  export default {
    components:{
      MaskGift:Mask
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
