/*
 * @Author: Jackie
 * @Date: 2023-07-24 16:34:03
 * @LastEditTime: 2023-07-24 16:55:30
 * @LastEditors: Jackie
 * @Description: user pinia
 * @FilePath: /vue3-demo-pinia/src/store/user.js
 * @version:
 */
import { defineStore } from 'pinia';
import { toRefs, ref, reactive, computed } from 'vue';

export const useUserStore = defineStore(
  'user',
  () => {
    // 状态
    const state = reactive({
      name: 'jackie',
      age: 18
    });
    const num = ref(0);

    // 计算
    const fullName = () => state.name + '' + state.age;
    const Age = computed(() => `年龄：${state.age}-${num.value}岁`);

    // 修改
    const setName = (name) => (state.name = name);
    const setAge = (age) => (state.age += age);
    const addNum = () => (num.value += 1);

    return {
      ...toRefs(state),
      num,
      fullName,
      Age,
      setName,
      setAge,
      addNum
    };
  },
  {
    persist: {
      enabled: true, // 开启缓存  默认会存储在本地localstorage
      storage: sessionStorage, // 缓存使用方式
      paths: [] // 需要缓存键
      // strategies: [ //自定义key和存储方式
      //   {
      //     key: 'indexStore',
      //     storage: localStorage
      //   }
      // ]
    }
  }
);
