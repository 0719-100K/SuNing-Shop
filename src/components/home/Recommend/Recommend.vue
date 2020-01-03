<template>
  <div class="recommend">
    <!-- 头部图片 -->
    <img class="header" src="https://image2.suning.cn/uimg/cms/img/157284769790381337.png?from=mobile" alt="">
    <!-- 推荐榜单+轮播图 -->
    <ul class="recommendList">
      <li class="recList recbg">
        <img src="https://imgservice.suning.cn/uimg1/sniss/improve/twmaAb1ape337Opbx976ug.jpg?format=_is_200w_200h_4e.webp" alt="">
        <p class="rec-top">人气榜</p>
        <p class="rec-center">人气轻薄本榜</p>
        <p class="rec-bottom">卖爆233件</p>
      </li>
      <li class="recList recListCenter">
        <div class="swiper-container swiper-no-swiping" ref="vertical">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="https://imgservice.suning.cn/uimg1/sniss/improve/GjZR9sDgSqPH6bmxRqcp5g.jpg?format=_is_200w_200h_4e.webp" alt="">
              <p class="rec-top">人气榜</p>
              <p class="rec-center">人气轻薄本榜</p>
              <p class="rec-bottom">卖爆233件</p>
            </div>
            <div class="swiper-slide">
              <img src="https://imgservice.suning.cn/uimg1/sniss/improve/5dKsnniEfDS_wm7TJbUhTA.jpg?format=_is_200w_200h_4e.webp" alt="">
              <p class="rec-top">人气榜</p>
              <p class="rec-center">人气轻薄本榜</p>
              <p class="rec-bottom">卖爆233件</p>
            </div>
            <div class="swiper-slide">
              <img src="https://image.suning.cn/uimg/b2c/qrqm/0070081242000000000123867142.jpg?format=_is_200w_200h_4e.webp" alt="">
              <p class="rec-top">人气榜</p>
              <p class="rec-center">人气轻薄本榜</p>
              <p class="rec-bottom">卖爆233件</p>
            </div>
          </div>
      </div>
      </li>
      <li class="recList recbg">
        <img src="https://image.suning.cn/uimg/b2c/qrqm/0000000000000000010597918588.jpg?format=_is_200w_200h_4e.webp" alt="">
        <p class="rec-top">人气榜</p>
        <p class="rec-center">人气轻薄本榜</p>
        <p class="rec-bottom">卖爆233件</p>
      </li>
    </ul>
    <div class="panicBuy">
      <ul class="panicUl">
        <li v-for="(li,index) in list.Lists" :key="index">
          <h3>{{li.title}}<span>{{li.listName}}</span></h3>
          <p>{{li.name}}</p>
          <div class="panImg">
            <img :src="li.picurl1" alt="">
            <img :src="li.picurl2" alt="">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/css/swiper.css'
  import {reqDesc} from '@/api'
  export default {
    data(){
      return {
        list:{},
      }
    },
    async mounted(){
      let result = await reqDesc()
      if (result.status === 1) {
        this.list = result.datas.sugGoods[2]
      }
      new Swiper(this.$refs.vertical,{
        direction: 'vertical',
        autoplay: {
          delay: 3000,//3秒切换一次
        },
        loop:true
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .recommend
    .header
      width 100%
      height 30px
    .recommendList
      padding 0 12px
      height 133px
      display flex
      justify-content space-between
      .recList
        width 113px
        height 133px
        border-radius 8px
        text-align center
        background-color #fff
        &.recbg
          background-image url('https://image2.suning.cn/uimg/cms/img/156929156220838915.png?from=mobile')
          background-position left bottom
          background-repeat no-repeat
          background-size 113px
        img   
          width 75px
          height 75px
        .rec-top
          width 50px
          height 17px
          border-radius 8px
          border 1px solid #d9a87a
          text-align center
          margin 0 auto
          color #d9a87a
          background-color #fff
        .rec-center
          color #ffffff
          font-size 13px
          line-height 16px
        .rec-bottom
          color #ffffff
          font-size 12px
          line-height 16px
      .recListCenter
        .swiper-container
          width 113px
          height 133px
          .swiper-slide
            background-image url('https://image1.suning.cn/uimg/cms/img/156929175197393382.png?from=mobile')
            background-position left bottom
            background-repeat no-repeat
            background-size 113px
    .panicBuy
      margin 12px
      background-color #ffffff
      border-radius 10px
      .panicUl
        display flex
        flex-wrap wrap
        li:nth-child(2n+1)
          border-right 1px solid #f2f2f2
        li:nth-child(3), li:nth-child(4)
          border-bottom 1px solid transparent
        li
          width 175px
          height 129px
          padding 12px 
          border-bottom 1px solid #f2f2f2
          box-sizing border-box
          h3
            font-size 14px
            color #333
            font-weight bold
            span 
              font-size 12px
              color #ab813a
              margin-left 6px
          p
            font-size 12px
            margin 2px 0 5px 0
            color #999
          .panImg
            display flex
            justify-content space-between
            img 
              width 70px 
              height 70px
</style>
