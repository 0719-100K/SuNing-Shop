<template>
<!-- 外部包裹 -->
<div class="contentContainer">
	<!-- 头部 -->
	<div class="headerContainer">
		<div class="title_header">
			<div class="clearFloat header_inner">
				<div @click="backHome" class="imgLeft floatLeft">
					<img src="../../static/images/titleHeader/headerLeft.png" alt="">
				</div>
				<div class="textHeader floatLeft">领劵中心</div>
				<div class="imgRight floatLeft" >
					<img @click="isShowListItem" src="../../static/images/titleHeader/headerRight.png" alt="">
				</div>
				<div @touchmove.prevent
				  v-show="isShow" 
					 class="search"
					 >
					<input @click="toSearch"  type="text" placeholder="搜索">
					<ul class="searchList" >
						<li
						 v-for="(ListItem, index) in navList" :key="index"
						 :class="{active:index==currentItem}"
						 @click="searchItem(index)"
						 >{{ListItem.className}}</li>
						 <li class="blank"></li>
					</ul>
				</div>
				<!-- 遮罩层 -->
				<div @touchmove.prevent v-show="isShow"  class="zhezhao" @click="isOffShow" ></div>
			</div>
		</div>
	</div>	

	<!-- banner -->
	<div class="banner_box swiper-container">
		<div class="inner swiper-wrapper">
				<div   class="imgBj swiper-slide">
					<img src="../../static/images/titleHeader/header.png" alt="">
				</div>
				<div class="swiper-pagination"></div>
		</div>
	</div>
	
	<!-- 滑动导航 -->
	<div class=" navListContainer">
	  <div class="inner wrapper"  ref="nav">
				<div class="navList content">
					<div
						ref="items"
						class="items"
						v-for="(listItem,index) in navList" :key='index'
						@click="navItem(index)"
						v-bind:class="{active:index===navListIndex}"
					>
						<div class="itemText ">
							{{listItem.className}}
						</div>
						<div v-show="index==navListIndex" class="underline"></div>
					</div>
				</div>
		</div>
	</div>
  <!-- 主体内容 -->
  <div class="shopListBox" v-for="(item,index) in classList " :key="index">

		<div class="inner">
		<!-- top -->	
			<ul class="modal_box" :class="setClass(index)" >
				 <div class="modal_top clearFloat">
					 <div class="top_left">
						 <p class="topUp">
							 <!-- 价格 ￥15 -->
							 ¥<span class="price">{{item.activityList[0].couponAmount}}</span>
							 <!-- 满减 -->
							 	<span class="price1"> {{item.activityList[0].couponRuleDesc}}</span>
							 </p>
							 <!-- 自营店 -->
						 <p class="bottomDown">{{item.activityList[0].actDesc}}</p>
					 </div>
					 <div class="top_right floatRight">
						 <div class="text">立即领取</div>
					 </div>
				 </div>
				 <!-- bottom -->
				<ul class="modal_bottom">
					<li>
						<div class="img_box">
							<img :src="item.activityList[0].commdtyList[0].showPicUrl" alt="">
						</div>
						<div class="msg_box">
							<!-- 单品价 -->
							<span class="price">￥{{item.activityList[0].commdtyList[0].price}}</span>
							<span class="price1">可用券</span>
						</div>
					</li>
					<li>
						<div class="img_box">
							<img :src="item.activityList[0].commdtyList[1].showPicUrl" alt="">
						</div>
						<div class="msg_box">
							<span class="price">￥{{item.activityList[0].commdtyList[1].price}}</span>
							<span class="price1">可用券</span>
						</div>
					</li>
					<li>
						<div class="img_box">
							<img :src="item.activityList[0].commdtyList[2].showPicUrl" alt="">
						</div>
						<div class="msg_box">
							<span class="price">￥{{item.activityList[0].commdtyList[2].price}}</span>
							<span class="price1">可用券</span>
						</div>
					</li>
				</ul>
			</ul>
		</div>
	</div>

	<!-- 底部tab -->
	<div class="footerTab">
		<div class="inner">
			<div class="container">
					<div class="left">
						<img src="https://image.suning.cn/uimg/cms/img/156877570833054849.png" alt="">
						<span>领券中心</span>					
					</div>
						<div @click="handleMy" class="right">
							<img src="https://image.suning.cn/uimg/cms/img/156877576326587680.png" alt="">
							<span>我的优惠券</span>	
						</div>
				
					
			</div>
		</div>
	</div>
</div>
</template>
<script>
import Vue from 'vue'
import {mapState} from "vuex"
import   '../../static/css/rest.css'
import BScroll from 'better-scroll'
import Swiper from 'swiper'
import  'swiper/css/swiper.css'

	export default {
			 name: 'contentContainer',
		data(){
			return {
				scrollX:0,
				lefts:[],
				currentItem:0,
				navListIndex:0,
				isShow:false,
				isOff:false,
				navList:[
					{"classCode": "1","className": "精选","classType": "0" },
					{"classCode": "62","className": "SUPER专享","classType": "4","picUrl": "", "classAdUrl": "","classAdLink": "" },
					{"classCode": "112184","className": "医药保健","classType": "3","picUrl": ""},
					{"classCode": "112185","className": "家用电器","classType": "3","picUrl": ""},
					{"classCode": "112198","className": "运动户外","classType": "3","picUrl": ""},
					{"classCode": "121371","className": "家居家纺","classType": "3","picUrl": ""},
					{"classCode": "144547","className": "手机数码","classType": "3","picUrl": ""},
					{"classCode": "160576","className": "美妆个护","classType": "3","picUrl": ""},
					{ "classCode": "160577","className": "酒水冲饮","classType": "3", "picUrl": ""},
					{"classCode": "160578","className": "食品生鲜","classType": "3","picUrl": ""},
					{"classCode": "160579","className": "母婴用品","classType": "3","picUrl": "" },
					{"classCode": "160580","className": "服饰内衣","classType": "3","picUrl": ""},
					{"classCode": "160581","className": "箱包鞋靴","classType": "3","picUrl": ""},
					{"classCode": "160597","className": "电脑办公","classType": "3","picUrl": ""},
					{"classCode": "160598","className": "家装建材","classType": "3","picUrl": ""},
					{"classCode": "160599","className": "钟表配饰","classType": "3","picUrl": "","classAdUrl": "","classAdLink": ""},
					{"classCode": "160600","className": "生活家电","classType": "3","picUrl": ""}
				]
	  }
	},
		computed: {
			...mapState(["classList"]),
					currentItem(){
				const {scrollX,lefts} = this
				const index = lefts.findIndex((left,index)=>scrollX>=left && scrollX<lefts[index+1])
					console.log(scrollX,index)
			}
		},
		async mounted(){
					await  this.$store.dispatch("getClassList")
					//横向滚动
					new BScroll(this.$refs.nav,{
						scrollX:true, //横向滚动
						click:true//可点击
					})
					//轮播
					new Swiper('.swiper-container',{
						//分页
						paination:{
							el:'.swiper-pagination'
						},
						lazy: true
					})
		},
		methods: {
			//nav
			navItem:function(index){
				this.navListIndex = index
				this.currentItem = this.navListIndex
			},
			//search
			searchItem(index){
			let current=	this.currentItem = index
			this.navListIndex = current
				if (this.isShow) {
					this.isShow = false
				}
			},
			//返回home
			backHome(){
				this.$router.push('/home')
			},
			//是否展示搜索列表
			isShowListItem(){
				this.isShow = !this.isShow
			},
			//点击遮罩页面消失
			isOffShow(){
				if (this.isShow) {
					this.isShow = false
				}
			},
			//跳转到persons
			handleMy(){
				this.$router.push('/home/centre/persons')
			},
			//给每个model_box加自己的class
			setClass(key) {
            let obj = {face: true}
            obj[`modal_box${key}`] = true
            return obj
			},
			//点击搜索中input去search
			toSearch(){
				this.$router.push('/search')
			}
  }
}
</script>
<style scoped lang="stylus">

	.contentContainer
		padding-bottom 50px
		//公共
		.inner
			width 93%
			margin 0 auto
			overflow hidden
		//头部导航
		.headerContainer
			.title_header
				background white
				width 100%
				height 44px
				line-height 44px
				.header_inner
					display flex
					justify-content space-around
					position relative
					div
						font-size 18px !important
						font-weight 500
						color #222
						&:nth-child(3)
							width 30%
							text-align right
							padding-right 7%
						&:nth-child(2)
							width 30%
							text-align center
						&:nth-child(1)
							width 30%
							padding-left 7%
						img
							width auto
							height 18px
					.search
						width 100%
						// height 100%
						position absolute
						top 44px
						overflow hidden
						background white
						z-index 99
						input
							border none
							width 93%
							height 30px
							margin 18px auto
							margin-left 1%
							background #eee
							outline-style  none
							border-radius 5px
							padding-left 20px
						.searchList
							display flex
							justify-content space-around
							font-size 12px
							width: 100%;
							flex-flow: row wrap;
							margin-bottom 23px
							li
								width 30%
								line-height 27px
								text-align center
								background #eee
								margin-bottom 2%
								&.blank
									background #fff
							.active
								color #ff6600
					//遮罩层
					.zhezhao
						position fixed
						top 44px
						right 0
						bottom 0
						left 0
						background rgba(0,0,0,.5)
						z-index 2
		//轮播		
		.banner_box
			.inner
				width 93%
				margin 10px auto
				overflow hidden 				
				.imgBj
					img
						width 93%
						height 100%
						margin 0 auto
		//横向导航				
		.navListContainer
			width 100%
			.navList
				width 1450px
				white-space nowrap
				.items
					font-size 15px
					height 28px
					padding 9px 0 0
					display inline-block
					&.active
						color #ff5500
						font-size 17px
						font-weight 600
					.itemText
						height 28px
						align-content  top
						border-right 1px solid  #d9d9d9
						padding 0 12px
					.underline
						align-content bottom 
						width 19px
						height 4px
						background #ff5500
						border-radius 4px
						margin 0 auto
		//商品				
		.shopListBox
			margin-top 10px
			width 100%
			.inner
				.modal_box
					.modal_top
						position relative
						background #FDEADC
						height 70px
						border-radius 20px
						.top_left
							padding 9px 15px 9px 18px
							width 70%
							float left
							.topUp
								color #ff5500
								.price
									font-size 25px
									font-weight bold
								.price1
									font-size 12px
									margin 7px 0  0 4.5px
									text-align center
							.bottomDown
								width 80%
								height 16px
								font-size 14px
								margin 2px 0 0 0
								text-overflow ellipsis
								overflow hidden
								white-space nowrap
						.top_right
							font-size 12px
							width 20%
							height 100%
							position relative
							.text
								display inline-block
								background #f50
								position absolute
								width 64px
								height 22px				
								top 0
								bottom 0
								margin auto
								color white
								text-align center
								line-height 22px
								border-radius 10px
					.modal_bottom
						height 136px
						padding 10px 12px 0 12px
						background white
						border-radius 20px
						&:nth-child(2)
							.msg_box
								display flex
								flex-direction row
						li
							width 33%
							text-align center
							float left
							.img_box
								img
									width 90px
									height 90px
							.msg_box
								width 100%
								height 22px
								line-height 22px
								.price
									font-size 15px
								.price1
									display inline-block
									font-size 12px
									margin 0 0 0 4px
									padding 0 3px
									border-radius 10px
									background pink
									color #f50
		//底部tab														
		.footerTab
			position fixed
			background white
			bottom 0
			left 0
			height 40px
			width 100%
			.inner
				.container
					display flex
					.left
						display flex
						align-items center
						flex-direction column
						width 50%
						img
							width 18px
							height 18px
					.right
						display flex
						align-items center
						flex-direction column
						width 50%
						img
							width 18px
							height 18px	

								 
							
					
				
</style>
			
				
					