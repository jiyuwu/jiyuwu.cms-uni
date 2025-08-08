<template>
  <view>
	  <!-- 模板部分几乎不变，$t 仍然可以直接使用 -->
	  <text style="padding: 10px;">{{ $t('languageswitch') }}</text>
    <zxz-uni-data-select
      v-model="value"
      :localdata="languageRange"
      @change="onLanguageChange"
      :clear="false"
    ></zxz-uni-data-select>
  </view>
</template>

<script setup>
// 从 vue 导入 ref 和 computed
import { ref, computed } from 'vue';
// 从 @dcloudio/uni-app 导入 onShow 生命周期钩子
import { onShow } from '@dcloudio/uni-app';
// 从 vue-i18n 导入 useI18n 组合式函数
import { useI18n } from 'vue-i18n';

// 1. 调用 useI18n() 获取翻译函数 t 和响应式的 locale 对象
const { t, locale } = useI18n();

// 2. 转换 data -> 使用 ref
// 将 value 定义为一个 ref，使其成为响应式数据
const value = ref(uni.getStorageSync('lang') || 'zhHans');

// 3. 转换 computed -> 使用 computed 函数
// languageRange 依赖于 t 函数，所以它也需要是计算属性以保持响应性
const languageRange = computed(() => [
  { value: 'zhHans', text: t('simplifiedchinese') },
  { value: 'en', text: t('english') },
]);

// 4. 转换 onShow -> 使用 onShow 钩子
// onShow 钩子函数会在每次页面显示时执行
onShow(() => {
  // 设置导航栏标题
  uni.setNavigationBarTitle({
    title: t('languageswitch')
  });
});

// 5. 转换 methods -> 定义一个普通函数
function onLanguageChange(newLang) {
  // a. 直接修改从 useI18n() 获取的 locale ref，这是 Vue 3 中推荐的方式
  locale.value = newLang;

  // b. 将选择存入本地缓存
  uni.setStorageSync("lang", newLang);

  // c. 更新 v-model 绑定的 ref
  // (虽然 v-model 会自动更新，但显式写出有助于逻辑清晰)
  value.value = newLang;
  uni.setNavigationBarTitle({
    title: t('languageswitch')
  });
}
</script>