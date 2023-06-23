<!--
 * @Author: Jackie
 * @Date: 2023-06-22 11:39:03
 * @LastEditTime: 2023-06-23 13:50:02
 * @LastEditors: Jackie
 * @Description: vue2-vue3的方式
 * @FilePath: /vue3-demo/src/views/HomeView.vue
 * @version: 
-->
<template>
  <div class="home">
    <ViewTx :title="title" :desc="desc" :num="num" @addNum="add"/>
    <ViewTx2/>
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

import ViewTx from "@/components/zujiantongxin/ViewTx.vue"
import ViewTx2 from "@/components/zujiantongxin/ViewTx2.vue"

  const title = ref("首页面");
  const desc = ref("父组件传递的数据");
  const num = ref(0);
  const add = () => {
    num.value += 1;
  }
    



</script>

<!-- <script>
// 父子组件通信
import ViewTx from "@/components/zujiantongxin/ViewTx.vue"
import ViewTx2 from "@/components/zujiantongxin/ViewTx2.vue"
export default {
  name: "HomeView",
  components: {
    ViewTx,
    ViewTx2,
  },
  data(){
    return{
      title:"父组件标题内容",
      desc:"传递的内容",
      num:12312
    }
  },
  methods:{
    add(k){
      this.num +=k;
    }
  }

};
</script> -->
