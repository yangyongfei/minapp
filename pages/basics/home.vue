<template name="basics">
	<view>
		<scroll-view scroll-y class="page">
			 <view class="banner">
			 	<text class="fgfont fg-yu"></text>
				<text class="text">一条有梦想的咸鱼</text>
			 </view>
			<view class="nav-list">
				<navigator hover-class="none" :url="'/pages/basics/detail?id=' + item.id" class="nav-li" navigateTo :class="'bg-'+item.color"
				 :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" v-for="(item,index) in elements" :key="index" @click.native="setDetail(item)">
					<view class="nav-title">{{item.title}}</view>
					<view class="nav-content">{{item.content}}</view>
				</navigator>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import api from '@/common/api'
	import {mapState,mapMutations} from 'vuex'
	export default {
		name: "basics",
		data() {
			return {
				elements: [
				],
			};
		},
		onShow() {
			console.log("success")
		},
		onLoad(){
			
		},
		created(){
			api.articleList().then(res=>{
				this.elements = res.data.result
			}).catch(res=>{
			
			})
		},
		methods:{
			...mapMutations(['UPDATADETAL']),
			setDetail(item){
				console.log(item)
			  this.UPDATADETAL(item)
			}
		}
	}
</script>

<style>
	.page {
		height: 100vh;
	}
</style>
