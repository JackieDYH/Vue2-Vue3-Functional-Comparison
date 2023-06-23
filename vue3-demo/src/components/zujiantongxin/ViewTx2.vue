<!--
 * @Author: Jackie
 * @Date: 2023-06-23 13:45:55
 * @LastEditTime: 2023-06-23 15:48:35
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue3-demo/src/components/zujiantongxin/ViewTx2.vue
 * @version: 
-->
<template>
  <div>
    <p>兄弟组件通信 $Bus方式</p>
    <button @click="edit">改变兄弟组件中内容</button>
  </div>
</template>

<script setup>
import {
  inject,
  defineProps,
  ref,
  reactive,
  onMounted,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
const $bus = inject("$bus");

const edit = () => {
  $bus.emit("editDecs", "我兄弟传递给我的值6");
};
</script>
  
<!-- <script>
  export default {
      name:"ViewTx2",
      methods:{
          edit(){
              this.$bus.emit("editDecs",'我兄弟传递给我的值6');
          }
      }
  }
</script> -->
  
  <style>
</style>