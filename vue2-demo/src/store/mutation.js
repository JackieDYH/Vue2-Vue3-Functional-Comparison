//修改状态的方法
export default {
  addNum(state, num) {
    state.num += num;
  },
  addNum2(state, num) {
    setTimeout(() => {
      state.num += num;
    }, 1000);
  }
};