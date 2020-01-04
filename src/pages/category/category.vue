<template>
  <div class='categoryContainer'>
      <div class="zj_search">
         <span class="iconfont icon" @click="$router.push('/home')">&#xe642;</span> 
         <div class="search" @click="$router.replace('/search')">
           <span class="iconfont i">&#xe643;</span> 
           <div class='input'>搜索商品或店铺</div>
         </div>
      </div>
      <div class="sn-list-box">
        <div class="sn-list-nav" ref="left" v-if="category.category">
          <ul class='nav-box' ref='leftUI'>
            <li class="kindsAds" :class="{cur: index === currentIndex}" 
             @click="clickItem(index)" 
             v-for="(category,index) in category.category" 
             :key="category.title">
              <div class="before"></div>
              {{category.title}}
              <div class="after"></div>
            </li>
          </ul>
        </div>
        <img class='img1' src="//image1.suning.cn/uimg/asbs/ad/1577703779565_app_list.jpg" alt="">
        
        <div class="sn-list-con" ref="right" v-if="category.category">
          <ul class="con-box"  ref="rightUl">       
            <li v-for="(ct,index) in category.category" 
            :key="ct.title"
            >
              <div class="newRecommendList"></div>
              <hgroup class="module-title class-title">
                <div class="line"></div>
                <em>{{ct.title}}</em>
              </hgroup>
              <div class="household-recommend">
                <ul>
                  <li v-for="(c,index) in ct.detail" :key="index" @click="categorySearch(c.name)">
                    <div class="neibuLi">
                      <img :src="c.imgUrl" alt="">
                      <div class="backgroundImg"></div>
                      <em>{{c.name}}</em>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>

        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
import Search from '../search/search'
import {SAVECATENAME} from '../../vuex/mutation_type'

  export default {
    comments:{
      Search
    },

    data(){
      return{
       scrollY:0,
       tops:[]
      }
    },

   computed: {

      ...mapState(['category']),  

      currentIndex(){
        const {scrollY,tops} = this
        const index = tops.findIndex((top,index)=>scrollY>=top && scrollY<tops[index+1])
        // console.log(index, scrollY)
        if(index !== this.index && this.leftScroll){
            this.index = index
            const li = this.$refs.leftUI.children[index]
            this.leftScroll.scrollToElement(li,300)         
        }
        return index
      }
    },
   
    methods: {

      _initScroll(){
        if(!this.leftScroll){

          this.leftScroll = new BScroll(this.$refs.left,{           
            // probeType: 2,
            click:true,
          })
          this.rightScroll = new BScroll(this.$refs.right,{
             probeType: 2,
             click:true
          })
          // 绑定监听
          this.rightScroll.on('scroll',({x,y})=>{
            console.log(y,'111')
             this.scrollY = Math.abs(y)
          })
          this.rightScroll.on('scrollEnd',({x,y})=>{
            console.log(y,'hhh')
            this.scrollY = Math.abs(y)
          })

        }else{
          // 重新刷新
          this.leftScroll.refresh()
          this.rightScroll.refresh()
        }
      },
      _initTops () {
        const tops = []
        let top = 0
        tops.push(top)
        // if (this.$refs.rightUl.children.length){
          const lis = Array.from(this.$refs.rightUl.children)
            lis.forEach(li => {
              top += li.clientHeight
              tops.push(top)
            })
          this.tops = tops
      },
    
// 点击事件
    clickItem (index) {  
      // 得到top
      const top = this.tops[index]
      // 立即选中当前分类项 ===》currentIndex重新计算
      this.scrollY = top
      console.log(top, 'top')
      this.rightScroll.scrollTo(0, -top,500)
    },
// 点击跳转
   categorySearch(name){
     console.log(name)
      this.$store.commit(SAVECATENAME,name)
      this.$router.push('/search')
      
      this.$store.dispatch('getSearchList',name)
    },
  },    
    watch: {
      category() { 
        this.$nextTick(() => {
          this._initScroll()
          this._initTops()
        })
      }
    },
     mounted() {
      // 分发
        this.$store.dispatch('getCategory')

   // 如果数据已经有了, 直接做初始化的操作
        if (this.category.length>0) {
        //   console.log('mounted data')
          this._initScroll()
          this._initTops()
        }
    },
   

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .categoryContainer
    width 100%
    height 100%  
    overflow hidden 
    .zj_search
      width 100%
      height 44px
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 98;
      background-color #F4F4F4
      border-bottom 1px solid #DCDCDC
      overflow hidden
      .icon
        color #353d44
        position absolute
        top 15px
        left 3px
      .search
        position absolute
        top 7px
        left 40px
        width 86%
        height 30px
        background-color #ffffff
        border 1px solid #cccccc
        border-radius 4px 
        // float left       
        .i
          display block         
          width 10%
          height 30px
          color #cacaca
          background-size 100%
          line-height 30px
          text-align center
          font-size 18px
        .input
          width 90%
          height 30px 
          line-height 30px
          color #cacaca
          font-size 13px
          position absolute
          top 0 
          left 10%
        .searchpl
          color #cacaca
    .sn-list-box
      width 100vw
      background-color #ffffff
      margin-top 44px
      overflow hidden
      .sn-list-nav
        position fixed
        left 0
        top 44px
        height calc(100vh - 44px)
        width 87px
        z-index 50
        background-color: #f4f4f4;
        .nav-box
          width 87px
          height 650px
          .kindsAds 
            position relative
            float left 
            width 86px
            height 46px
            line-height 46px
            text-align center
            border-right: 1px solid #e9e9e9;
            border-bottom: 1px solid #e9e9e9;
            box-sizing: border-box;
            color: #666;
            background-color: #f4f4f4;
            &.cur 
              border-right-color: transparent;
              background: #FFF;
              font-size: 16px;
            .before
              position absolute
              left 0 
              bottom -1px
              width 86px
              height 1px
              background: #E9E9E9;
            .after
              position absolute
              left 0
              top 0
              height 100%
              width 4px
      .img1
        width 270px
        height 100px
        margin  10px 0 10px 97px
      .sn-list-con
        // position fixed
        box-sizing border-box
        margin 0 0 0 86px
        padding 10px
        overflow-y hidden 
        //  问题：用better-scroll要加高度===>外部包裹div要有height，内部滑动ul的height自动撑开
        height calc(100vh - 100px)
        .con-box
          width 270px 
          li
            width 100%
            height 100%
            .newRecommendList
              width 270px
            .module-title
              position relative
              width 100%
              text-align left
              margin 30px auto 20px auto
              .line
                width 100%
                position absolute
                top 10px
                left 0
                height 1px
                background-color #f2f2f2
              em 
                background-color #ffffff
                padding 0 5px 0 0
                display inline-block
                position relative
                height 12px
                line-height 12px
                font-size 12px
                vertical-align center
                font-style: normal;
                font-family: Arial,Helvetica,STHeiTi,sans-serif;
            .household-recommend
              width 270px
              overflow hidden
              ul 
                width 270px
                overflow hidden
                margin-top -15px
                li
                  float left 
                  width 90px
                  margin-top 15px
                  .neibuLi 
                    display block
                    color #353d44
                    text-decoration none 
                    width 90px
                    height 85px
                    img 
                      width 60px
                      height 60px
                      position relative
                      vertical-align middle
                      margin 0 15px 5px 15px
                    .backgroundImg
                      width: 60px;
                      height:60px;
                      position: absolute;
                      left: 0;
                      top: 0;
                      // background: url(imgs/patternless.png) no-repeat;
                      background-size: cover;
                      z-index: 3
                    em 
                      display: block;
                      white-space: nowrap;
                      font-size: 12px;
                      height: 20px;
                      line-height: 20px;
                      text-align: center;
                      text-overflow: ellipsis;
                      overflow: hidden;
                      color: #666;
                      font-weight: normal;
                      font-style: normal;




  
</style>
