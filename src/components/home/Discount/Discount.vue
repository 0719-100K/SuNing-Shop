<template>
  <div>
    <!-- 限时抢购，大聚会等 -->
    <div class="panicBuy">
      <ul class="panicUl" v-if="datainfo.length>0">
        <li v-for="(panic,index) in datainfo[1].panic" :key="index">
          <h3>{{panic.title}}</h3>
          <p>{{panic.name}}</p>
          <div class="panic-left">
            <img :src="panic.picurl1" alt="">
            <p>{{panic.price1}}</p>
          </div>
          <div class="panic-right">
            <img :src="panic.picurl2" alt="">
            <p>{{panic.price2}}</p>
          </div>
        </li>
      </ul>
      <ul class="recommendContainer">
        <li class="recommend">
          <h3>为您推荐</h3>
          <p>精选频道</p>
        </li>
        <li class="recommendLi">
          <img src="https://image2.suning.cn/uimg/b2c/qrqm/0070171429000000011104925540_200x200.jpg?ver=2000&from=mobile" alt="">
          <p>苏宁国际</p>
        </li>
        <li class="recommendLi">
          <img src="https://image3.suning.cn/uimg/b2c/qrqm/0010136890000000010987304236_200x200.jpg?ver=2001&from=mobile" alt="">
          <p>苏宁Outlets</p>
        </li>
        <li class="recommendLi">
          <img src="https://image3.suning.cn/uimg/cms/img/157745111069187746.gif" alt="">
          <p>新品首发</p>
        </li>
        <li class="recommendLi">
          <img src="https://image2.suning.cn/uimg/cms/img/157743284974979601.jpg?from=mobile" alt="">
          <p>0元试用</p>
        </li>
      </ul>
      <div class="footer">
        <img src="https://image1.suning.cn/uimg/cms/img/157164888626937126.png" alt="">
        <div class="swiper-container swiper-no-swiping" ref="desc">
          <div class="swiper-wrapper" v-if="datainfo.length>0">
            <div class="swiper-slide" v-for="(item,index) in datainfo[0].skus" :key="index">
              <span class="btn">{{item.label}}</span>
              <span class="desc">{{item.title}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bigImg">
      <img src="https://image2.suning.cn/uimg/cms/img/157745165528397702.gif" alt="">
    </div>
    <div class="imgList">
      <img src="https://image3.suning.cn/uimg/cms/img/157746344636720817.png?from=mobile" alt="">
      <img src="https://image2.suning.cn/uimg/cms/img/157746343447023271.png?from=mobile" alt="">
      <img src="https://image1.suning.cn/uimg/cms/img/157746345335684346.png?from=mobile" alt="">
      <img src="https://image1.suning.cn/uimg/cms/img/157746346100366353.png?from=mobile" alt="">
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
        datainfo:{}
      }
    },
    async mounted(){
      let result = await reqDesc()
      if (result.status === 1) {
        this.datainfo = result.datas.sugGoods
      }
      this.$nextTick(()=>{
        new Swiper(this.$refs.desc,{
          direction: 'vertical',
          autoplay: {
            delay: 3000,//3秒切换一次
          },
          loop:true
        })
      })
      
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .panicBuy
    width 350px
    background-color #ffffff
    border-radius 10px
    margin 12px auto 
    .panicUl
      display flex
      flex-wrap wrap
      li:nth-child(2n+1)
        border-right 1px solid #f2f2f2
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
        p
          font-size 12px
          margin 2px 0 5px 0
          color #999
        .panic-left   
          width 60px
          float left
          img 
            width 60px 
            height 60px
          p
            font-size 12px
            color rgb(255, 85, 0)
            text-align center
        .panic-right   
          width 60px
          float right
          img 
            width 60px 
            height 60px
          p
            font-size 12px
            color rgb(255, 85, 0)
            text-align center
    .recommendContainer
      width 100%
      height 74px
      padding-top 12px
      border-bottom 1px solid #f2f2f2
      .recommend
        width 86px
        height 74px
        float left
        h3
          font-size 16px
          color #444
          margin-left 12px
          margin-top 20px
        p
          font-size 12px
          color #999
          margin-left 12px
      .recommendLi
        width 60px
        height 74px
        display inline-block
        margin-left 5px
        img
          width 50px
          height 50px
        p
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
    .footer
      height 33px
      width 100%
      img 
        width 56px
        height 16px
        margin 7px 9px
      .swiper-container
        float right
        width 265px
        height 33px
        .swiper-wrapper
          .swiper-slide
            width 100%
            height 33px
            line-height 33px
            span 
              vertical-align middle
              font-size 12px
            .btn
              width 34px
              height 12px
              padding 0 5px
              color #222222
              border-radius 6px
              background-color #ffcc00
            .desc
              display inline-block
              width 225px
              height 33px
              color #333333
              margin-left 5px
              overflow hidden
              white-space nowrap
              text-overflow ellipsis
  .bigImg
    width 100%
    img 
      width 100%
      height 100%     
  .imgList
    display flex
    flex-wrap wrap
    width 100%
    img 
      width 50%
</style>
