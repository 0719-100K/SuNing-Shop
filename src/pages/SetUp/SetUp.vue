<template>
  <div id="set">
    <div class="header">
      <div class="headerleft" @click="$router.go(-1)"><</div>
      <div class="headercenter">账户设置</div>
      <div class="headerright">...</div>
    </div>
    <div class="username">
      <img src="//image.suning.cn/uimg/cmf/cust_headpic/0000000000_01_240x240.jpg" alt="">
      <p>178******51</p>
      <p class="icon">></p>
    </div>
    <ul class="list">
      <li class="list-item">
        <p class="lil">会员码</p>
        <p class="lir">></p>
        <p class="lic">二维码</p>
      </li>
      <li class="list-item">
        <p class="lil">我的信息</p>
        <p class="lir">></p>
        <p class="lic">添加宝宝/尺码等信息</p>
      </li>
      <li class="list-item">
        <p class="lil">地址管理</p>
        <p class="lir">></p>
        <p class="lic">新增&nbsp;/&nbsp;修改地址</p>
      </li>
    </ul>
    <ul class="list-bottom">
      <li class="list-item">
        <p class="lil">账户安全</p>
        <p class="lir">></p>
        <p class="lic">修改密码&nbsp;/&nbsp;修改手机</p>
      </li>
      <li class="list-item">
        <p class="lil">增票资质</p>
        <p class="lir">></p>
        <p class="lic">个人增票认证</p>
      </li>
      <li class="list-item">
        <p class="lil">关联账号</p>
        <p class="lir">></p>
        <p class="lic">微信等</p>
      </li>
    </ul>
    <div class="logout">退出登录</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #set
    .header
      background-color #fff
      display flex
      flex-wrap nowrap
      padding 0 12px
      height 44px
      border-bottom 1px solid rgb(247, 247, 247)
      .headerleft
        font-size 30px 
        line-height 44px
        color #999
      .headercenter
        font-size 16px
        color #333
        line-height 44px
        width 225px
        margin 0 auto
        text-align center
      .headerright
        font-size 30px
        color #999
    .username
      background-color #fff
      padding-left 12px
      height 70px
      margin-bottom 10px
      box-sizing border-box
      img 
        width 45px
        height 45px
        margin 12px 10px 0 0
        float left
      p   
        float left
        max-width 279px
        font-size 14px
        color #333
        margin auto
        line-height 70px
      .icon
        float right
        font-size 20px
        color #999
        margin-right 12px
    .list, .list-bottom
      background-color #fff
      padding 0 12px
      width 100%
      box-sizing border-box
      border-bottom 1px solid rgb(247, 247, 247)
      .list-item
        width 100%
        height 45px
        line-height 45px
        font-size 14px
        .lil
          float left
          color #333
        .lir
          font-size 20px
          float right 
          color #999
          margin-right 0px
        .lic
          float right
          color #999
          position relative
          margin-right 10px
    .list
      margin-bottom 10px
    .logout
      width 345px
      height 40px
      margin 30px auto 20px
      background-color #f60
      font-size 15px
      color #fff
      text-align center
      line-height 40px
      border-radius 5px
</style>
