import state from './state';
import mutations from './mutation';
import actions from './action';
import getters from './getter';

export default {
  namespaced:true,//开启命名空间
  state,
  mutations,
  actions,
  getters,
}