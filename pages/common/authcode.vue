<template>
  <view>
    <a ref="myLink" :href="authUrl"></a>
  </view>
</template>

<script>
export default {
  data() {
    return {
      authUrl: ''
    };
  },
  mounted() {
    const redirectUri = 'url'; // 替换为你的授权回调URL
    const state = 'STATE'; // 自定义的state参数
    const appId = 'AppId'; // 替换为你的公众号AppID
    
    // 拼接授权链接
    this.authUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${redirectUri}&response_type=code&scope=snsapi_base&state=${state}#wechat_redirect`;
	
	
	this.$nextTick(() => {
	  this.$refs.myLink.click();
	});

  }
}

</script>