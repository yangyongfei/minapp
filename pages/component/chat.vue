<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText" @tap="close">返回</block>
			<block slot="content">{{title}}</block>
		</cu-custom>

		<view class="cu-chat" v-for="(item,index) in dataList" :key="index">
			<view class="cu-item self" v-if="item.id==id">
				<view class="main">
					<view class="content bg-green shadow">
						<text>{{item.msg}}</text>
					</view>
				</view>
				<view class="cu-avatar radius" v-bind:style="{backgroundImage:'url('+item.userInfo.avatarUrl+')'}"></view>
				<view class="date">{{item.time}}</view>
			</view>
			<view class="cu-item" v-if="item.id!=id">
				<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg);"></view>
				<view class="main">
					<view class="content shadow">
						<text>{{item.msg}}</text>
					</view>
				</view>
				<view class="date">13:23</view>
			</view>
			<view class="cu-info round" v-if="item.type == 4">{{tips}}</view>
			<!-- <view class="cu-item self">
				<view class="main">
					<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" class="radius" mode="widthFix"></image>
				</view>
				<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"></view>
				<view class="date"> 13:23</view>
			</view> -->
			<!--<view class="cu-item self">
				<view class="main">
					<view class="action text-bold text-grey">
						3"
					</view>
					<view class="content shadow">
						<text class="cuIcon-sound text-xxl padding-right-xl"> </text>
					</view>
				</view>
				<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"></view>
				<view class="date">13:23</view>
			
			</view> -->
			<!--<view class="cu-item self">
				<view class="main">
					<view class="action">
						<text class="cuIcon-locationfill text-orange text-xxl"></text>
					</view>
					<view class="content shadow">
						喵星球，喵喵市
					</view>
				</view>
				<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"></view>
				<view class="date">13:23</view>
			</view> -->
		</view>

		<view class="cu-bar foot input" :style="[{bottom:InputBottom+'px'}]">
			<view class="action">
				<text class="cuIcon-sound text-grey"></text>
			</view>
			<input class="solid-bottom" :value="sayText" :adjust-position="false" :focus="false" maxlength="300" cursor-spacing="10"
			 @focus="InputFocus" @blur="InputBlur"></input>
			<view class="action">
				<text class="cuIcon-emojifill text-grey"></text>
			</view>
			<button class="cu-btn bg-green shadow" @click="sendMsg">发送</button>
		</view>

	</view>
</template>

<script>
	const io = require('../../common/weapp.websocket.io.js')
	const mixin = require('../../common/tool.js')
	var socket = '';
	export default {
		data() {
			return {
				InputBottom: 0,
				dataList: [],
				sayText: '',
				tips: 'aa',
				socket: {},
				id: '',
				title: '阿飞的聊天室'
			};
		},
		onLoad() {
			this.Init()
		},
		onHide(){
			console.log(1)
		  socket.close()	
		},
		methods: {
			Init() {
				socket = io('http://www.yangyongfei.com', {
					// 实际使用中可以在这里传递参数
					query: {
						room: 'fg',
						userId: `client_${Math.random()}`,
					},
					transports: ['websocket']
				});
				socket.on('connect', () => {
					console.log(socket)
					const id = socket.id;
					this.id = id
					console.log('#connect,', id, socket);
					// 监听自身 id 以实现 p2p 通讯
					socket.on(id, msg => {
						console.log('#receive,', msg);
					});
				});

				socket.on('fg', msg => {
					this.dataList.push(msg.data.payload)
					console.log(msg)
				})


				// 接收在线用户信息
				socket.on('online', msg => {
					this.title = `阿飞聊天(${msg.clients.length})`
					console.log('#online,', msg);
				});

				// 系统事件
				socket.on('disconnect', msg => {
					console.log('#disconnect', msg);
				});

				socket.on('disconnecting', () => {
					console.log('#disconnecting');
				});

				socket.on('error', (err) => {
					console.log(err);
				});

			},
			sendMsg() {
				var _this = this
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						console.log(loginRes.authResult);
						// 获取用户信息
						uni.getUserInfo({
							provider: 'weixin',
							success: function(infoRes) {
								console.log(infoRes)
								socket.emit('exchange', {
									target: 'fg',
									payload: {
										type: 1,
										id: socket.id,
										time: new Date(),
										userInfo:  infoRes.userInfo,
										msg: _this.sayText
									},
								})
							}
						});
					}
				});
			}, 
			InputFocus(e) {
				console.log(e)
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				console.log(e)
				this.sayText = e.detail.value
				this.InputBottom = 0
			},
			close(){
				socket.close()
			}
		},
	}
</script>

<style>
	page {
		padding-bottom: 100upx;
	}
</style>
