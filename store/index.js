// store.js
import { createStore } from 'vuex';  // Vue 3 中的 vuex 模块导入方式

const store = createStore({
  state: {
    WId: "1"
  },
  getters: {
    getWId: (state) => {
      return state.WId;
    }
  },
  mutations: {
    updateWId: (state, newValue) => {
      state.WId = newValue;
    }
  },
  actions: {
    fetchData: (context) => {
      // 处理异步操作并更新 WId
      const newData = "new data";
      context.commit('updateWId', newData);
    }
  }
});

export default store;
