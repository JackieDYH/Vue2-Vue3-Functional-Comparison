<!--
 * @Author: Jackie
 * @Date: 2023-06-22 11:38:10
 * @LastEditTime: 2023-06-22 12:26:08
 * @LastEditors: Jackie
 * @Description: 组件通信
 * @FilePath: /vue2-demo/src/views/HomeView.vue
 * @version: 
-->
<template>
  <div class="home">
    <ViewTx :title="title" :desc="desc" :num="num" @addNum="add"/>
    <ViewTx2/>
  </div>
</template>

<script>
// 父子组件通信
import ViewTx from "@/components/zujiantongxin/ViewTx.vue"
import ViewTx2 from "@/components/zujiantongxin/ViewTx2.vue"
export default {
  name: "HomeView",
  components: {
    ViewTx,
    ViewTx2
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
</script>
