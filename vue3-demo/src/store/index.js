/*
 * @Author: Jackie
 * @Date: 2023-06-22 11:39:03
 * @LastEditTime: 2023-06-23 16:23:41
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue3-demo/src/store/index.js
 * @version: 
 */
import { createStore } from "vuex";

import user from "./modules/user";


export default createStore({
  state: {
    isLogin1: true,
    name1: 'dyh1',
    name12: 'hao1',
    num1: 22,
  },
  getters: {
    getNum1: (state) => {
      return state.num1;
  },
  getUserInfo1: state => `${state.name1}-${state.name12}`
  },
  mutations: {
    setIsLogin1(state, value) {
      state.isLogin1 = value;
  },
  setNum1(state, value) {
      state.num1 += value;
  }
  },
  actions: {
    serNumSync1({ commit },n) {
      setTimeout(() => {
          commit('setNum1', n);
      }, 1000);
  },
  },
  modules: {
    user
  },
});
