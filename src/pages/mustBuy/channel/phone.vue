<template>
  <div class='telContainer'>
    <!-- <Header/> -->
    <div class='topNav'>
        <div class="navLeft">
          <span  @click="$router.replace('/home')" class="iconfont">&#xe642;</span> 
        </div>
        <div class="navRight"></div>
    </div>
    <div class="tabNav" ref="tabNav" :class="{fixed:isFixed}">
        <ul class="content">
          <li class='tabLi' v-for="(item,index) in items.data" :key="index" 
          :class="{active:selectedId === index}" 
          @click="tabNav(index)">
            <div class='liContent'>
              <img :src="item.dbExtInfo" alt="">
              <i>{{item.enrollCateName}}</i>
            </div>
          </li>
        </ul>
    </div> 
    <div class="margin"></div>
    <div class='phoneContainer'>
      <a href="//c.m.suning.com/bcdetail.html?contentId=5221687499&itemType=bq" class="app-list"
       v-for="(li,index) in phonelist.list" :key="index"
      >
        <div class="f34">
          <span>{{li.title}}</span>
        </div>
        <ul class="pic-img" >
          <li v-for=" (price,index) in li.priceData" :key="index">
            <div class="zhezhao"></div>
            <img :src="price.imageUrl" alt="">
            <div class='pro-price'>
              <i class="acDec borders" v-if="price.jianjia">每满{{price.jianjia}}减{{price.jiage}}</i>
              <div :class="{zhezhao1:!price.jianjia}"></div>
              <i class="rPrice">￥{{price.price}}</i>
            </div>
          </li>
        </ul>
      </a>   
    </div>


  </div>
</template>

<script type="text/ecmascript-6">
    import {mapState} from 'vuex'
    import BScroll from 'better-scroll'
      export default {
        computed: {
          ...mapState(['phonelist']),
          ...mapState(['items'])
        },
         watch: {
            items(){
              this.$nextTick(()=>{
                //  导航左右滑动
                new BScroll(this.$refs.tabNav,{
                  scrollX: true,
                  click: true
                })
              })
            },
        },
        mounted() {
          this.$store.dispatch('getCoolMachine')
          console.log(this.data)
             // 页面滑动一段距离后，导航固定===》吸顶效果
          document.addEventListener('scroll',this.handleScroll)
          // this.$nextTick(()=>{
          //   let offsetTop = document.querySelector('.tabNav').offsetTop
          // })

          //  发请求
          this.$store.dispatch('getTabBar')
        },
        methods: {
          // 点击事件
          tabNav(index){
            if(index === 0  && this.$route.path !=='/mustBuy/careChoice' ){
            // this.selectedId = 0
            this.$router.replace('/mustBuy/careChoice') 
            this.selectedId = index          
        }     
        if(index === 1 && this.$route.path !=='/mustBuy/electrics' ){
          // this. selectedId = 1
          this.$router.replace('/mustBuy/electrics') 
          this.selectedId = index        
        }
        if(index=== 2 && this.$route.path !== '/mustBuy/coolMachine'){
          // this. selectedId = 2
          this.$router.replace('/mustBuy/coolMachine')
          this. selectedId = index
        }
            this. selectedId = index
          },

          // 吸顶效果
          handleScroll(){
            let  scrollTop = window.pageYOffset || 
            document.documentElement.scrollTop ||
            document.body.scrollTop;
            // let offsetTop = document.querySelector('.tabNav').offsetTop
              if (scrollTop > 100) {
              this.isFixed = true
              } else {
              this.isFixed = false
              }
          },

        },
        destroyed () {
          window.removeEventListener('scroll', this.handleScroll)
        }, 

        data () {
          return {
            selectedId: 2,
            isFixed:false
          
          }
        },

   }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    .telContainer
      overflow-x hidden
      height 100%
      width 100%
      margin-bottom 50px
      background-color rgba(0,0,0,0.02);
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
            font-size 22px
        .navRight
          color #fff;
          width 255px
          height 44px
          margin 0 auto;
          background-image url(./imgs/tittle.png);
          background-repeat no-repeat;
          background-size 75px 20px;
          background-position center;
          z-index 10;
      .tabNav
        height 58px
        background-color red
        position relative
        padding-right 65px
        &.fixed
          position fixed
          z-index 999
          top 0
          left 0
        ul 
          width:750px;
          height: 58px;
          background-color red
          padding: 0;
          margin: 0;
          .tabLi
            height: 100%;
            width 75px;
            float left
            white-space: nowrap;
            &.active
              background: #cd0031;
            .liContent
              width 75px;
              height 100%;         
              text-align center
              img 
                width 25px
                height 25px
                margin 8px 0 
                font-size 15px
                vertical-align middle
                text-align center
              i  
                display flex;
                align-items center;
                justify-content center;
                color: #fff;
                font-size 15px;
                vertical-align middle
                text-align center
                font-style: normal;
      .margin
        margin-top 10px
        background-color rgba(0,0,0,0.02);
      .phoneContainer
        background-color rgba(0,0,0,0.02);
        width 100%
        margin 1px 0 0 
        font-style: normal;
        .app-list
          display block
          width 343px
          height auto 
          margin 0 0 10px 10px
          padding 0 5px
          border 1px solid transparent
          background-color #ffffff
          border-radius 4px
          position relative
          z-index 55
          overflow hidden
          font-style: normal;
          .f34
            margin-bottom 5px
            padding-top 10px
            font-size 16px
            font-style: normal;
            span 
              font-weight 700
              font-family 'Arial, Helvetica, STHeiTi, sans-serif' 
              color black
              font-style: normal; 
          .pic-img
            width 345px
            padding 10px 0 10px 2px
            overflow hidden
            li
              position relative
              float left
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
              width 110px
              margin 0 5px 0 0
              .zhezhao
                width 110px
                height 110px
                background-color rgba(0,0,0,0.02);
                content ''
                position absolute
                top 0
                left 0
              img 
                width 110px
                height 110px
              .pro-price
                width 110px
                margin-top 5px
                color #a5a5a5
                text-align center
                display flex
                flex-direction column
                justify-content center
                align-items center
                .acDec
                  position: relative;
                  margin: 0 auto;
                  border-radius: 2px;
                  color: #fe053a;
                  padding: 3px;
                  border: 1px solid #ff2a57;
                  font-style: normal;
                .borders
                  border: 1px solid #ff2a57;
                  background: #ffedef
                  font-style: normal;
                .rPrice
                  color #a5a5a5
                  margin  5px 0 0 0
                  width 100%
                  text-align center
                  font-style: normal
                .zhezhao1
                  width 100%
                  height 22px
                  z-index 999
                  background-color transparent
</style>
