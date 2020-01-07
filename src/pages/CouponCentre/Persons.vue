
<template>
  <div class="personsContainer">
    <!-- 头部导航 -->
    <div class="header">
      <div class="inner">
        <div class="navLeft" @click="$router.push('/home/centre')">
            <svg t="1577958002640" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1987" width="200" height="200"><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8c-16.4 12.8-16.4 37.5 0 50.3l450.8 352.1c5.3 4.1 12.9 0.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" fill="#ffffff" p-id="1988"></path></svg>
        </div>
        <div class="navCenter">
          <span>购物券</span>
          <span>金融券</span>
        </div>
          <div class="navRight">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3Q0U3RDA3QTkxNEExMUU3QjhCN0U1M0M2MjU5QTI0NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3ODEyMzI5MjlEMDQxMUU3OUE2RkY3OTZBN0IxNUY3NiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3ODEyMzI5MTlEMDQxMUU3OUE2RkY3OTZBN0IxNUY3NiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZmE4NmE3NTQtYzM4MC01YTRkLThlYmMtNTJmZTI0NmI3NWJjIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjdDRTdEMDdBOTE0QTExRTdCOEI3RTUzQzYyNTlBMjQ1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+AwdEzwAAALZJREFUeNrs2EEKwjAQheHEhVJPbfAmbjxJb1HcFA9RN+MEZqmT7aP9Bx6Blhf4oOki1czKHuZUdjJAgAABAgQIECBAgAABAgTIwSCTp3kWzxZri+dFqttvUf7k6pnt98zxXqabQe6Wz02pm0GWwYYvpW5NLuj6t3lOvuOP56LSzQ77OjiQb6VuBnkONnxIdY/w1+qZPC0O4BZri+dS3cptPBAgQIAAAQIECBAgQIAAASI5XwEGAIMfdAI73w2lAAAAAElFTkSuQmCC" alt="">
          </div>
      </div>
    </div>
  <!-- 券分类 -->
    <div class="categoryContainer">
      <div class="inner">
        <div class="categoryList">
          <div class="categoryItem">
            <span class="active"
              >可用(0)</span>
            <svg t="1577960122136" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2791" width="200" height="200"><path d="M838.4 355.2 512 681.6c-6.4 6.4-14.4 9.6-22.4 9.6-8 0-16.8-3.2-22.4-9.6L140 355.2c-12-12-14.4-32.8-2.4-45.6 12-13.6 33.6-13.6 46.4-0.8l305.6 305.6c0 0 0 0 0.8 0l305.6-305.6c12.8-12.8 33.6-12.8 46.4 0.8C852.8 322.4 851.2 342.4 838.4 355.2z" p-id="2792" fill="#ffffff"></path></svg>
          </div>
          <div class="categoryItem" >
            <span>使用记录(0)</span>
          </div>
          <div class="categoryItem" >
            <span>过期(0)</span>
          </div>
        </div>
      </div>

    </div>
    <!-- content -->
    <div class="contentContainer">
      <div class="inner">
        <div class="backgroundImage">
          <img src="//res.suning.cn/project/mvs/RES/project/quan/dist/static/img/error_ico3.a00cd87.png" alt="">
        </div>
        <div class="firstText">暂无优惠券</div>
        <div class="twoText">您还没有此类优惠券,请到领券中心看看</div>
        <div class="threeText" @click="$router.push('/home/centre')">去领券中心</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue'
  export default {
    data() {
      return {
        
      }
    },
    // methods: {
    //   backCentre(){
		// 		this.$router.push('/home/centre')
		// 	},
    // },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
body
  background #F2F2F2
.personsContainer
  .header
    background #FF7100
    .inner
      width 95%
      height 45px
      margin 0 auto
      display flex
      justify-content space-between
      .navLeft
        display flex
        align-items center
        .icon
          width 25px
          height 25px
          line-height 25px
      .navCenter
        display flex
        align-items center
        justify-content center
        span 
          color #FF7100
          font-size 14px
          &:nth-child(1)
            width 75px
            height 30px
            line-height 30px
            text-align center
            background white
          &:nth-child(2)
            width 75px
            height 30px
            line-height 30px
            text-align center
            background #FFDABF  
      .navRight
        display flex
        img
          flex 1
          text-align right
          align-self center
          width 25px
          height 25px
  .categoryContainer
    background #FF7100
    .inner
      width 95%
      height 40px
      margin 0 auto
      .categoryList
        display flex
        .categoryItem
          width 33.333%
          color white
          font-size 14px
          line-height 40px
          text-align center
          span
            position relative
            height 20px
            line-height 20px
            padding-bottom 5px
          .icon
            position absolute
            top 55px
            width 20px
            height 20px
          .active
            padding-bottom 5px
            border-bottom 3px solid white
  .contentContainer
    .inner
      padding 100px 0 0
      display flex
      flex-direction column
      align-items center
      .backgroundImage 
        img
          width 162px
          height 162px
      .firstText 
        margin 14px 0 0
        font-size 16px
        color #333
      .twoText
        font-size 13.66px
        color #666
      .threeText
        text-align center
        width 120px
        height 36px
        line-height 36px
        background white
        border 1px solid #ccc
        border-radius 20px
        margin-top 20px
        color #666

  


</style>
