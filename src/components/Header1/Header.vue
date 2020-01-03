<template>
  <!-- 赚钱头部 -->
  <div class="header">
    <!-- 个性推荐 -->
    <div class="header-left" :class="{active:$route.path === '/recommend'}" @click="goto('/recommend')">
      <span>个性推荐</span>
      <div class="line" v-show="$route.path === '/recommend'"></div>
    </div>
    <!-- 财富秘籍 -->
    <div class="header-right" :class="{active:$route.path === '/wealth'}"  @click="goto('/wealth')">
      <span>财富秘籍</span>
      <div class="line" v-show="$route.path === '/wealth'"></div>
      <img class="hot" src="./images/hot.png" alt="">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods:{
      goto(path){
        //如果点击当前项,刷新界面
        if (path!==this.$route.path) {
          this.$router.replace(path)
        }else{
          window.location = path  //发送一般的http请求,整个页面会刷新
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
    
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
      header()
      position relative
      .line
        width 72px
        height 4px
        background rgba(62, 168, 239,.6)
        position absolute
        top 50%
        margin-top 5px
    .header-right
      header()
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
