<!--
 * @Author: Jackie
 * @Date: 2023-06-22 11:39:03
 * @LastEditTime: 2023-06-23 17:15:20
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue3-demo/src/views/AboutView.vue
 * @version: 
-->
<template>
  <div class="about">
    <h1>---------------主store中数据---------------</h1>
    <p>This is {{ $store.state.name1 }}-{{ $store.state.name12 }}</p>
    <p>This is {{ $store.getters.getUserInfo1 }}</p>
    <p v-show="$store.state.isLogin1">This is {{ $store.state.num1 }}</p>
    <button @click="$store.state.isLogin1 = !$store.state.isLogin1">
      {{ $store.state.isLogin1 ? "隐藏" : "显示" }}
    </button>
    <button @click="$store.commit('setNum1', 2)">num+2</button>
    <button @click="$store.dispatch('serNumSync1', 1)">num+1</button>

    <h1>---------------user-store中数据---------------</h1>
    <p>This is {{ $store.state.user.name }}-{{ $store.state.user.name2 }}</p>
    <p>This is {{ $store.getters["user/getUserInfo"] }}</p>
    <p v-show="$store.state.user.isLogin">
      This is {{ $store.state.user.num }}
    </p>
    <button @click="$store.state.user.isLogin = !$store.state.user.isLogin">
      {{ $store.state.user.isLogin ? "隐藏" : "显示" }}
    </button>
    <button @click="$store.commit('user/setNum', 2)">num+2</button>
    <button @click="$store.dispatch('user/serNumSync', 1)">num+1</button>

    <h1>---------------主store中数据方式二---------------</h1>
    <p>This is {{ name1 }}-{{ name12 }}</p>
    <p>
      This is {{ isLogin1 }}-{{ num1 }}-{{ getNum1 }}--{{ getNum1mapGetters }}
    </p>
    <button @click="ck">{{ isLogin1 ? "隐藏" : "显示" }}</button>
    <button @click="add(1)">num+1</button>
    <button @click="add2(2)">num+2</button>
    <button @click="serNumSync1(3)">num+3</button>
    <h1>---------------user-store中数据方式二---------------</h1>
    <p>This is {{ name }}-{{ name2 }}</p>
    <p>This is {{ isLogin }}-{{ num }}-{{ getNum }}</p>
    <button @click="ck4">{{ isLogin ? "隐藏" : "显示" }}</button>
    <button @click="add4(1)">num+1</button>
    <button @click="add44(2)">num+2</button>
    <button @click="userSerNumSync(4)">num+4</button>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore, mapState, mapGetters, mapMutations, mapActions } from "vuex";

const route = useRoute();
const store = useStore();
// 主
const name1 = computed(() => store.state.name1);
const name12 = computed(() => store.state.name12);
const isLogin1 = computed(() => store.state.isLogin1);
const num1 = computed(() => store.state.num1);
let getNum1 = computed(() => store.getters.getNum1);
const ck = () => {
  store.commit("setIsLogin1", !store.state.isLogin1);
};
const add = (num) => {
  store.commit("setNum1", num);
};
const add2 = (num) => {
  store.dispatch("serNumSync1", num);
};

const getNum1mapGetters = computed(
  mapGetters(["getNum1"]).getNum1.bind({ $store: store })
);
const serNumSync1 = mapActions(["serNumSync1"]).serNumSync1.bind({
  $store: store,
});

// user
const name = computed(() => store.state.user.name);
const name2 = computed(() => store.state.user.name2);
const isLogin = computed(() => store.state.user.isLogin);
const num = computed(() => store.state.user.num);
let getNum = computed(() => store.getters["user/getNum"]);
const ck4 = () => {
  store.commit("user/setIsLogin", !store.state.user.isLogin);
};
const add4 = (num) => {
  store.commit("user/setNum", num);
};
const add44 = (num) => {
  store.dispatch("user/serNumSync", num);
};

const userSerNumSync = mapActions('user',["serNumSync"]).serNumSync.bind({
  $store: store,
});

// export default {
//   name:'About',
//   setup(props, {emit, expose}) {
//   }
// }
</script>