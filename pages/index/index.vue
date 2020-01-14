<template>
	<view>
		<basics v-if="PageCur=='basics'"></basics>
		<components v-if="PageCur=='component'"></components>
		<plugin v-if="PageCur=='plugin'"></plugin>
		<view class="cu-bar tabbar bg-white shadow  foot">
			<view class="action" @click="NavChange" data-cur="basics">
				<view :class="PageCur=='basics'?'text-red':'text-gray'">笔记</view>
			</view>
			<view class="action" @click="NavChange" data-cur="component">
				<view :class="PageCur=='component'?'text-red':'text-gray'">案例</view>
			</view>
			<view class="action" @click="NavChange" data-cur="plugin">
				<view :class="PageCur=='plugin'?'text-red':'text-gray'">关于</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		return {
				PageCur: 'basics'
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>

</style>
