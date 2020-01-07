<template>
  <div class="footerContainer">
    <ul class="footer">
      <li class="pic">
        <img src="https://res.suning.cn/project/pdsWeb/wapV3/style/images/action-service.png?v=20190821" alt="">
      </li>
      <li class="pic">
        <img src="https://res.suning.cn/project/pdsWeb/wapV3/style/images/action-shop.png?v=20190821" alt="">
      </li>
      <li class="pic" @click="user && token ? $router.replace('/shopcart') : $router.push('/login')">
        <img src="https://res.suning.cn/project/pdsWeb/wapV3/style/images/action-cart.png?v=20190821" alt="">
        <span class="count" v-if="totalCount>0 && token">{{totalCount}}</span>
      </li>
      <li class="left">
        <p>马上抢</p>
        <p class="price">到手价￥1399</p>
      </li>
      <li class="right" @click="addGood">
        加入购物车
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState, mapGetters} from 'vuex'
  import {saveCart} from '@/utils'
  export default {
    props:['goodInfo'],
    computed:{
      ...mapState(['cartGoods','user','token']),
      ...mapGetters(['totalCount'])
    },
    methods:{
      addGood(){
        if (this.user && this.token) {
          this.$store.dispatch('setCartGood',{isAdd:true,good:this.goodInfo})
          let {cartGoods} = this
          saveCart(cartGoods)
        }else{
          this.$router.push('/login')
        }
      }
    },
    beforeDestroy(){
      let {cartGoods} = this
      saveCart(cartGoods)
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .footerContainer
    width 100%
    height 50px
    position fixed
    background-color #fff
    z-index 9
    bottom 0
    left 0
    .footer
      display flex
      .pic
        width 51px
        height 50px
        margin auto 5px
        position relative
        img 
         width 51px
         height 50px
        .count
          text-align center
          position absolute
          right 0 
          top 0
          z-index 99
          width 13px
          height 14px
          padding 0 5px
          border-radius 5px
          color #fff
          background-color #f42
      .left
        width 95px
        height 35px
        background-color red
        margin-top 8px
        border-radius 6px 1px 1px 6px
        background-color #fc0
        font-size 14px
        color #000
        text-align center
        margin-right 3px
        .price
          font-size 12px
      .right 
        width 95px
        height 35px
        margin 8px 3px 0 0
        background-color #f60
        border-radius 1px 6px 6px 1px
        font-size 14px
        color #fff
        line-height 35px
        text-align center
</style>
