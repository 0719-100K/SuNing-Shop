<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    
		<!-- <GoodDetails></GoodDetails> -->
		<FooterGuider v-show="$route.meta.isShowFooter"></FooterGuider>
  </div>
</template>

<script>
import FooterGuider from './components/FooterGuider/NingFooter.vue'

export default {
  name: 'app',
  mounted(){
    this.$store.dispatch('autoLogin')
  },
  components:{
    FooterGuider,
    // GoodDetails
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
</style>
