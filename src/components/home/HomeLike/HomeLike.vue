<template>
  <div class="likeContainer">
    <div class="header">
      <img src="https://image3.suning.cn/uimg/cms/img/154518371251022769.png?format=_is_1242w_100h.webp" alt="">
    </div>
    <ul class="goods">
      <li v-for="(good,index) in goods" :key="index">
        <img :src="good.pictureUrl" alt="">
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
    <img class="footImg" src="https://res.suning.cn/project/cmsWeb/suning/wap/v7/images/snlogo.png?from=mobile" alt="">
  </div>
</template>

<script type="text/ecmascript-6">
  import {reqGoods,reqGoodInfo} from '@/api'
  export default {
    data(){
      return {
        goods:[],
        info:{}
      }
    },
    async mounted(){
      let result = await reqGoods()
      if (result.status === 1) {
        this.goods = result.datas.data.sugGoods[0].skus
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .likeContainer
    .header 
      img 
        height 30px
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
    .footImg
      width 100%
</style>
