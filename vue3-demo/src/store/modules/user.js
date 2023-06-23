export default {
    namespaced: true,
    state: {
        isLogin: true,
        name: 'dyh',
        name2: 'hao',
        num: 20,
    },
    getters: {
        getNum: (state) => {
            return state.num;
        },
        getUserInfo: state => `${state.name}-${state.name2}`
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
        serNumSync({ commit },n) {
            setTimeout(() => {
                commit('setNum', n);
            }, 1000);
        },
    },
};