<template>
  <div class="newUserGift" ref="maskWrap">
    <div class="shade"></div>
    <i class="iconfont icon-guanbi"  @click="close"></i>
    <div class="gift-wrap">
      <div class="modal">
        <div class="title">
          新人专享礼
        </div>
        <div class="subtitle" style="font-size: 24px">感谢使用网易严选, 已为你准备了一份专享礼</div>
        <div class="newUserItem">
          <img
            src="http://yanxuan.nosdn.127.net/149ac83f4c4b6d1e72e63b57cc543c87.jpg?imageView&quality=85&thumbnail=232y232"
            alt="">
          <div class="content">
            <div class="itemName">轻质方形男式墨镜</div>
            <div class="manu">
              <span>Fendi制造商</span>
            </div>
            <div class="price">
              <span class="retailPrice">￥99</span>
              <span class="comparePrice">￥369</span>
            </div>
          </div>
        </div>
        <div class="couponBtn">领券立减¥34.00</div>
        <a href="javascript:''" class="linkBtn"> 查看更多特惠商品</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      close(){
       this.$refs.maskWrap.style.display = 'none'
      }
    },
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .newUserGift
    display none
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    z-index 9999
    .shade
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      background rgba(0, 0, 0, .5)
      z-index 0
    .icon-guanbi
      position fixed
      z-index 2
      top .6rem
      right .3rem
      font-size 50px
      color #eee
    .gift-wrap
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      z-index 1
      .modal
        width 6.3rem
        height 6.92rem
        background #fff
        padding .3rem .24rem
        box-sizing border-box
        border-radius 4px
        .title
          position relative
          font-size .4rem
          font-weight 700
          text-align center
          &::before
            display inline-block
            content ''
            width .4rem
            height .04rem
            background #333
            position absolute
            left 1.3rem
            top .16rem
          &::after
            display inline-block
            content ''
            width .4rem
            height .04rem
            background #333
            position absolute
            right 1.45rem
            top .16rem

  .subtitle
    margin-top .2rem
    font-size 24px
    text-align center
    box-sizing border-box
    line-height .36rem

  .newUserItem
    margin-top .5rem
    height 2.32rem
    box-sizing border-box
    background #f4f4f4
    display flex
    width 100%
    .content
      display flex
      flex-direction column
      margin-left .08rem
      padding .43rem 0
      flex 1
      font-size 28px
      .itemName
        width 2.8rem
        text-overflow ellipsis
        white-space nowrap
        overflow hidden
        height .41rem
        font-family: PingFangSC-Light,helvetica,'Heiti SC'
      .manu
        margin-top .15rem
        font-size 24px
        box-sizing border-box
        span
          border 1px solid #7f7f7f
          border-radius 4px
          height .34rem
          display inline-block
          padding 0 .08rem
      .price
          margin-top .2rem
          font-size 28px
          line-height .41rem
          .retailPrice
            color #b4282d
          .comparePrice
            color #999
            text-decoration line-through
            margin-left .08rem


  .couponBtn
    height .88rem
    background #b4282d
    color: #fff
    margin-top .4rem
    line-height .99rem
    font-size 28px
    border-radius 4px
    text-align center
  .linkBtn
    height .88rem
    border 1px solid #7F7F7F
    border-radius 4px
    text-align center
    line-height .88rem
    font-size 28px
    margin-top .24rem
    display block
    color #333

</style>
