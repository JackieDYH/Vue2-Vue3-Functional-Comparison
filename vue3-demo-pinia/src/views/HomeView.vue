<!--
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2023-07-24 13:43:34
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
    <p>Double count is {{ store.double }}</p>
    <p>{{ store }}</p>
    <!-- <p>{{ store.increment }}</p>
    <p>{{ increment }}</p> -->
    <button @click="store.increment">store.Increment</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useCounterStore } from '@/store/counter';
const store = useCounterStore();
// const { count } = store; //失去了响应式
const { count } = storeToRefs(store);
onMounted(() => {
  console.log(count);
});
</script>
