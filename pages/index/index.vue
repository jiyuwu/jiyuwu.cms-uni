<template>
  <view class="content">
    <view class="padding">
      <navigator :url="upUrl" open-type="navigate">{{ $t('upfile') }}</navigator>
    </view>
  </view>
</template>

<script setup>
import { useTabBar } from '@/composables/useTabBar.js'; 

useTabBar();

const upUrl = '/pages/test/upfile';

</script>

<style scoped>

</style>
