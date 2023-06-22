//异步操作mutation的方法
export default {
    // isLoginSync({ commit }, {value,key}) {
    isLoginSync({ commit }, value) {
        commit("setisLogin", value);
    },
    addNumSync2({ commit }, n) {
        setTimeout(() => {
          commit('addNum', n);
        }, 1000);
      }
};