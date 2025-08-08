// composables/useTabBar.js

import { onShow } from '@dcloudio/uni-app';
import { useI18n } from 'vue-i18n';
// 1. 导入我们自己的配置文件
import { pageConfig, tabBarConfig } from '@/utils/page.config.js'; // 确认路径正确

export function useTabBar() {
  const { t } = useI18n();

  onShow(() => {
    // --- 更新导航栏标题 ---
    const pages = getCurrentPages();
    if (pages.length) {
      const currentPageRoute = pages[pages.length - 1].route;
      
      // 2. 从配置数组中查找当前页面的配置对象
      const currentPage = pageConfig.find(p => p.path === currentPageRoute);

      if (currentPage) {
        uni.setNavigationBarTitle({
          title: t(currentPage.i18nKey)
        });
      }
    }

    // --- 更新整个 TabBar ---
    // 3. 遍历从配置中获取的 TabBar 列表来更新
    tabBarConfig.forEach(tab => {
      uni.setTabBarItem({
        index: tab.tabBarIndex,
        text: t(tab.i18nKey)
      });
    });
  });
}