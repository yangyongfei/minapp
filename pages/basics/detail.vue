<template>
	<view class="">
		<cu-custom bgColor="bg-gradual-red" :isBack="true"><block slot="backText">返回</block><block slot="content">{{actileDetail.title}}</block></cu-custom>
		<view class="detail">
		    <view class="author">
				<text>作者：{{actileDetail.author}}</text>
				<text>{{actileDetail.createTime}}</text>
			</view>
			<view class="content" v-html="actileDetail.content"></view>
		</view>
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex'
	export default {
		name:'detail',
		data(){
			return{
			}
		},
		computed:{
		 ...mapState(['actileDetail'])	
		},
		created(){
			// this.actileDetail.content.replace(/\n/g,'<br>')
			// console.log(this.actileDetail)
		}
	}
</script>

<style>
	.detail{
		width: 100%;
		text-align: center;
		padding: 20upx;
	}
	.detail .title{
		text-align: center;
		margin: 20upx;
		font-size: 32upx;
		color: #333;
	}
	.detail .author{
		text-align: center;
		margin: 40upx 0;
		color: #999;
		display: flex;
		justify-content: space-between;
	}
	.detail .content{
		text-align: left;
		color: #666;
		line-height: 50upx;
	}
</style>
