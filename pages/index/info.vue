<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
<navigator :url="authUrl" open-type="navigate">{{$t('languageswitch')}}</navigator>	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: this.$t('hello'),
				authUrl:'/pages/common/lang'
			}
		},
		onShow() {
		    uni.setNavigationBarTitle({
		        title: this.$t('home')
		    });
		},
		onLoad() {
			console.log("Page is loading...");
			this.$commonMethods.translate("home");
			const tabNames = ['home', 'my']; 
			tabNames.forEach((name, index) => {
			        uni.setTabBarItem({
			          index,
			          text: this.$t(name),
			        });
			      });
		},
		methods: {

		}
	}
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
