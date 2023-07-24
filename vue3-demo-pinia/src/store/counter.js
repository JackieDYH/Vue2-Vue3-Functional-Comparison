/*
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2023-07-24 11:24:44
 * @LastEditors: Jackie
 * @Description: pinia
 * @FilePath: /vue3-demo-pinia/src/store/counter.js
 * @version:
 */
import { defineStore } from 'pinia';

// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    double: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++;
    }
  },
  persist: {
    enabled: true, // 开启缓存  默认会存储在本地localstorage
    storage: sessionStorage, // 缓存使用方式
    paths: [] // 需要缓存键
  }
});

// 你可以认为 state 是 store 的数据 (data)，getters 是 store 的计算属性 (computed)，而 actions 则是方法 (methods)。
