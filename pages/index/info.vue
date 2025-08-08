<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<!-- title 变量现在是一个计算属性，可以直接在模板中使用 -->
			<text class="title">{{ title }}</text>
		</view>
		<!-- $t 仍然可以在模板中直接使用 -->
		<navigator :url="langUrl" open-type="navigate">{{ $t('languageswitch') }}</navigator>
	</view>
</template>

<script setup>
// 从 vue 导入 computed，用于创建计算属性
import { computed } from 'vue';
import { useTabBar } from '@/composables/useTabBar.js'; 
useTabBar();
import { usePageI18n } from '@/composables/usePageI18n.js';
const { t } = usePageI18n();

// 对于不会改变的静态数据，直接声明为 const 常量
const langUrl = '/pages/common/lang';

// 这样当语言切换时，`title` 的值会自动更新
const title = computed(() => t('hello'));

</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>