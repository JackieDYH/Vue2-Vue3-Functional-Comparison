/*
 * @Author: Jackie
 * @Date: 2023-06-22 13:30:19
 * @LastEditTime: 2023-06-22 13:33:33
 * @LastEditors: Jackie
 * @Description: getter
 * @FilePath: /vue2-demo/src/store/getter.js
 * @version: 
 */
// 计算属性
export default {
  getUser: state => state.name,
  getUserName(state) {
    return `${state.name} - ${state.names}`;
  }
};