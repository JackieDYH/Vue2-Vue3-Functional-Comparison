<!--
 * @Author: Jackie
 * @Date: 2023-06-26 09:50:08
 * @LastEditTime: 2023-06-26 10:31:42
 * @LastEditors: Jackie
 * @Description: 验证吗输入框
 * @FilePath: /vue2-demo/src/views/CodeInput.vue
 * @version: 
-->
<template>
  <div>
    <Code></Code>
    <Code2></Code2>
    <Code3></Code3>
    <Code4></Code4>
  </div>
</template>

<script>
import Code from '@/components/code/CodeInput.vue'
import Code2 from '@/components/code/CodeInput2.vue'
import Code3 from '@/components/code/CodeInput3.vue'
import Code4 from '@/components/code/CodeInput4.vue'
export default {
    name:"CodeInput",
    components:{
        Code,
        Code2,
        Code3,
        Code4,
    }
}
</script>

<style>

</style>