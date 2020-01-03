<template>
  <div id="footerGuider">
		<span class="footerItem" v-for="(item,index) in footerGuider" :key="index" @click="changeGuider(item,index)">
			<router-link :to="item.to">
				<img v-if="currentIndex !== index" :src="item.img" alt="">
				<img v-if="currentIndex === index" :src="item.lightImg" alt="">
				<p>{{item.title}}</p>
			</router-link>
		</span>
		<!-- <span class="footerItem" v-for="(item,index) in footerGuider" :key="index" @click="changeGuider(item,index)" >
			<img v-if="currentIndex !== index" :src="item.img" alt="">
			<img v-if="currentIndex === index" :src="item.lightImg" alt="">
			<p>{{item.title}}</p>
		</span> -->
	</div>
    
</template>

<script>
export default {
  name: 'footerGuider',
  data(){
		return {
			currentIndex:0,
			footerGuider:[
				{title:"首页",to:"/home",img:"https://image.suning.cn/uimg/cms/img/157105696599538235.png",lightImg:"https://image3.suning.cn/uimg/cms/img/157543974786039763.png?from=mobile"},
				{title:"分类",to:"/category",img:"https://image.suning.cn/uimg/cms/img/157105701015391606.png",lightImg:"https://image.suning.cn/uimg/cms/img/157105701015391606.png"},
				{title:"必抢清单",to:"/mustBuy",img:"https://image.suning.cn/uimg/cms/img/157105715014136982.png",lightImg:"https://image.suning.cn/uimg/cms/img/157105715273415124.png"},
				{title:"购物车",to:"/shopcart",img:"https://image.suning.cn/uimg/cms/img/157105762930982264.png",lightImg:"https://image.suning.cn/uimg/cms/img/157105763151658248.png"},
				{title:"个人中心",to:"/profile",img:"https://image.suning.cn/uimg/cms/img/157105768303272975.png",lightImg:"https://image.suning.cn/uimg/cms/img/157105768594001788.png"},
			]
		}
	},
	mounted() {
		
	},
	methods:{
		changeGuider(item,index){
			this.currentIndex = index
			if (item.to !== this.$route.path) {  // 如果点击的不一样的路由，则跳转
				// console.log(this.$route)
					// 编程式路由跳转
					this.$router.replace(item.to)
				} else {
					window.location = item.to  // 发送一般的http请求 ==> 整个界面会刷新显示
				}
		}
		// changeGuider(item,index){
		// 	this.currentIndex = index
		// 	if (item.to !== this.$route.path) {  // 如果点击的不一样的路由，则跳转
		// 		// 编程式路由跳转
		// 		this.$router.replace(item.to)
		// 	} else {
		// 		window.location = item.to  // 发送一般的http请求 ==> 整个界面会刷新显示
		// 	}
		// }
	}
}
</script>

<style scoped lang="stylus">
	@import '../../common/stylus/mixins.styl'
	#footerGuider
		top-border-1px(#cccccc)
		position fixed
		bottom 0
		left 0 
		display flex
		width 100%
		height 50px
		background-color #fff
		z-index 99
		clearFix()
		.footerItem
			width 20%
			text-align center
			img
				width 24px
				height 24px
			p
				margin-top 3px
				font-size 12px
</style>
