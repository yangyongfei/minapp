<template name="components">
	<view>
		<scroll-view scroll-y class="page">
			<view class="about-bg"></view>
			<view class="about-text text-white">
				君不见黄河之水天上来
				奔流到海不复回
				君不见 高堂明镜悲白发
				朝如青丝暮成雪
				人生得意须尽欢
				莫使金樽空对月
				天生我才必有用
				千金散尽还复来
				烹羊宰牛且为乐
				会须一饮三百杯
				岑夫子，丹丘生
				将进酒，杯莫停
				与君歌一曲
				请君为我倾耳听
				钟鼓馔玉不足贵
				但愿长醉不复醒
				古来圣贤皆寂寞 
				惟有饮者留其名
				陈王昔时宴平乐
				斗酒十千恣欢谑
				主人何为言少钱
				径须沽取对君酌
				五花马
				千金裘
				呼儿将出换美酒
				与尔同销万古愁
				</view>
			<!-- <view class="cu-tabbar-height"></view> -->
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "components",
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				list: [
				]
			};
		},
		methods: {
			toChild(e) {
				uni.navigateTo({
					url: e.currentTarget.dataset.url
				})
			},
		},
	}
</script>

<style>
	.page {
		height: 100vh;
		display: flex;
		align-items: center;
	}
    .about-text{
		font-size:32upx;
		margin: 400upx auto 0 auto;
		text-align: center;
		background-color: rgba(255,255,255,.4);
		width: 90%;
		padding: 40upx;
	}
	.about-bg{
		position: fixed;
		background: url(../../static/libai.jpeg);
		background-size: cover;
		filter: blur(30upx);
		top: 0;
		width: 100%;
		height: 100vh;
		z-index: -1;
	}
	.cardTitle {
		color: #fff;
		padding: 90upx 60upx;
		font-size: 40upx;
		font-weight: 300;
		transform: skew(-10deg, 0deg);
		position: relative;
		text-shadow: 0px 0px 6upx rgba(0, 0, 0, 0.3)
	}

	.cardTitle::before {
		content: "";
		position: absolute;
		width: 60upx;
		height: 6upx;
		border-radius: 20upx;
		background-color: #fff;
		display: block;
		top: 60upx;
		left: 50upx;
		transform: skew(10deg, 0deg);
	}

	.cardTitle::after {
		content: "";
		position: absolute;
		width: 140upx;
		border-radius: 6upx;
		height: 24upx;
		background-color: #fff;
		display: block;
		bottom: 76upx;
		left: 90upx;
		transform: skew(10deg, 0deg);
		opacity: 0.1;
	}
</style>
