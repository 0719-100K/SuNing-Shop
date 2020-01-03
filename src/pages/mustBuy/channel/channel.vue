<template>
  <div class='channelContainer'> 
     <!--头部导航  -->
      <Header/>
    <div class="floor" v-if="mustList.buyList">      
        <AppList></AppList>
        <div class="floor-bottom"  v-for="(sk,index) in mustList.buyList.goods" :key="index" >
          <div class="bottom-top">
            <div class="gl-bg">
              <img :src="sk.imageUrl" alt="">
              <i class="gl-tag">
                <span class="f28 bold" >{{sk.displayJson.productCnt}}</span>
                <span class='f28'>商品</span>
              </i>
              <p class="line-clamp-2">{{sk.title}}</p>
            </div>
          </div>
          <ul class='pic-img'>
            <li class='bottom-li' v-for="(gd,index) in sk.gds" :key="index">
                <div class='_img' >
                  <div class="zhezhao"></div>
                  <img :src="gd.pictureUrl" alt="">
                  <i class="f24">{{gd.sugGoodsName}} </i>
                </div>
                <div class='pro-price'>
                  <i class="acDec borders" style="border:none;height:14px" v-if="gd.potic">{{gd.potic}}</i>
                  <div :class="{zhezhao1:!gd.potic}"></div>
                  <i class='rPrice'>￥{{gd.price}}</i>
                </div>
            </li>
          </ul>
        </div>
    </div> 
  </div>
</template>

<script>

    import {mapState} from 'vuex'
    import {getSelect} from '../../../api/index'

	export default {

    computed: {
      ...mapState(['mustList'])

    },
    mounted() {
      this.$store.dispatch('getSelect')
      this.$store.dispatch('getTabBar')
    },
}
</script>

<style scoped lang="stylus" >
    .channelContainer
      margin-bottom 50px
      width 100%
      height 100%
      overflow-x hidden
      .floor
        width 100%
        height 2340px
        color #333333   
        padding 10px 0 0;
        background-color: rgba(0,0,0,0.03);
        font-style: normal;
        .floor-bottom
          width 343px
          height 354px
          border 1px solid transparent 
          padding 0 5px
          margin 0 0 10px 10px
          background-color #fff
          border-radius 4px
          float left 
          .bottom-top
            width 343px
            height 169px
            margin-top 5px
            .gl-bg
              position relative
              img 
                width 343px
                height 169px
              .gl-tag
                width 52px
                height 25px
                position: absolute;
                top: 5px;
                right: 15px;
                color: #fff;
                background: rgba(0,0,0,0.2);
                border-radius: 4px;
                font-size: 15px;
                text-align: center;
                line-height: 25px;
                border: 1px solid #fff;
                font-style: normal;
              .line-clamp-2
                position absolute
                bottom 10px
                left 50%
                transform translate(-50%)
                font-size 18px
                color #fff
                font-weight bold
                white-space nowrap
          .pic-img
            width 341px
            height 165px
            padding 10px 0 10px 5px
            .bottom-li
              width 110px 
              height 165px
              margin  0 2px 0 0
              box-sizing  border-box
              float left 
              ._img 
                width 115px
                height 115px
                position relative
                .zhezhao
                  width 110px
                  height 110px
                  background-color rgba(0,0,0,0.03);
                  position absolute
                  left 0
                  top 0
                img 
                  width 110px
                  height 110px
                .f24
                  display block
                  overflow: hidden;
                  white-space: nowrap; 
                  text-overflow: ellipsis;                                  
                  width 95px
                  margin 5px 0 0 10px
                  font-style: normal;
              .pro-price
                width: 100%;
                color: #a5a5a5;
                text-align: center;
                display flex
                flex-direction column
                justify-content center
                align-items center
                margin-top 20px
                font-style: normal;
                position relative
                .acDec
                  margin: 0 auto;
                  border-radius: 2px;
                  color: #fe053a;
                  padding: 3px;
                  border: 1px solid #ff2a57;
                  font-style: normal;
                
                  &.borders
                    border: 1px solid #ff2a57;
                    background: #ffedef
                    font-style: normal;
                  .rPrice
                    color #a5a5a5
                    margin  5px 0 0 0
                    width 100%
                    text-align center
                    font-style normal
                    position absolute
                    bottom 0 
                    left 0
                .zhezhao1
                  width 100%
                  height 22px
                  z-index 999
                  background-color transparent
        
            












                    
                   
               




          



 




</style>
