// globalMethods.js
import zhCnTranslations from '@/lang/zh-Hans.js';
import enUsTranslations from '@/lang/en.js';

function getCurrentLanguage() {
  return uni.getStorageSync('lang');
}

function translate(key) {
  const currentLocale = getCurrentLanguage(); // 当前语言，可根据自己需求进行设置
  const translations = {
    'zh-Hans': zhCnTranslations,
    'en': enUsTranslations,
  };

  return translations[currentLocale][key];
}

const globalMethods = {
  // 获取当前日期的年月日
  getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  },
  // 获取一周前的时间
  getWeekDate() {
    const now = new Date();
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const year = oneWeekAgo.getFullYear();
    const month = String(oneWeekAgo.getMonth() + 1).padStart(2, '0');
    const day = String(oneWeekAgo.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  },
  // 获取一月前的时间
  getMouthDate() {
    const now = new Date();
    const oneMonthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
    const year = oneMonthAgo.getFullYear();
    const month = String(oneMonthAgo.getMonth() + 1).padStart(2, '0');
    const day = String(oneMonthAgo.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  },
  // 获取三个月前的时间
  getMouthsDate() {
    const now = new Date();
    const oneMonthAgo = new Date(now.getFullYear(), now.getMonth() - 3, now.getDate());
    const year = oneMonthAgo.getFullYear();
    const month = String(oneMonthAgo.getMonth() + 1).padStart(2, '0');
    const day = String(oneMonthAgo.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  },
  // 判断是否为手机号码
  isPhoneNumber(value) {
    const reg = /^1[3456789]\d{9}$/;
    return reg.test(value);
  },
  // 将时间戳转换为指定格式的日期字符串
  formatDate(timestamp, format = 'YYYY-MM-DD HH:mm:ss') {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    // ... 根据 format 参数进行格式化输出
    return formattedDate;
  },
  translate(key) {
    return translate(key);
  },
  // ... 在这里可以定义更多通用方法
};

export default globalMethods;
