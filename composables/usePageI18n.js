// composables/usePageI18n.js
import { useI18n } from 'vue-i18n';
import { onShow } from '@dcloudio/uni-app';

export function usePageI18n() {
  // 在这个“官方指定”的地方使用 useI18n()
  const { t } = useI18n(); 

  onShow(() => {
    // ... 更新 UI 的逻辑 ...
  });
  
  // 把获取到的 t 函数作为工具返回出去
  return { t };
}