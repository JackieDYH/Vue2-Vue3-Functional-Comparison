//修改状态的方法
export default {
  setisLogin(state, value) {
    state.isLogin = value;
  },
  addNum(state, num) {
    state.userInfo.num += num;
  },
  addNum2(state, num) {
    setTimeout(() => {
      state.userInfo.num += num;
    }, 1000);
  }
};
