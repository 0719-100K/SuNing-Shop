<template>
  <div class="cartlistContainer">
    <!-- 主体 -->
    <div class="contentContainer" v-for="(item,index) in cartGoods" :key="item.id" @click="$router.push(`/home/gooddetail/${item.id}`)">
      <div class="content">
        <!-- 商家名 -->
        <div class="shop">
          <div class="select" @click.stop="isBg(index)" :class={active:item.active}>✔</div>
          <div class="shop-icon">
            <img src="./images/cshop.png" alt="">
          </div>
          <div class="shop-name">
            <span>苏宁自营官方店</span>
            <span> > </span>
          </div>
          <div class="juan">
            <img src="./images/juan.png" alt="">
          </div>
        </div>
        <!-- 商品 -->
        <div class="goods">
          <div class="selectContainer">
            <div class="select" @click.stop="isBg(index)" :class={active:item.active}>✔</div>
          </div>
          <div class="shop-img">
            <img :src="item.pictureUrl" alt="">
          </div>
          <div class="detailContainer">
            <div class="shop-detail">
              <span>{{item.sugGoodsName}}</span>
            </div>
            <div class="shop-size">
              <span>1.5m/1.8m床通用</span>
            </div>
            <div class="detail-footer">
              <div class="shop-price">
                <span>￥ {{item.price}}</span>
              </div>
              <div class="shop-count">
                <div class="jian" @click.stop="addOrReduce(false,item)"> - </div>
                <div class="count">{{item.count}}</div>
                <div class="add" @click.stop="addOrReduce(true,item)"> + </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-left">
        <div :class="num*1 === cartGoods.length? 'select active' : 'select'" @click.stop="settingAll">✔</div>
        <div class="all">全部</div>
      </div>
      <div class="footer-center">{{set ? `合计：￥${totalMoney}` : ''}}</div>
      <div class="footer-right" @click.stop="clearCheck">{{set ? `去结算(${all})` : '删除'}}</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState,mapGetters} from 'vuex'
  import {CLEAR_CHECK} from '@/vuex/mutation_type'
  import {saveCart} from '@/utils'
  export default {
    props:['set'],
    computed:{
      ...mapState(['cartGoods']),
      ...mapGetters(['totalMoney','totalCount']),
      num(){
        return this.cartGoods.filter((item)=>{
          return item.active === true
        }).length
      },
      all(){
        let cart = this.cartGoods.filter((item)=>{
          return item.active === true
        })
        return cart.reduce((pre, good) => pre + good.count, 0) 
      }
    },
    beforeDestroy(){
      this.$store.dispatch('clearGoodDetail1')
    },
    beforeDestroy(){
      let {cartGoods} = this
      saveCart(cartGoods)
    },
    methods:{
      addOrReduce(isAdd,good){
        this.$store.dispatch('setCartGood',{isAdd,good})
        let {cartGoods} = this
        saveCart(cartGoods)
      },
      isBg(index){
        this.$store.dispatch('setActive',index)
        let {cartGoods} = this
        saveCart(cartGoods)
      },
      settingAll(){
        this.$store.dispatch('setAll')
        let {cartGoods} = this
        saveCart(cartGoods)
      },
      clearCheck(){
        if (!this.set) {
          console.log('aaa');
          this.$store.commit(CLEAR_CHECK)
          let {cartGoods} = this
          saveCart(cartGoods)
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .cartlistContainer
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
            line-height 18px
            text-align center
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
              line-height 18px
              text-align center
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
      
    .footer
      padding 0 12px
      width 100%
      height 37px
      line-height 37px
      background-color #ffffff
      position fixed
      bottom 50px
      left 0
      display flex
      .footer-left
        width 60px
        display flex
        .select
          line-height 18px
          text-align center
          width 18px
          height 18px
          border 1px solid #ccc
          margin-right 5px
          margin-top 8px
          border-radius 50% 
        .all
          font-size 14px
          color #000
      .footer-center
        width 190px
        padding-right 4px
        font-size 14px
        font-weight bold
        text-align right
        color red
      .footer-right
        width 99px
        height 33px
        margin-top 2px
        background-color #fc0
        border-radius 5px
        text-align center
        line-height 33px
        font-size 14px
        color #222
    .active
        background-color #FFCC00 
        color #fff
</style>
