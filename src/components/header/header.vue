<template>
  <div headerContainer>
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
  </div>
</template>

<script type="text/ecmascript-6">
 import BScroll from 'better-scroll'
 import {mapState} from 'vuex'

  export default {
    mounted() {
      // 页面滑动一段距离后，导航固定===》吸顶效果
      document.addEventListener('scroll',this.handleScroll)

      //  发请求
      this.$store.dispatch('getTabBar')
    },

    computed: {
      ...mapState(['items'])
    },

// 滑动
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

    methods: {
      // 点击事件
      tabNav(index){
       
        if(index === 0  && this.$route.path !=='/mustBuy/careChoice' ){
            this.selectedId = 0
            this.$router.replace('/mustBuy/careChoice') 
            // this.selectedId = index          
        }
      
        if(index === 1 && this.$route.path !=='/mustBuy/electrics' ){
          this. selectedId = 1
          this.$router.replace('/mustBuy/electrics') 
          // this.selectedId = index        
        }
        if(index=== 2 && this.$route.path !== '/mustBuy/coolMachine'){
          this. selectedId = 2
          this.$router.replace('/mustBuy/coolMachine')
          // this. selectedId = index
        }
        if(index=== 3 && this.$route.path !== '/mustBuy/supermarket'){
          this. selectedId = 3
          this.$router.replace('/mustBuy/supermarket')
          // this. selectedId = index
        }
        if(index=== 4 && this.$route.path !== '/mustBuy/closes'){
          this. selectedId = 4
          this.$router.replace('/mustBuy/closes')
          // this. selectedId = index
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
      }
    },

    destroyed () {
      window.removeEventListener('scroll', this.onScroll)
    }, 

    data () {
      return {
        selectedId:0,
        isFixed:false
      
      }
    }

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
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
          background-image url(imgs/tittle.png);
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
          width 750px
          height 58px
          background-color red
          padding 0
          margin 0
          .tabLi
            height 100%
            width 75px
            float left
            white-space nowrap
            &.active
              background #cd0031
            .liContent
              width 75px
              height 100%
              line-height 100%      
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
      
 
</style>
