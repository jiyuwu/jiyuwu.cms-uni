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

// 获取当前日期的年月日
export function getCurrentDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// 获取一周前的时间
export function getWeekDate() {
  const now = new Date();
  const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const year = oneWeekAgo.getFullYear();
  const month = String(oneWeekAgo.getMonth() + 1).padStart(2, '0');
  const day = String(oneWeekAgo.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// 获取一月前的时间
export function getMonthDate() { // 修正了函数名拼写错误 Mouth -> Month
  const now = new Date();
  const oneMonthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
  const year = oneMonthAgo.getFullYear();
  const month = String(oneMonthAgo.getMonth() + 1).padStart(2, '0');
  const day = String(oneMonthAgo.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// 获取三个月前的时间
export function getThreeMonthsDate() { // 修正了函数名拼写错误 Mouths -> ThreeMonths
  const now = new Date();
  const threeMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 3, now.getDate());
  const year = threeMonthsAgo.getFullYear();
  const month = String(threeMonthsAgo.getMonth() + 1).padStart(2, '0');
  const day = String(threeMonthsAgo.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// 判断是否为手机号码
export function isPhoneNumber(value) {
  // 正则表达式建议添加 ^ 和 $ 来确保完全匹配
  const reg = /^1[3-9]\d{9}$/;
  return reg.test(value);
}

// 将时间戳转换为指定格式的日期字符串
export function formatDate(timestamp, format = 'YYYY-MM-DD HH:mm:ss') {
  const date = new Date(timestamp);
  const map = {
    'YYYY': date.getFullYear(),
    'MM': String(date.getMonth() + 1).padStart(2, '0'),
    'DD': String(date.getDate()).padStart(2, '0'),
    'HH': String(date.getHours()).padStart(2, '0'),
    'mm': String(date.getMinutes()).padStart(2, '0'),
    'ss': String(date.getSeconds()).padStart(2, '0')
  };
  return format.replace(/YYYY|MM|DD|HH|mm|ss/g, (matched) => map[matched]);
}