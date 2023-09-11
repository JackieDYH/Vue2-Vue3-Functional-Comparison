<!--
 * @Author: Jackie
 * @Date: 2023-08-24 14:18:05
 * @LastEditTime: 2023-09-11 14:58:21
 * @LastEditors: Jackie
 * @Description: code输入框 - 可以使用
 * @FilePath: /vue3-demo/src/components/code/CodeInput4.vue
 * @version: 
-->
<template>
  <div class="verification-container">
    <input
      v-for="(code, index) in verificationCodes"
      :key="index"
      v-model="verificationCodes[index]"
      @input="handleInput(index, $event)"
      @keydown="handleKeyDown(index, $event)"
      maxlength="1"
      class="verification-input"
    />
  </div>
</template>
<script setup>
import { ref, defineProps, defineEmits, nextTick } from 'vue';
const emits = defineEmits(['emailCode']);
const verificationCodes = ref(['', '', '', '', '', '']);

const handleInput = (index, event) => {
  const value = event.target.value;
  verificationCodes.value[index] = value;

  // 判断是否输入完成
  if (verificationCodes.value.join('').length === 6) {
    emits('emailCode', verificationCodes.value.join(''));
  }

  // 自动跳到下一个输入框
  if (value && index < verificationCodes.value.length - 1) {
    const nextInput = event.target.nextElementSibling;
    if (nextInput) {
      nextTick(() => {
        nextInput.focus();
      });
    }
  }
};
const handleKeyDown = (index, event) => {
  // 处理删除操作
  if (event.key === 'Backspace' && !event.target.value && index > 0) {
    const prevInput = event.target.previousElementSibling;
    if (prevInput) {
      nextTick(() => {
        prevInput.focus();
      });
    }
  }
};
</script>
<style lang="less" scoped>
.verification-container {
  display: flex;
}

.verification-input {
  width: 54px;
  height: 54px;
  margin-right: 30px;
  text-align: center;
  font-size: 20px;
  border: 1px solid #ebebeb;
  border-radius: 5px;
  &:last-child {
    margin-right: 0;
  }
}

.verification-input:focus {
  outline: none;
  // border-color: #007bff;
  // box-shadow: 0 0 5px #007bff;
}
</style>
