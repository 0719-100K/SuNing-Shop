<template>
  <div id="searchContainer">
    <div class="readySearch" v-if="!searchList.length">
                                        <!-- 这个值是用户点击热词时传到搜索头部显示 -->
      <SearchHeader :isShow="!searchList.length" :currentHotWord="currentHotWord"></SearchHeader>
      <div class="bodyContainer">
        <div class="hotSearch">热门搜索</div>
        <div class="hotContent">
          <div class="hotItem" v-for="(hotItem,index) in hotItems" :key="index" :style="`color : ${hotItem.color}`" @click="clickHotSearch(hotItem.text)">{{hotItem.text}}</div>
        </div>
      </div>
    </div>
    <div class="hasSearched" v-else>
      <SearchHeader></SearchHeader>
      <div class="searchNav">
        <div class="tab-item" v-for="(navItem,index) in navItems" :key="index" @click="tabClick(index)" :class="{active:currentIndex === index}">{{navItem}}</div>
      </div>
      <div class="navChoice">
        <img src="../../common/images/search.png" alt="">
        <img src="../../common/images/_search.jpg" alt="">
        <span class="service">苏宁服务</span>
        <div class="brand">品牌</div>
      </div>
      <div class="goodContainer">
        <div class="goodItem" v-for="(searchItem,index) in searchList" :key="index" @click="intoGoodDetail(searchItem)">
          <div class="leftImg">
            <img :src="searchItem.pictureUrl" alt="">
          </div>
          <div class="rightInfo">
            <p class="right1">
              <span class="title"><span class="selfBus">自营</span>{{searchItem.sugGoodsName}}</span>
            </p>
            <p class="right2 info">白色 | 双卡双待 | 全网通 </p>
            <p class="right3">
              <span><strong>128GB</strong>机身内存</span>
              <span><strong>6.1英寸</strong>屏幕尺寸</span>
            </p>
            <p class="price">
              <span class="nowPrice">￥{{searchItem.price}}</span>
              <span class="prePrice" v-if="searchItem.prePrice">￥{{searchItem.prePrice}}</span>  
            
            </p>
            <p class="superBan">
              <!-- <span class="super">超级<span>品牌</span></span> -->
              <span class="bigParty" v-if="searchItem.promotionInfo">{{searchItem.promotionInfo}}</span>
            </p>
            <p class="right4">
              <span class="info">2.5+条评价</span>
              <span class="info">好评率99%</span>
            </p>
            <p class="shopName">
              <span class="info name">Apple产品苏宁自营旗舰店 </span>
              <span class="intoShop info"> 进店></span>
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {mapState} from 'vuex'
import {SORTSEARCH} from '../../vuex/mutation_type'
export default {
  computed:{
    ...mapState({
      searchList : state => state.searchList || []
    })
  },
  data() {
    return {
      currentIndex:0,
      isShow:true,
      hotItems:[
        {text:'手机',color:'rgb(51, 51, 51);'},
        {text:'小米电视',color:'rgb(51, 51, 51);'},
        {text:'取暖器',color:'#f60'},
        {text:'净水器59元',color:'rgb(51, 51, 51);'},
        {text:'茅台',color:'rgb(51, 51, 51);'},
        {text:'电视',color:'#f60'},
        {text:'海信空调',color:'#f60'},
        {text:'手机',color:'rgb(51, 51, 51);'},
        {text:'洗衣机',color:'rgb(51, 51, 51);'},
        {text:'冰箱',color:'rgb(51, 51, 51);'},
        
      ],
      navItems:[
        '综合','销量','价格','筛选'
      ],
      currentHotWord:''
    }
  },
  methods: {
    tabClick(index){
      this.currentIndex = index
      // if (index == 2) {
      //   console.log('点的是2')
      //   this.searchList.sort((a,b)=>{
      //     const a1 = a.price
      //     const a2 = a2.price

          
      //   })
      //   this.$store.commit(SORTSEARCH,)
      }
    },
    // 点击热词---将点击的词存到状态便于头部展示、发送搜索请求
    clickHotSearch(text){
      this.currentHotWord = text
      // 将请求回来的数据存到vuex中
      this.$store.dispatch('getSearchList',text)
    }
  
  // watch: {
  //   searchList(){}
  // },
}
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'
#searchContainer
  background-color #eee
  .readySearch
    background-color #fff
    .bodyContainer
      padding 20px 14px
      .hotSearch
        font-size 15px
      .hotContent
        display flex
        flex-wrap wrap
        justify-content space-between
      .hotItem
        width 26%
        padding 5px
        margin 10px 10px 0 0 
        background-color #eee
        text-align center
        border-radius 5px
        font-size 14px
        white-space nowrap

  .hasSearched
    background-color #fff
    .searchNav
      height 40px
      line-height 40px
      background #fff
      bottom-border-1px(rgba(7, 17, 27, 0.1))
      margin-bottom 1px
      .tab-item
        float left
        width: 25%
        text-align center
        font-size 14px
        color rgb(77, 85, 93)
        text-decoration none
        &.active
          border-bottom 1px solid #f60
    .navChoice 
      display flex
      justify-content space-between 
      align-items center
      padding 8px 8px
      img
        width 20%
      .service,.brand
        font-size 12px
        width 20%
        text-align center
        padding 4px 0
        background-color #eee
        border-radius 4px
  .goodContainer
    .goodItem
      display flex
      padding 10px
      p
        height 18px
        line-height 18px
      .leftImg
        img
          width 100px
          height 100px
          margin-right 10px
      .rightInfo
        width 100%
        .info
          font-size 12px
          color #999
        .right1
          height 36px
          span
            font-size 12px
            color #734c01
            overflow: hidden;    
            display: -webkit-box;
            text-overflow:ellipsis;    
            -webkit-line-clamp:2;  
            -webkit-box-orient: vertical
            &.selfBus
              display inline
              font-size 12px
              color #ff6600
              border 1px solid #ff6600
              margin-right 4px
        .right2
      
          height 18px
        .right3
          height 35px
          display flex
          font-size 12px
          margin 2px 0
          span
            // clearFix()
            display flex
            flex-direction column
            background-color #eee
            margin-right 5px
            text-align center
            font-size 13pxk
        .price
          .nowPrice
            color #ff6600
            margin 5px 
          .prePrice
            color #999
            text-decoration line-through
        .superBan
          font-size 12px
          margin-bottom 5px
          height 18px
          .super
            border 1px solid red
            color #fff
            background-color red
            span
              color red
              background-color #fff
          .bigParty
            padding 0 2px
            color #fff
            background-color #f60            
            margin-left 5px
        .shopName
          padding 2px 0 10px
          bottom-border-1px(#eee)
          .name
            display inline-block
            max-width 140px
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
            vertical-align middle
</style>