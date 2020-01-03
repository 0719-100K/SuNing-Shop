<template>
  <div class="recommendContainer">
    <!-- 头部 -->
    <Header/>
    <!-- 轮播图 -->
    <div class="swiper-container" ref="lunbo1">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(banner,index) in bannerList" :key="index">
          <img :src="banner.picUrl" alt="">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <!-- 导航 -->
    <div class="navContainer">
      <div class="navItem" v-for="(gate,index) in gateList" :key="index">
        <div class="imgContainer">
          <img :src="gate.picUrl" alt="">
        </div>
        <span>{{gate.shortTitle}}</span>
      </div>
    </div>
    <!-- 公告 -->
    <div class="info">
      <div class="infoLeft">
        <img src="./images/jinrong.png" alt="">
      </div>
      <div class="infoRight">
        <div class="title">
          <span>抢红包</span>
        </div>
        <div class="content">
          <span>
            您有一个198元的红包待领取 !
          </span>
        </div>
      </div>
    </div>
    <!-- user -->
    <div class="userContainer">
      <div class="userHeader">
        <div class="userAvatar">
          <img src="./images/user.png" alt="">
        </div>
        <span>Hi</span>
      </div>
      <div class="userInfo">
        <img src="./images/480.png" alt="">
      </div>
    </div>
    <!-- 金融优选 -->
    <div class="bankContainer">
      <div class="title">
        金融优选
      </div>
      <!-- 水平滑动 -->
      <div class="wrapper" ref="bank">
        <ul class="content">
          <li v-for="(bank,index) in bankList" :key="index">
            <img :src="bank.picUrl" alt="">
          </li>
        </ul>
      </div>
    </div>
    <!-- 信用生活 -->
    <div class="creditContainer">
      <div class="title">
        信用生活
      </div>
      <div class="content">
        <img src="./images/credit/credit01.png" alt="">
        <img src="./images/credit/credit02.png" alt="">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/css/swiper.css'
  import BScroll from 'better-scroll'
  import Header from '@/components/Header1/Header.vue'
  import {reqRecommendBanner,reqRecommendGate,reqRecommendBank} from '@/api'
  export default {
    data(){
      return {
        bannerList:[],
        gateList:[],
        bankList:[]
      }
    },
    async mounted(){
      const resultBanner = await reqRecommendBanner()
      if (resultBanner.status === 1) {
        this.bannerList = resultBanner.datas.returnList
      }
      const resultGate = await reqRecommendGate()
      if (resultGate.status === 1) {
        this.gateList = resultGate.datas.channelGateLists
      }
      const resultBank = await reqRecommendBank()
      if (resultBank.status === 1) {
        // this.bankList = resultBank.datas.returnList
        this.bankList = resultBank.datas.returnList
        console.log(this.bankList);
      }
      this.$nextTick(()=>{
        new Swiper(this.$refs.lunbo1,{
          loop:true,
          click:true,
          autoplay: {
            disableOnInteraction: false, //手动滑动之后不打断播放
            delay: 2000
          },
          pagination:{
            el:'.swiper-pagination',
            // type:'custom'
          }
        })
        new Swiper(this.$refs.lunbo2,{
          loop:true,
          click:true,
        })
      })
    },
    components:{
      Header
    },
    watch:{
      bankList(){
        this.$nextTick(()=>{
          new BScroll(this.$refs.bank,{
            click:true,
            scrollX:true,
            // snap: {
            //   loop: true,
            //   threshold: 0.1,
            // }
          })
        })
      }
    }
  }
    

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .recommendContainer
    background-color #fff
    .swiper-container
      width 343px
      overflow hidden
      height 120px
      margin-top 60px
      --swiper-theme-color #fff
      img 
        width 100%
        height 100%
				
			
  
    // 导航
    .navContainer
      height 206px
      padding 18px 16px 0px
      display flex
      flex-wrap wrap
      justify-content space-between
      .navItem
        width 50px
        height 69px
        margin 0 30px 25px 0
        &:nth-child(4),
        &:nth-child(8)
          margin-right 0
        .imgContainer
          width 44px
          height 44px
          margin 0 auto
          img 
            width 100%
            height 100%
        span 
          font-size 12px
          display block
          margin-top 12px
          text-align center
    // 通知
    .info
      width 343px
      height 38px
      margin 0 auto
      display flex
      .infoLeft
        width 65px
        height 16px
        img 
          width 100%
          height 100%
      .infoRight
        width 250px
        height 18px
        display flex
        .title
          width 46px
          height 16px
          text-align center
          line-height 16px
          border-radius 3px
          font-size 12px
          color red
          background #FDEBEB
          margin 0 9px 0 3px
        .content
          font-size 13px
    // user
    .userContainer
      width 343px
      height 97px
      margin 0 16px
      display flex
      .userHeader
        width 73px
        height 82px
        padding 15px 12px 0
        background #03A3F8
        border-radius 5px
        margin-right 12px
        .userAvatar
          width 46px
          height 46px
          margin 0 auto
          img 
            width 100%
            height 100%
        span
          display block
          margin-top 12px
          text-align center
          color #fff
      .userInfo
        width 234px
        height 97px
        img 
          width 100%
          height 100%   
    //金融优选
    .bankContainer
      height 159px
      margin 25px 0 0 16px
      overflow hidden
      .title
        font-size 18px
        font-weight bold
      .wrapper
        width 100%
        height 141px
        .content
          width 684px
          padding-top 15px
          display flex
          li
            width 102px
            height 126px
            margin-right 12px
            img 
              width 102px
              height 126px
    // 信用生活
    .creditContainer
      width 343px
      // height 146px
      margin 34px 16px 0px
      padding-bottom 16px
      .title
        // height 18px
        font-size 18px
        font-weight bold
        margin-bottom 15px
      .content
        width 166px
        height 114px
        display flex
        img
          width 100%
          height 100%
          margin-right 11px





          




</style>
