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
	
  components:{
    FooterGuider,
    // GoodDetails
	}
}
</script>

<style>

</style>
