/*
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2023-07-12 14:30:43
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /Vue2-Vue3-Functional-Comparison/vue3-demo/src/store/modules/user.js
 * @version:
 */
const LOCAL_KEY_PREFIX = 'user_';
export default {
  namespaced: true,
  state: {
    isLogin: true,
    name: 'dyh',
    name2: 'hao',
    num: 20
  },
  getters: {
    getNum: (state) => {
      return state.num;
    },
    getUserInfo: (state) => `${state.name}-${state.name2}`
  },
  mutations: {
    setIsLogin(state, value) {
      state.isLogin = value;
    },
    setNum(state, value) {
      state.num += value;
    }
  },
  actions: {
    serNumSync({ commit, dispatch, rootState }, n) {
      // let num = rootState.user.num;
      // dispatch('user/serNumSync');
      setTimeout(() => {
        commit('setNum', n);
      }, 1000);
    }
  }
};
