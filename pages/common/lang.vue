<template>
  <view>
	  {{$t('languageswitch')}}
    <zxz-uni-data-select
      v-model="value"
      :localdata="range"
      @change="change" :clear="false"
    ></zxz-uni-data-select>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        value: 'zhHans',
        range: [
          { value: 'zhHans', text: this.$t('simplifiedchinese') },
          { value: 'en', text: this.$t('english') },
        ],
      };
    },
	onShow() {
	    this.value=uni.getStorageSync("lang");
		uni.setNavigationBarTitle({
		    title: this.$t('jiyuwucms')
		});
	},
    methods: {
      change(e) {
		this.$i18n.locale = e;
		uni.setStorageSync("lang",e);
		uni.reLaunch({ url: '/' }); // 刷新当前页面使新的语言生效
      },
    },
  };
</script>

<style lang="scss">
  .text {
    font-size: 12px;
    color: #666;
    margin-top: 5px;
  }

  .uni-px-5 {
    padding-left: 10px;
    padding-right: 10px;
  }

  .uni-pb-5 {
    padding-bottom: 10px;
  }
</style>