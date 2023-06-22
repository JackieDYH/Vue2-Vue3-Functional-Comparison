/*
 * @Author: Jackie
 * @Date: 2023-06-22 13:30:03
 * @LastEditTime: 2023-06-22 13:34:07
 * @LastEditors: Jackie
 * @Description: action
 * @FilePath: /vue2-demo/src/store/action.js
 * @version: 
 */
//异步操作mutation的方法
export default {
  // addNumSync(context,n){
  addNumSync({ commit }, n) {
    setTimeout(() => {
      commit('addNum', n);
    }, 1000);
  }
};