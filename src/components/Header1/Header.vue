<template>
  <!-- 赚钱头部 -->
  <div class="header">
    <!-- 个性推荐 -->
    <div class="header-left" :class="{active:isShowRecommend}" @click="goto('/recommend')">
      <span>个性推荐</span>
      <div class="line" v-show="isShowRecommend"></div>
    </div>
    <!-- 财富秘籍 -->
    <div class="header-right" :class="{active:!isShowRecommend}"  @click="goto('/recommend')">
      <span>财富秘籍</span>
      <div class="line" v-show="!isShowRecommend"></div>
      <img class="hot" src="./images/hot.png" alt="">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        isShowRecommend:true
      }
    },
    methods:{
      goto(path){
        //如果点击当前项,刷新界面
        // if (path!==this.$route.path) {
        //   this.$router.replace(path)
        // }else{
        //   window.location = path  //发送一般的http请求,整个页面会刷新
        // }
        this.isShowRecommend = !this.isShowRecommend
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    
  // 头部
  .header
    display flex
    height 60px
    width 100%
    position fixed
    top 0
    left 0
    z-index 9
    background white
    padding 0 16px
    .header-left
      width 56px
      height 60px
      margin-right 20px
      text-align center
      line-height 60px
      font-size 14px
      color #666
      position relative
      .line
        width 72px
        height 4px
        background rgba(62, 168, 239,.6)
        position absolute
        top 50%
        margin-top 5px
    .header-right
      width 56px
      height 60px
      margin-right 20px
      text-align center
      line-height 60px
      font-size 14px
      color #666
      position relative
      .line
        width 72px
        height 4px
        background rgba(62, 168, 239,.6)
        position absolute
        top 50%
        margin-top 5px
      .hot
        width 16px
        height 16px
        position absolute
        right -18px
        top 16px
    .active
      width 72px
      height 60px
      font-weight bold
      font-size 18px
      color #000

    

 
</style>
