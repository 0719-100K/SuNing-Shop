<template>
<!-- 最外层容器 -->
  <div class="myContainer">
    <!-- 头部标题 -->
    <div class="header">
      <div class="title">
          <div class="titleCenter">
            <span>我的易购</span>
          </div>
          <div class="titleRight" @click="$router.push('/setup')">
            <img src="../../common/images/setting.png" alt="">
          </div>
      </div>
      <!-- 用户信息 -->
      <div class="userInfo">
        <div class="userLeft">
          <!-- 头像 -->
          <div class="leftImg">
            <img src="../../common/images/favicon.jpg" alt="">
            <span class="">去实名认证</span>
          </div>
          <!-- 手机号,权益 -->
          <div class="Phone">
              <div class="phone1">13333333333</div>
              <span class="phone2">升级权益 > </span>
            </div>
        </div>
        <!-- 会员码 -->
        <div class="userRight">
          <img src="../../common/images/setting.png" alt="">
        </div>
      </div>
      <!-- 列表 -->
      <div class="headerMsg">
        <div class="userList">
          <div class="userList1">
            <span>0</span>
            <div>优惠券</div>
          </div>
          <div class="userList1">
            <span>0</span>
            <div>领云钻</div>
          </div>
          <div class="userList1">
            <span>0</span>
            <div>足迹</div>
          </div>
          <div class="userList1">
            <span>0</span>
            <div>我的关注</div>
          </div>
        </div>
      </div> 
      <!-- vip -->
       <div class="footer">
        <div class="footerImg">
          <img src="../../common/images/vip.png" alt=""> 
        </div>
        <div class="footerText">
          <span>【免费】您可领一张运费券</span>
          <span>立即领取 > </span>
        </div>
      
      </div> 
    </div> 
    <div class="order">
      <div class="myOrder">
        <strong>我的订单</strong>
        <span>查看全部
          <img src="../../common/images/profile/next.png" alt="">
        </span>
      </div>
      <div class="orderDetail" >
        <div class="detail1"  v-for="(order) in orderLists" :key="order.id">
          <img :src="order.url" alt="">
          <p>{{order.text}}</p>
        </div>
        
      </div>
    </div>
    <div class="utils">
      <div class="title">必备工具</div>
      <div class="utilDetail">
        <div class="detail1" v-for="(utilItem) in utilsLists" :key="utilItem.id">
          <img :src="utilItem.url" alt="">
          <p>{{utilItem.text}}</p>
        </div>
      </div>
    </div>

    <div class="goodRecommend">
      <img src="../../common/images/profile/guessTitle-icon.png" alt="">
      <span>好货推荐</span>
      <img src="../../common/images/profile/guessTitle-icon.png" alt="" class="right">
    </div>
    <ul class="recommendList">
      <li class="recommendItem" v-for="(like,index) in guessLike">
        <img :src="like.pictureUrl" alt="" class="productImg">
        <p>{{like.sugGoodsName}}</p>
        <p class="proInfo">
          <span class="price">￥{{like.price}}</span>
          <img :src="like.ggUrl" alt="" v-show="like.ggUrl">
        </p>
      </li>
      
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapState } from 'vuex'
  export default {
    computed : {
      ...mapState(['guessLike'])
    },
    mounted() {
      
      this.$store.dispatch('getGuessLike')
    },
    data() {
      return {
        orderLists:[
          {id:1,text:'待支付',url:require('../../common/images/profile/order-icon01.png')},
          {id:2,text:'待发货',url:require('../../common/images/profile/order-icon02.png')},
          {id:3,text:'评价有礼',url:require('../../common/images/profile/order-icon03.png')},
          {id:4,text:'退还/售后',url:require('../../common/images/profile/order-icon04.png')},
          {id:5,text:'常购清单',url:require('../../common/images/profile/order-icon05.png')},
        ],
        utilsLists:[
          {id:1,text:'红包',url:require('../../common/images/profile/1.png')},
          {id:2,text:'店铺关注',url:require('../../common/images/profile/2.png')},
          {id:3,text:'足迹',url:require('../../common/images/profile/157136450994431031.png')},
          {id:4,text:'客户服务',url:require('../../common/images/profile/157250878626080332.png')},
          {id:5,text:'必抢清单',url:require('../../common/images/profile/5.png')},
          {id:6,text:'拼购',url:require('../../common/images/profile/6.png')},
          {id:7,text:'校园VIP',url:require('../../common/images/profile/7.png')},
          {id:8,text:'我的试用',url:require('../../common/images/profile/8.png')},
          
        ]
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .myContainer
    width 100%
    height 100%
    background-color #eee
    .header
      position relative
      background #FFDB47
      width 100%
      .title
        width 375px
        position relative
        .titleCenter
          padding 9px 0 0
          width 375px
          height 27px
          font-size 18px
          font-weight bold
          text-align center      
        .titleRight
          position absolute
          float right
          width 21px
          height 21px
          top 9px
          right 21px
          img
            width 21px
            height 21px
      .userInfo
        position relative
        padding 20px 21px 0
        display flex
        justify-content space-between
        .userLeft
          display flex
          .leftImg
            img
              width 60px
              height 60px
              background-color white
              border-radius 50%
            span
              position absolute
              font-size 12px
              background #ffeac3
              border-radius 10px
              padding 0 5px 0 3px 
              text-align center
              left 21px
              top 70px 
          .Phone
            width 76px
            height 60px
            margin-left 15px
            float left
            .phone1
              font-size 14px
              color #222
              max-width 100px
              font-weight 600
              overflow hidden
              text-overflow ellipsis
              white-space nowrap 
              margin-bottom 8px
              margin-top 5px
            .phone2
              padding 0 6px
              border-radius 10px
              background #e1bb23
              color white
              font-size 12px
        .userRight
          img
            width 60px
            height 60px
      .headerMsg
        width 100%
        .userList
          display flex
          justify-content space-around
          align-items center
          width 100%
          padding 20px 0
          .userList1
            position relative
            display flex
            flex-direction column
            align-items  center
            width 25% 
            span
              font-size 15px
            div
              font-size 13px
              margin-top 10px
              white-space nowrap         
      .footer
        box-sizing border-box
        position absolute
        width 94%
        left 3%
        bottom -45px
        border-radius 10px
        background white
        line-height 45px
        display flex
        align-items center
        font-size 12px
        padding 7px 12px 7px 10px
        .footerImg
          width 45px
          height 30px
          img 
            width 45px
            height 30px
        .footerText
          width 100% 
          display flex
          justify-content space-between
          font-size 12px
    .order
      width 94%
      position relative
      left 3%
      box-sizing border-box
      background-color #fff
      margin 55px 0 10px 0px
      padding 12px
      border-radius 10px
      .myOrder
        display flex
        justify-content space-between
        margin 5px 0
        strong
          font-weight 700
          font-size 14px
        span
          font-size 12px
          img
            width 12px
            vertical-align middle
      .orderDetail
        display flex
        .detail1
          width 20%
          text-align center
          margin 10px 0
          img
            width 30px
            height 30px
            margin-bottom 10px
    .utils
      width 94%
      position relative
      left 3%
      box-sizing border-box
      background-color #fff
      margin 5px 0 
      padding 12px
      border-radius 10px
      .title 
        font-size 14px
        font-weight 700
        margin 5px 0
      .utilDetail
        display flex
        flex-wrap wrap
        margin-bottom 5px
        .detail1
          width 25%
          text-align center
          margin-top 12px
          img
            width 30px
            height 30px
            margin-bottom 10px 
    .goodRecommend
      padding 12px 0
      text-align center
      img
        height 6px
        &.right
          transform rotate(180deg)
      span 
        padding 0 12px
        font-weight 700
        font-size 15px
    .recommendList
      width 94%
      position relative
      left 3%
      top 10px
      bottom 10px
      display flex
      flex-wrap wrap
      justify-content space-between
      .recommendItem
        width 48%
        border-radius 10px
        background-color #fff
        margin-bottom 10px
        .productImg
          width 100%
          border-radius 10px
        p
          font-size 13px
          font-weight 700
          margin 10px
          line-height 16px
          overflow: hidden   
          display: -webkit-box;
          text-overflow:ellipsis;    
          -webkit-line-clamp:2; 
          -webkit-box-orient: vertical
          &.proInfo
            display flex
            justify-content space-between
            align-items center
            .price
              font-size 16px
              font-weight 700
              color rgb(255, 68, 34)
            img
              width 22px
              
</style>
