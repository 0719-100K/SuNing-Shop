<template>
  <div id="app">
    <!-- <keep-alive exclude="GoodDeatail"> -->
    <!-- <keep-alive exclude="goodDetail"> -->
      <router-view></router-view>
    <!-- </keep-alive> -->
    
		<!-- <GoodDetails></GoodDetails> -->
		<FooterGuider v-show="$route.meta.isShowFooter"></FooterGuider>
  </div>
</template>

<script>
import FooterGuider from './components/FooterGuider/NingFooter.vue'
import {GET_CARTGOODS} from '@/vuex/mutation_type'
import {mapState} from 'vuex'
export default {
  name: 'app',
  computed:{
    ...mapState(['user','token'])
  },
  mounted(){
    this.$store.dispatch('autoLogin')
    if (this.user && this.token) {
      this.$store.commit(GET_CARTGOODS)
    }
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
