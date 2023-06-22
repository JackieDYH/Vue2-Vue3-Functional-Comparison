<!--
 * @Author: Jackie
 * @Date: 2023-06-22 12:39:36
 * @LastEditTime: 2023-06-22 12:40:27
 * @LastEditors: Jackie
 * @Description: 兄弟组件通信 $Bus方式
 * @FilePath: /vue2-demo/src/components/zujiantongxin/ViewTx2.vue
 * @version: 
-->
<template>
  <div>
    <p>兄弟组件通信 $Bus方式</p>
    <button @click="edit">改变兄弟组件中内容</button>
  </div>
</template>

<script>
export default {
    name:"ViewTx2",
    methods:{
        edit(){
            this.$Bus.$emit("editDecs",'我兄弟传递给我的值');
        }
    }
}
</script>

<style>

</style>