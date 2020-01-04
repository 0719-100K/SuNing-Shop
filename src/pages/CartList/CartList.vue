<template>
  <div class="cartlistContainer">
    <!-- 头部 -->
    <div class="header">
      <span class="title">购物车</span>
      <span class="editor">编辑</span>
    </div>
    <!-- 主体 -->
    <div class="contentContainer">
      <div class="content">
        <!-- 商家名 -->
        <div class="shop">
          <div class="select"></div>
          <div class="shop-icon">
            <img src="./images/cshop.png" alt="">
          </div>
          <div class="shop-name">
            <span>南极人家纺旗舰店</span>
            <span> > </span>
          </div>
          <div class="juan">
            <img src="./images/juan.png" alt="">
          </div>
        </div>
        <!-- 商品 -->
        <div class="goods">
          <div class="selectContainer">
            <div class="select"></div>
          </div>
          <div class="shop-img">
            <img src="./images/shopImg.jpg" alt="">
          </div>
          <div class="detailContainer">
            <div class="shop-detail">
              <span>南极人(NanJiren)家纺 简约全棉四件套床上用品纯棉斜纹双人被套床单式...</span>
            </div>
            <div class="shop-size">
              <span>1.5m/1.8m床通用</span>
            </div>
            <div class="detail-footer">
              <div class="shop-price">
                <span>￥ 129.00</span>
              </div>
              <div class="shop-count">
                <div class="jian"> - </div>
                <div class="count">2</div>
                <div class="add"> + </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .cartlistContainer
    // 头部
    .header
      height 44px
      position relative
      background #ffffff
      .title
        font-size 17px
        color #222222
        display inline-block
        line-height 44px
        position absolute
        left 50%
        margin-left -25px
      .editor
        font-size 14px
        color #3377ff
        padding-right 12px
        line-height 44px
        position absolute
        right 0

    // 主体
    .contentContainer
      height 190px
      padding 12px 12px
      box-sizing border-box
      .content
        width 100%
        height 100%
        background #ffffff
        border-radius 6px
        // 商家
        .shop
          height 21px
          padding 12px 12px 9px 6px
          display flex
          position relative
          .select
            display inline-block
            width 18px
            height 18px
            border 1px solid #ccc
            margin-right 5px
            border-radius 50%
          .shop-icon
            width 20px
            height 20px
            margin-right 5px
            img 
              width 20px
              height 20px
          .shop-name
            font-size 13px
            color #333333
          .juan 
            width 47px
            height 15px
            position absolute
            right 12px
            top 50%
            margin-top -7px
            img 
              width 100%
              height 100%
        .goods
          width 339px
          height 129px
          .selectContainer
            width 30px
            height 90px
            position relative
            float left
            margin-left 6px
            .select
              width 18px
              height 18px
              border 1px solid #ccc
              margin-right 5px
              border-radius 50%
              position absolute
              top 50%
              margin-top -9px
          .shop-img
            width 90px
            height 90px
            float left
            margin-right 10px
            img 
              width 100%
              height 100%

          .detailContainer
            width 200px
            height 98px
            float left
            .shop-detail
              width 200px
              height 33px
              color #222
              display -webkit-box
              -webkit-box-orient vertical
              -webkit-line-clamp 2
              overflow hidden
              span 
                font-size 12px
                font-weight bold
            .shop-size
              width 130px
              heigth 16px
              font-size 12px
              background #f2f2f2
              margin-top 10px
              color #333
              overflow hidden
              white-space nowrap
              text-overflow ellipsis
            .detail-footer
              display flex
              justify-content space-between
              width 200px
              height 27px
              line-height 27px
              margin-top 15px
              .shop-price
                span
                  font-size 14px
                  font-weight 900
                  color #ff4422
              .shop-count
                width 90px
                height 27px
                display flex
                border 1px solid #f2f2f2
                border-radius 13px
                justify-content space-between
                .jian, .add
                  width 21px
                  height 21px
                  margin-top 3px
                  border-radius 50%
                  font-size 18px
                  text-align center
                  line-height 21px
                  background-color #f2f2f2

 
</style>
