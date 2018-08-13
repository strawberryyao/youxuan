<template>
  <div class="wrap" ref="wrapper">
    <ul class="scrollList" ref="scrollList">
      <li class="item2 " style="margin-left: 0" ref="item2">
        <span class="active">
           推荐
        </span>
      </li>
      <li class="item2" ref="item2">
        <span>
          居家
        </span>
      </li>
      <li class="item2" ref="item2">
        <span>
          鞋包配饰
        </span>
      </li>
      <li class="item2" ref="item2">
        <span>
           服装
        </span>
      </li>
      <li class="item2" ref="item2">
        <span>
        电器
        </span>
      </li>
      <li class="item2" ref="item2">
        <span>
        洗护
        </span>
      </li>
      <li class="item2" ref="item2">
        <span>
           饮食
        </span>
      </li>
      <li class="item2" ref="item2">
        <span>餐厨</span>
      </li>
      <li class="item2" ref="item2">
        <span>婴童</span>
      </li>
      <li class="item2" ref="item2">
        <span>文体</span>
      </li>
      <li class="item2" ref="item2">
        <span>特色区</span>
      </li>
    </ul>
  </div>

</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    data() {
      return {}
    },
    mounted() {
      //给ul指定新的宽度
      const ul = this.$refs.scrollList
      const li = this.$refs.item2
      const list = document.getElementsByClassName('item2')
      const size = list.length
      const liWid = 88         //每个li的 width
      const space = 48       //每个li的 padding-left
      const between = 60      //li两边的margin-left
      ul.style.width = (liWid+space) * size + 60 + 'px'
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true,
          scrollX: true
        })
      })
    },
    methods: {},
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
 .wrap
   background #fff
  .scrollList
    display flex
    padding 0 .3rem
    align-item2s center
    background #fff
    /*overflow-x auto*/
    .item2
      text-align center
      flex-shrink 0
      margin-left .48rem
      box-sizing border-box
      span
        display inline-block
        padding 0 .16rem
        line-height .6rem
        position relative
        box-sizing border-box
       .active
          &::after
            display block
            content ''
            position absolute
            background-color #b4282d
            height .04rem
            width 95%
            left 0



</style>
