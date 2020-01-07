<template>
  <div class="footer">
    <span class='footer-item' :class="{on:$route.path==='/home'}" @click="goto('/home')">
      <span>
        <!-- <img v-if="$route.path==='/home'" class="icon" src="https://image3.suning.cn/uimg/cms/img/157543975265772267.png?from=mobile" alt=""> -->
        <img v-if="$route.path==='/home'" class="icon" src="https://image3.suning.cn/uimg/cms/img/157543974786039763.png?from=mobile" alt="">
        <img v-else class="icon" src="https://image.suning.cn/uimg/cms/img/157105696599538235.png" alt="">
      </span>
      <p :class="{high:$route.path==='/home'}">首页</p>
    </span>
    <span class='footer-item' :class="{on:$route.path==='/category'}" @click="goto('/category')">
      <span>
        <img class="icon" src="https://image2.suning.cn/uimg/cms/img/157562573743964714.png?from=mobile" alt="">
      </span>
      <p>分类</p>
    </span>
    <span class='footer-item' :class="{on:$route.path==='/mustBuy/careChoice'}" @click="goto('/mustBuy/careChoice')">
      <span>
        <img v-if="$route.path==='/mustBuy/careChoice' || $route.path==='/mustBuy/coolMachine' || $route.path==='/mustBuy/electrics'" class="icon" src="https://image.suning.cn/uimg/cms/img/157105715273415124.png" alt="">
        <img v-else class="icon" src="https://image2.suning.cn/uimg/cms/img/157543978244974042.png?from=mobile" alt="">
      </span>
      <p>必抢清单</p>
    </span>
    <span class='footer-item' :class="{on:$route.path==='/shopcart'}" @click="goto('/shopcart')">
      <span>
        <img v-if="$route.path!=='/shopcart'" class="icon" src="https://image1.suning.cn/uimg/cms/img/157543979328589256.png?from=mobile" alt="">
        <img v-else class="icon" src="https://image.suning.cn/uimg/cms/img/157105763151658248.png" alt="">
      </span>
      <p>购物车</p>
      <span class="count" v-show="totalCount>0 && token"><em>{{totalCount}}</em></span>
    </span>
    <span class='footer-item' :class="{on:$route.path==='/profile'}" @click="$router.push(token ? '/profile' : 'login')">
      <span>
        <img v-if="$route.path!=='/profile'" class="icon" src="https://image2.suning.cn/uimg/cms/img/157543980229048220.png?from=mobile" alt="">
        <img v-else class="icon" src="https://image.suning.cn/uimg/cms/img/157105768594001788.png" alt="">
      </span>
      <p>我的易购</p>
    </span>
  </div>
  
</template>

<script type="text/ecmascript-6">
  import { mapState, mapGetters } from 'vuex'
  export default {
    data(){
      return {
        count:0
      }
    },
    computed:{
      ...mapState(['token','cartGoods']),
      ...mapGetters(['totalCount'])
    },
    methods:{
      goto(path){
        if (path!==this.$route.path) {
          this.$router.push(path)
        }else{
          return
          // window.location = path
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .footer
    display flex
    position fixed
    z-index 999
    bottom 0
    left 0
    width 100%
    height 44px
    background-color #fff
    padding-top 6px
    .footer-item
      width 20%
      text-align center
      position relative
      .icon
        width 24px
        height 24px
      p
        font-size 12px
        color #666
        &.high
          color #000
          font-weight bold
      .count
        position absolute
        top -4px
        left 62%
        width 13px
        height 13px
        border-radius 50%
        background-color #d00
        line-height 13px
        text-align center
        color #fff
        font-family: Arial,Helvetica,STHeiTi,sans-serif;
</style>
