<template>
  <div id="shop-cart">
    <div class="header">
      <h2>购物车</h2>
      <span v-if="totalCount>0" class="header-right" @click="set = !set">{{set ? '编辑' : '完成'}}</span>
    </div>
    <div class="content" v-if="totalCount==0 || !token">
      <div class="content-top" v-if="!token">
        <span>登陆后同步电脑与手机购物车的商品</span>
        <span class="btn" @click="$router.push('/login')">去登录</span>
      </div>
      <div class="cart-empty">
        <img src="https://oss.suning.com/vss/activity/wximg/cart/sn-cart-empty.png" alt="">
        <p class="text">购物车还是空的，快来挑选好货吧</p>
        <p class="gobuy" @click="$router.replace('/home')">去逛逛</p>
      </div>
    </div>
    <div v-else>
      <CartList :set="set"/>
    </div>
    <div class="like">
      <div class="like-header">
        <img src="//oss.suning.com/vss/activity/wximg/cart/guess-you-like.png" alt="">
      </div>
      <ul class="goods">
        <li v-for="(good,index) in goods.slice(10,20)" :key="index">
          <img  :src="good.pictureUrl" alt="">
          <p class="des">{{good.sugGoodsName}}</p>
          <div class="btns">
            <span class="dealer">自营</span>
            <span class="text" v-if="good.promotionInfo">{{good.promotionInfo}}</span>
            <span class="text" v-if="good.promotionList">{{good.promotionList[0].simple}}</span> 
          </div>
          <div class="footer">
            <span class="flag">￥</span>
            <span class="price">{{good.price}}</span>
            <span class="comments">{{good.comments}}评论</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="cart-bottom">
      <img src="https://oss.suning.com/vss/activity/wximg/cart/reach-bottom.png" alt="">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {reqGoods} from '@/api'
  import {mapState,mapGetters} from 'vuex'
  import CartList from '../CartList/CartList'
  import {saveCart} from '@/utils'
  export default {
    data(){
      return {
        goods:[],
        Goods:[],
        set:true
      }
    },
    beforeDestroy(){
      let {cartGoods} = this
      saveCart(cartGoods)
    },
    components:{
      CartList
    },
    computed:{
      ...mapState(['token','cartGoods']),
      ...mapGetters(['totalCount'])
    },
    async mounted(){
      this.Goods = this.cartGoods
      let result = await reqGoods()
      if (result.status === 1) {
        console.log(result)
        this.goods = result.datas.data.sugGoods[0].skus
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #shop-cart
    width 100%
    margin-bottom 44px
    background-color #f5f5f9
    border-bottom 1px solid rgba(0,0,0,.1)
    .header 
      width 100%
      height 44px
      text-align center
      font-size 17px
      color #222222
      line-height 44px
      background-color #fff
      h2
        display inline-block
      .header-right
        float right
        font-size 14px
        color #37f
        text-align right 
        margin-right 12px
    .content
      padding 12px
      height 300px
      .content-top
        width 351px
        height 30px
        background-color #ffe37e
        line-height 30px
        padding 0 12px
        box-sizing border-box
        margin 0 auto
        border-radius 5px
        .btn
          display block
          width 50px
          height 20px
          text-align center
          line-height 20px
          margin 5px 0
          border-radius 5px
          background-color #222
          color #ffe37e
          float right
      .cart-empty
        text-align center
        img 
          width 88px
          height 88px
          margin 60px auto 30px
        .text
          font-size 14px
          color #666
          margin-bottom 15px
        .gobuy
          width 54px
          height 24px
          border 1px solid #666
          border-radius 5px
          box-sizing border-box
          font-size 12px
          line-height 24px
          background-color #fff
          margin 0 auto
    .like
      width 100%
      .like-header
        width 204px
        height 18px
        margin 0 auto
        img 
          width 100%
          margin 0 auto
      .goods
        padding 12px
        display flex
        flex-wrap wrap
        justify-content space-between
        li
          width 171px
          height 271px
          margin-bottom 10px
          border-radius 8px
          overflow hidden
          background-color #fff
          img 
            width 171px
            height 171px
          p
            overflow hidden
            text-overflow ellipsis
            display -webkit-box
            -webkit-line-clamp 2
            -webkit-box-orient vertical
            font-size 13px
            font-weight bold
            color #333
            line-height 16px
            margin 9px 6px 0px
          .btns
            height 12px
            margin 6px 6px 12px
            font-size 12px
            color #333
            span 
              margin-right 2px
            .dealer
              width 30px 
              height 100%
              background-color #ffcc00
              padding 0px 2px
              border-radius 6px
            .text
              padding 0px 2px
              height 100%
              border-radius 6px
              background-color #fefbee
              border 1px solid #fb0
              box-sizing border-box
          .footer
            padding 0 6px
            height 16px
            .flag
              font-size 12px
              color #ff4422
              font-weight bold
            .price
              font-size 18px
              color #ff4422
              font-weight bold
              margin 0 6px 0 3px
            .comments
              font-size 12px
              color #999
    .cart-bottom
      width 210px
      height 12px
      margin 20px auto 
      img 
        width 100%
        height 100%
</style>
