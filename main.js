// 引入 Vue 3 和其他依赖
import { createApp } from 'vue'; // Vue 3 中的 createApp
import App from './App.vue'; // Vue 3 文件扩展名通常使用 `.vue`

import zhHans from '@/lang/zh-Hans.js';
import en from '@/lang/en.js';
import { createI18n } from 'vue-i18n'; // Vue 3 的国际化插件
import store from './store'; // Vuex store

// 创建 Vue 3 应用实例
const app = createApp(App);

// 创建 Vue I18n 实例
let selectLang = uni.getStorageSync("lang"); // 获取存储的语言设置
const i18n = createI18n({
  locale: selectLang || 'zhHans', // 默认语言
  messages: {
    'zhHans': zhHans,
    'en': en,
  }
});

// 在 Vue 3 中使用插件
app.use(i18n);
app.use(store);

// 禁用生产提示
app.config.productionTip = false;

// 挂载应用
app.mount('#app');

// SSR 相关（可选）
export function createAppSSR() { // 使用 `createApp` 创建 SSR 应用
  const app = createApp(App);
  return {
    app,
  };
}
