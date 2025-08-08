<template>
  <view class="content">
    <view class="padding">
      <lsj-upload
        childId="upload1"
        :width="uploadOptions.width"
        :height="uploadOptions.height"
        :option="uploadOptions.option"
        :toBase="uploadOptions.toBase"
        :size="uploadOptions.size"
        :count="uploadOptions.count"
        :formats="uploadOptions.formats"
        :debug="uploadOptions.debug"
        :instantly="uploadOptions.instantly"
        :distinct="uploadOptions.distinct"
        @change="onChange"
        @progress="onprogress"
        @uploadEnd="onuploadEnd"
        @permissionBefore="permissionBefore"
        @permissionFail="onPermissionFail"
      >
        <view class="btn" :style="{ width: uploadOptions.width, height: uploadOptions.height }">{{$t('selectfile')}}</view>
      </lsj-upload>
    </view>
  </view>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useTabBar } from '@/composables/useTabBar.js'; 

useTabBar();

const tabIndex = ref(0);

const uploadOptions = reactive({
  option: {
    url: 'http://hl.jw.com/dropbox/document/upload',
    name: 'file',
    header: {
      Authorization: 'bearer aa',
      uid: '27',
      accountid: '27',
    },
    formData: {},
  },
  toBase: false,
  distinct: false,
  instantly: true,
  width: '180rpx',
  height: '180rpx',
  formats: '',
  size: 300,
  count: 5,
  multiple: true,
  debug: false,
});

const files = ref(new Map());
const wxFiles = ref([]);

// 文件上传结束回调
function onuploadEnd(item) {
  console.log(`${item.name} 已上传结束，上传状态 = ${item.type}`);
  files.value.set(item.name, item);

  if (item['responseText']) {
    console.log('演示服务器返回的字符串 JSON 转 Object 对象');
    files.value.get(item.name).responseText = JSON.parse(item.responseText);
  }

  // 针对微信小程序做兼容
  if (process.env.UNI_PLATFORM === 'mp-weixin') {
    wxFiles.value = [...files.value.values()];
  }
}
// 权限前置处理
function permissionBefore({ permission, message }) {
  console.log('权限前置处理', permission, message);
}

// 权限失败处理
function onPermissionFail({ permission, message, result }) {
  console.log('权限失败处理', permission, message, result);
}

// 文件选择回调
function onChange(files,childId) {
			console.log('组件childId',files,childId);
			
		}
function onprogress(item,childId) {
			console.log('打印对象',item,childId);
			
		}
</script>

<style scoped>
.content {
  padding: 20rpx;
}
.header {
  font-size: 32rpx;
  text-align: center;
  font-weight: bold;
  margin-bottom: 20rpx;
}
.tab {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20rpx;
}
.padding {
  padding: 20rpx;
}
.btn {
  display: inline-block;
  background-color: #007aff;
  color: #fff;
  text-align: center;
  line-height: 100rpx;
}
</style>