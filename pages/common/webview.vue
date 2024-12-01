<template>
  <view>
    <web-view :src="externalUrl"></web-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      externalUrl: ''
    };
  },
  mounted() {
    // 获取传入的参数值
    this.externalUrl = this.$route.query.url || 'https://www.baidu.com';
  }
};
</script>
