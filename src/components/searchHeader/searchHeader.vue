<template>
<div class="headerContainer">
  <img src="../../common/images/nav-back2.png" alt="" @click="goback">
  <div class="inputContainer">
    <i class="iconfont icon-tubiaolunkuo-"></i>
    <input type="text" v-model="keyWord" placeholder="请输入内容搜索"/>
  </div>
  <span class="search" v-if="isShow">搜索</span>
  <span class="iconfont icon-classify_icon" v-else></span>
</div>
</template>
<script>
import {CLEARSEARCHLIST} from '../../vuex/mutation_type'
export default {
  props:['isShow','currentHotWord'],
  data() {
    return {
      keyWord:''
    }
  },
  methods: {
    goback(){
      this.$router.go(-1)
  
      this.$store.commit(CLEARSEARCHLIST)
    }
  },
  watch: {
    currentHotWord(newValue){  // 从search组件传来的，检测值的变化，实时更新到状态中
      this.keyWord = newValue
    }
  },
}
</script>
<style  lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'
.headerContainer
  box-sizing border-box
  display flex
  justify-content space-between
  align-items center
  bottom-border-1px(#999)
  img
    width 48px
  .inputContainer
    background-color #eee
    border-radius 5px
    .icon-tubiaolunkuo-
      font-size 12px
      margin 9px 7.5px
    input 
      background-color #eee
      height 30px
      outline none
  .search
    font-size 18px
    padding-right 20px
  .icon-classify_icon
    font-size  22px
    margin-right 10px
</style>