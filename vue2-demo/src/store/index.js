/*
 * @Author: Jackie
 * @Date: 2023-06-22 11:38:10
 * @LastEditTime: 2023-06-22 13:37:36
 * @LastEditors: Jackie
 * @Description: 状态管理
 * @FilePath: /vue2-demo/src/store/index.js
 * @version: 
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import state from './state';
import mutations from './mutation';
import actions from './action';
import getters from './getter';
// 引入用户模块数据
import user from './modules/user';

export default new Vuex.Store({
  // state: {
  //   name: "dyh",
  //   names: 'hao',
  //   decs: "描述内容",
  //   num: 0,
  // },
  // getters: {
  //   getUserName(state){
  //     return `${state.name} - ${state.names}`
  //   }
  // },
  // // 同步
  // mutations: {
  //   addNum(state, num) {
  //     state.num += num;
  //   },
  //   addNum2(state, num) {
  //     setTimeout(()=>{
  //       state.num += num;
  //     },1000)
  //   }
  // },
  // // 异步
  // actions: {
  //   // addNumSync(context,n){
  //   addNumSync({ commit }, n) {
  //     setTimeout(() => {
  //       commit('addNum', n);
  //     }, 1000);
  //   }
  // },
  state,//初始状态
  mutations,//自定义方法 同步操作
  actions,//调用mutations方法 异步
  getters,//计算属性
  modules: {
    user
  },
});
