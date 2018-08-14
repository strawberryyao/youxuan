<template>
  <div class="wrap" ref="wrapper">
    <ul class="scrollList" ref="scrollList">
      <li class="item2 " :class="{'item1':index===0}" style="margin-left: 0" ref="item2"
          v-for="(item,index) in data" :key="index">
        <span class="inner-box" :class="{'active':current === index}" @click="currentIndex(index)">
           {{item.name}}
        </span>
      </li>
    </ul>
  </div>

</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        current:0,
      }
    },
    computed:{
      ...mapState(['data'])
    },
    mounted() {
      this.$nextTick(() => {
        this.$store.dispatch('getData')
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true,
          scrollX: true
        })
      })
    },
    watch:{
      data(){
        this.$nextTick(()=>{
        //  this.$store.dispatch('getData')
          //给ul指定新的宽度
          const ul = this.$refs.scrollList
          const li = this.$refs.item2
          const list = document.getElementsByClassName('item2')
         // console.log(list);
          const size = list.length
         // console.log(size);
          const liWid = 88         //每个li的 width
          const space = 48       //每个li的 padding-left
          const between = 60      //li两边的margin-left
          ul.style.width = (liWid+space) * (size+1) + 30 +'px'
          this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.wrapper, {
              click: true,
              scrollX: true
            })
          })
        })
      }
    },
    methods: {
      currentIndex(index){
        this.current = index
        console.log(index);
      }
    },

    components: {

    }
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
    box-sizing border-box !important
    /*overflow-x auto*/
    .item2
      text-align center
      flex-shrink 0
      margin-left .48rem !important
      line-height .6rem
    .item1
      margin-left 0 !important


 .inner-box
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
