<template>
  <div class='detailContainer' >
    <div class='topNav'>
        <div class="navLeft">
          <span  @click="$router.replace('/mustBuy')" class="iconfont">&#xe642;</span> 
        </div>
        <div class='middle'>{{mustDetail.title}}</div>
        <div class="navRight"><img src="./imgs/1.png" alt=""></div>
    </div>
    <div class="mid"><img :src="mustDetail.imageUrl" alt=""></div>    
    <div class='text'>
      <p class='p1'>{{mustDetail.title}}</p>
      <p  class='p2'>{{mustDetail.desc}}</p>
    </div>
    <div class="list" v-if="mustDetail.displayJson">
      <ul>
        <li  v-for="(gd,index) in mustDetail.displayJson.product" :key="index">         
          <img :src="gd.smallImageUrl" alt="">
          <div class="zhezhao"></div> 
          <div class="price">
            <div class="text1">{{gd.text}}</div>
            <div class="price1">
              <div class='nowPrice1':class="{nowPrice:!gd.price}">{{gd.price}}</div>
              <div class='oldPrice1' :class="{oldPrice:!gd.refPrice}" >{{gd.refPrice}}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <ul class='bottom-wrap' v-show="scrolly>=0">
      <li class='l1'>
        <div class="say">说说你的想法</div>
      </li>
      <li class='l2'>
        <img src="./imgs/2.png" alt="">
        <p>175</p>
      </li>
      <li class='l3'>
        <img src="./imgs/3.png" alt="">
        <p>评论</p>
      </li>

    </ul>
  
  </div>
</template>

<script type="text/ecmascript-6">

import {mapState} from 'vuex'
import BScroll from 'better-scroll'

  export default {
    data() {
      return {
        scrolly:0,
        mustDetail1:{}
      }
    },

    props:['id'],
    
    computed: {
      ...mapState(['mustDetail'])
    },
    mounted() {
      this.$store.dispatch('getSelectDetail',this.id)
    },

    methods: {
       initScroll(){
        if (!this.homeScroll) {
          console.log('scroll');
          this.detailScroll = new BScroll('.detailContainer',{
            click:true,
            probeType:3,
            bounce:false,
            mouseWheel:true
          })
          this.detailScroll.on('scroll',({x,y})=>{
            this.scrolly = Math.abs(y)
          })
        }else{
          console.log('ref');
          this.detailScroll.refresh()
        }
      },
    },
     watch:{
      mustDetail1(){
        this.initScroll()
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .detailContainer
      background-color #fff
      width 100%
      height 100%
     .topNav
        position relative;
        height 43px;
        background #fff ;
        font-size 25px;
        border-bottom 1px solid #DCDCDC;
        color #333333;
        .navLeft
          position absolute;
          left 3px;
          top 0;   
          width 25px;
          height 40px;
          margin  14px;
          .iconfont
            display block
            font-size 18px
        .middle
          position absolute
          top 10px
          left 35%
          transform translateX(-30%)
          width 60%
          height 44px
          font-size 16px
          overflow: hidden;
          white-space: nowrap; 
          text-overflow: ellipsis; 
        .navRight
          width 25px
          height 25px
          position absolute
          right 20px
          top 5px
          img 
            width 25px
            height 25px
      .mid
        width 375px
        height 169px
        img 
          width 100%
          height 100%
      .text
        width 355px
        height 142px
        padding 10px
        margin-top 20px 
        .p1
          font-size 20px
          font-weight 700
          color black
          margin-bottom 10px
        .p2 
          border-left: 2px solid #b3b3b3;
          padding-left: 10px;
          font-size: 14px;
          color: #666;
      .list
        width 375px
        background-color #fff
        height 1400px
        ul 
          li 
            float left
            width 170px
            height 275px
            margin  0 5px 
            padding 8px
            position relative
            box-sizing border-box          
            img 
              width 170px
              height 170px
              margin-bottom 8px
            .zhezhao
              width 171px
              height 171px
              // background-color rgba(0,0,0,0.03);
              background-color rgba(0,0,0,0.1);
              position absolute
              top 8px
              left 8px 
            .price 
              width 170px
              height 50px
              .text1
                width 170px
                height 35px
                overflow: hidden;
                white-space: nowrap; 
                text-overflow: ellipsis; 
              .price1
                float left
                .nowPrice1
                  float left
                  width 60px
                  height 20px
                  color red
                  font-size 17px
                  &.nowPrice
                    float left
                    width 60px
                    height 20px
                    color red
                    font-size 17px
                .oldPrice1
                  float left
                  width 60px
                  height 20px
                  color #aeaeae
                  font-size 13px 
                  &.oldPrice
                    float left
                    width 60px
                    height 20px
                    color #aeaeae
                    font-size 13px  
      .bottom-wrap 
        width 375px
        height 50px
        border-top 1px solid rgba(0,0,0,0.1)
        position fixed
        bottom 0
        left 0
        background-color #fff
        .l1 
          width 255px
          height 50px
          padding 8px 0
          float left 
          .say
            width 240px
            height 35px
            color #cccccc
            background #f8f8f8
            margin 0 0 0 15px
            padding 0 0 0 10px
            line-height 35px           
        .l2 
          width 60px
          height 35px
          padding 8px 0
          float left
          display flex
          flex-direction column
          justify-content center
          align-items center
          img 
            width 19px
            height 18px
            // background-color red
        .l3 
          width 60px
          height 35px
          padding 8px 0
          float left
          display flex
          flex-direction column
          justify-content center
          align-items center
          img 
            width 19px
            height 18px
            // background-color red

</style>
