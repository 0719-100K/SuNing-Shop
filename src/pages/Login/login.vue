<template>
  <div class="loginContainer">
    <!-- 头部 -->
    <div class="header">
      <div class="header-nav">
        <div class="nav-left" v-show="!isPwdLogin">
          <a href="#">联系客服</a>
        </div>
        <div class="line" v-show="!isPwdLogin"></div>
        <div class="nav-right">
          <a href="#">{{isPwdLogin ? '联系客服' : '企业注册'}}</a>
        </div>
      </div>
    </div>
    <!-- 主体 -->
    <div class="content">
      <h2>欢迎登陆苏宁易购</h2>

      <!-- 清除按钮 -->
      <div class="clean" v-show="phone.length > 0" @click="clean">
        <img src="./images/icon_close.png" alt="">
      </div>

      <!-- 验证码登录 -->
      <input v-model="phone" type="text" placeholder="请输入手机号"  maxlength="11" v-show="!isPwdLogin">
      <div class="yanzheng" v-show="!isPwdLogin">
        <!-- <button :disabled="!isRightPhone || count>0" :class="{'yzm-active':phone.length === 11}" @click.prevent="sendCode()"> -->
        <button :disabled="count>0" :class="{'yzm-active':phone.length === 11}" @click.prevent="sendCode">
          {{count > 0 ? count + 's' : '获取验证码'}}
        </button>
        <label class="label" for="yzmCode">
          <span :class="{active:isShowHigh && yzmCode.length === 0}" @click="showHigh()">{{yzmCode.slice(0,1)}}</span>
          <span :class="yzmCode.length === 1?'active':''">{{yzmCode.slice(1,2)}}</span>
          <span :class="yzmCode.length === 2?'active':''">{{yzmCode.slice(2,3)}}</span>
          <span :class="yzmCode.length === 3?'active':''">{{yzmCode.slice(3,4)}}</span>
        </label>
        <input id="yzmCode" v-model.trim="yzmCode" type="text" maxlength="4">
      </div>

      <!-- 账号密码登录 -->
      <input v-model="name" type="text" placeholder="请输入用户名" v-show="isPwdLogin" >
      <div class="pwd-login" v-show="isPwdLogin" >
        <input :type="isShowPwd ? 'text' : 'password' " placeholder="请输入密码" v-model="pwd">
        <div class="eye">
          <img v-show="isShowPwd" src="./images/eye_open.png" alt="" @click="isShowPwd = !isShowPwd">
          <img v-show="!isShowPwd" src="./images/eye_close.png" alt="" @click="isShowPwd = !isShowPwd">
        </div>
        <a href="#" class="wj-pwd">忘记密码</a>
      </div>

      <!-- 登录按钮 -->
      <div class="login" >
        <a class="phone-login" href="#" @click="login">登录</a>
        <span class="select-login" href="#" @click="showPwdLogin">{{isPwdLogin ? '验证码登录' : '账号密码登录'}}</span>
      </div>

      
    </div>
    <!-- 底部 -->
    <div class="footer">
      <p class="other">其他登录方式</p>
      <div class="icons">
        <img src="./images/icon_qq.png" alt="">
        <img src="./images/icon_epp.png" alt="">
        <img src="./images/icon_k.png" alt="">
      </div>
      <p class="agree">
        <span>我同意</span>
        <a href="#">《苏宁易购会员章程》</a>
        <a href="#">《易付宝协议》</a>
      </p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {MessageBox,Toast} from 'mint-ui'
  import {reqSendCode,reqSmsLogin,reqTextLogin} from '@/api'
  export default {
    data(){
      return {
        isPwdLogin:false,   //是否是密码登录
        isShowHigh:false,   //是否显示高亮
        isShowPwd:false,    //是否展示密码
        count:0,      //验证码请求时间

        phone:'',     //获取手机号
        yzmCode:'',   //获取验证码
        name:'',      //获取用户名
        pwd:''        //获取密码
      }
    },
    computed:{
      

      //input框中提示语
      placeholder(){
        if (this.isPwdLogin) {
          return '请输入手机号/用户名/邮箱'
        }else{
          return '请输入手机号'
        }
      }
    },
    methods:{
      // // 是否是一个正确的手机号
      // isRightPhone () {
      //   return /^1\d{10}$/.test(this.phone)
      // },
      // 展示密码登录
      showPwdLogin(){
        this.isPwdLogin = !this.isPwdLogin
      },
      // 展示高亮
      showHigh(){
        this.isShowHigh = true
      },
      // 清除输入框
      clean(){
        this.phone = ''
      },
      // 获取验证码
      async sendCode(){
        if (!this.phone) {
          Toast('请输入手机号!',{
            className:'toast'
          })
        }else if(this.phone.length < 11){
          Toast('格式不正确,请您输入正确的手机号!',{
            className:'toast'
          })
          return 
        }else {
          this.count = 60
          this.timeId = setInterval(() => {
            this.count--
            if (this.count <= 0) {
              clearInterval(this.timeId)
            }
          }, 1000)
          const result = await reqSendCode(this.phone)
          if (result.code === 1) {
            Toast('验证码短信已发送')
          }else{
            this.count = 0
            MessageBox('提示',result.msg || '发送失败')
          }
        }
        
      },
      // 登录
      async login(){
        const {isPwdLogin,phone,yzmCode,name,pwd} = this
        console.log(this);
        let result
        if (isPwdLogin) {
          console.log('11111111111');
          result = await reqTextLogin(name,pwd)
          console.log(result)
          if (result.status === 1 ) {
            const user = result.data.users
            // 将user保存到vuex的state
            this.$store.dispatch('saveUser',user)
            this.$router.replace('/profile')
          }else{
            MessageBox('提示',result.errMsg)
          }
        }else{
          result = await reqSmsLogin(phone,yzmCode)
          if (result.code === 1 ) {
            // 将user保存到vuex的state
            const user = result.data
            this.$store.dispatch('saveUser',user)
            this.$router.replace('/profile')
          }else{
            MessageBox('提示',result.msg)
          }
        }
        this.phone=''
        this.yzmCode=''
        this.name=''
        this.pwd=''
        
      }
    }
    
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .loginContainer
    width 100%
    height 100%
    background-color #fff
    overflow hidden
    // 头部
    .header
      height 37px
      margin 7px 12px 0
      position relative
      .header-nav
        width 124px
        height 30px
        position absolute
        right 0
        top 50%
        margin-top -15px
        display flex
        justify-content space-between
        div
          width 48px
          height 30px
          line-height 30px
          text-align center
          a
            color #000
        .nav-right
          position absolute
          right 0
          
        .line
          width 1px
          height 18px
          position absolute
          right 50%
          top 50%
          margin-top -9px
          background #EEEEEE
    // 主体
    .content
      height 274px
      margin-top 28px
      padding 0 37.5px
      position relative
      h2
        font-size 18px
        color #222222
      input
        width 100%
        height 45px
        margin-top 30px
        font-size 15px
        color #000
        border-bottom 1px solid  #cccccc
        outline none
      .clean
        width 21px
        height 21px
        position absolute
        right 37px
        top 62px
        img 
          width 100%
          height 100%
        z-index 90

        // 验证码登录
      .yanzheng
        width 100%
        height 39px
        margin-top 15px
        .yzm-active
          color #000000
        .label  
          span 
            vertical-align middle
            border-bottom 1px solid silver
            display inline-block
            height 39px
            width 39px
            margin-right 12px
            text-align center
            line-height 39px
            color #222
            font-size 24px
            position relative
            &.active::after
              content ""
              display block
              width 1px
              height 20px
              border-right 1px solid yellow
              position absolute
              left 50%
              top 50%
              margin-top -10px
            &:last-child
              margin 0
            &.highlight 
              border-color purple
                /* 去掉input[type=number]浏览器默认的icon显示 */
        input
          // opacity 0
          height 0
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button  // chrome
            -webkit-appearance none
            appearance none
            margin 0
        input // 火狐
            -moz-appearance textfield
        button 
          display block
          width 99px
          height 39px
          color #cccccc
          border 1px solid #ccc
          background white
          border-radius 5px
          float right 
          text-align center
          vertical-align middle
          font-size 15px
          outline none
        .toast
          width 325px
          height 52px
          background rgba(0,0,0,.6)
     
      // 密码登录
      .pwd-login
        height 45px
        margin-top 12px
        background pink 
        position relative
        input 
          position absolute
          bottom 0
          left 0
        .eye
          width 21px
          height 21px
          position absolute
          right 55px
          top 50%
          margin-top -10.5px
          img 
            width 100%
            height 100%
        .wj-pwd
          display block
          width 48px
          height 45px
          font-size 12px
          color #333
          position absolute
          right 0
          text-align center
          line-height 45px




      .login
        height 88px
        margin-top 30px
        .phone-login
          height 45px
          display block
          background #ffcc00
          border-radius 6px
          font-size 17px
          color #000000
          text-align center
          line-height 45px
        .select-login
          display block
          font-size 15px
          text-align center
          margin-top 21px
          color #000000
    // 底部
    .footer
      width 240px
      height 96px
      position absolute
      left 50%
      bottom 17px
      margin-left -120px
      // background pink
      .other
        text-align center
        height 18px
        color #999999
        margin-bottom 10px
        position relative
        &::before,&::after
          content ""
          display block
          width 75px
          height 1px
          border-bottom 1px solid #dddddd
          position absolute
          top 50%
          margin-top -1px
        &::after
          right 0
      .icons
        height 33px
        margin-bottom 17px
        display flex
        justify-content space-between
        img 
          width 33px
          height 33px
      .agree
        span 
          color #999999
        a
          color #101010
    

   

          
        

</style>
