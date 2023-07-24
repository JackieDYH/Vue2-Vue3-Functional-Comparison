<!--
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2023-07-24 17:14:53
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue3-demo-pinia/src/views/HomeView.vue
 * @version: 
-->
<template>
  <div class="home">
    <h1>This is an home page</h1>
    <p>{{ store.count }}</p>
    <p>{{ count }}</p>
    <p>Double count is {{ store.double }}-{{ store.userNum }}</p>
    <p>{{ store }}</p>
    <!-- <p>{{ store.increment }}</p>
    <p>{{ increment }}</p> -->
    <button @click="store.increment">store.Increment</button>
    <hr />
    <p>
      {{ name }}-{{ age }}-{{ num }}-{{ userStore.fullName() }}-{{
        userStore.Age
      }}-{{ userStore.userCount }}
    </p>
    <button @click="userStore.setName('dyh')">setName</button>
    <button @click="userStore.setAge(1)">setAge</button>
    <button @click="userStore.addNum()">addNum</button>
    <p>{{ userStore }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useCounterStore } from '@/store/counter';
import { useUserStore } from '@/store/user';
const store = useCounterStore();
const userStore = useUserStore();
// const { count } = store; //失去了响应式
const { count } = storeToRefs(store);
const { name, age, num } = storeToRefs(userStore);
onMounted(() => {
  console.log(count);
  console.log(name.value, age.value, num.value);
});
</script>
