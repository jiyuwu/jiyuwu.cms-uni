// app.config.js

// 在这里定义我们应用的所有页面配置
export const pageConfig = [
  {
    path: 'pages/index/index', // 页面路径
    i18nKey: 'home',           // 对应的 i18n key
    isTabBar: true,            // 标记它是否是 TabBar 页面
    tabBarIndex: 0             // 如果是 TabBar，它的索引是什么
  },
  {
    path: 'pages/index/info',
    i18nKey: 'my',
    isTabBar: true,
    tabBarIndex: 1
  },
  {
    path: 'pages/common/lang',
    i18nKey: 'languageswitch', // 这是非 TabBar 页面的配置
    isTabBar: false
  },
  {
    path: 'pages/test/upfile',
    i18nKey: 'upfile', // 这是非 TabBar 页面的配置
    isTabBar: false
  }

];

// 同时，我们也可以在这里导出 TabBar 的配置
export const tabBarConfig = pageConfig.filter(p => p.isTabBar);