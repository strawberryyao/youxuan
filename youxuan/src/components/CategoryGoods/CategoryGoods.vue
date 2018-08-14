<template>
  <div>
    <div class="category-goods" v-for="(items,index) in data" :key="data.id">
      <h4 class="category-title">{{items.name}}好物</h4>
      <ul class="category-list">
        <li class="category-item" v-for="(item,index) in items.itemList" :key="item.id" v-if="index<=6">
          <a href='javascript:;'>
            <div class="category-img">
              <img :src='item.listPicUrl' alt="">
              <div class="ellipsis">{{item.name}}</div>
            </div>
            <div class="category-content">
              <span class="ellipsis">{{item.simpleDesc}}</span>
              <span>￥{{item.retailPrice}}</span>
            </div>
          </a>
        </li>
        <!--<li class="category-item"><a href='javascript:;'>
          <div class="category-img">
            <img
              src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330"
              alt="">
            <div>硬度偏好者优选</div>
          </div>
          <div class="category-content">
            <span>冬夏两用 护脊椰棕弹簧床垫</span>
            <span>￥2099</span>
          </div>
        </a></li>
        <li class="category-item">
          <a href='javascript:;'>
            <div class="category-img">
              <img
                src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330"
                alt="">
              <div>硬度偏好者优选</div>
            </div>
            <div class="onSale">今日特价</div>
            <div class="category-content">
              <span>冬夏两用 护脊椰棕弹簧床垫护脊椰棕弹簧床垫护脊椰棕弹簧床垫</span>
              <span>￥2099</span>
            </div>
          </a></li>
        <li class="category-item"><a href='javascript:;'>
          <div class="category-img">
            <img
              src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330"
              alt="">
            <div>硬度偏好者优选</div>
          </div>
          <div class="category-content"><span></span><span></span></div>
        </a></li>
        <li class="category-item"><a href='javascript:;'>
          <div class="category-img">
            <img
              src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330"
              alt="">
            <div>硬度偏好者优选</div>
          </div>
          <div class="category-content"><span></span><span></span></div>
        </a></li>
        <li class="category-item">
          <a href='javascript:;'>
            <div class="category-img">
              <img
                src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330"
                alt="">
              <div>硬度偏好者优选</div>
            </div>
            <div class="category-content"><span></span><span></span></div>
          </a>
        </li>
        <li class="category-item"><a href='javascript:;'>
          <div class="category-img">
            <img
              src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330"
              alt="">
            <div>硬度偏好者优选</div>
          </div>
          <div class="category-content"><span></span><span></span></div>
        </a></li>
        <li class="category-item"><a href='javascript:;'>
          <div class="category-img">
            <img
              src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330"
              alt="">
            <div>硬度偏好者优选</div>
          </div>
          <div class="category-content">
            <span></span>
            <span></span>
          </div>
        </a></li>-->
      </ul>
    </div>
    <Split/>
  </div>

</template>

<script>
  export default {
    props:{
      data:Array
    },
    methods: {},
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .category-goods
    font-size .28rem
    width 7.5rem
    background-color #fff
    .category-title
      width 100%
      height 1.2rem
      line-height 1.2rem
      text-align center
    .category-list
      width 7.5rem
      height 100%
      margin 0 .1rem
      .category-item
        display inline-block
        width 3.45rem
        margin .1rem .05rem
        vertical-align top
        .category-img
          width 3.45rem
          height 4.14rem
          img
            width 3.45rem
            height 3.45rem
            display block
            background-color #f4f4f4
          div
            background-color #F1ECE2
            padding .2rem .1rem
            color #9F8A60
            font-size .24rem
            box-sizing border-box
        .onSale
          background-color #f48f18
          color #fff
          font-size .2rem
          padding .05rem .16rem
          margin-bottom .1rem
          margin-top .2rem
          display inline-block
          line-height .2rem
          border-radius .02rem
          vertical-align middle
        .category-content
          display flex
          margin-top .1rem
          flex-direction column
          span
            text-overflow ellipsis
            overflow hidden
            white-space nowrap
            color #333
            font-size .28rem
            &:nth-child(2)
              color #b4282d
              font-size .32rem
              line-height .32rem
              margin-top .08rem


</style>
