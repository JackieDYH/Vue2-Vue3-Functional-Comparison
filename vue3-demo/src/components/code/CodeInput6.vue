<!--
 * @Author: Jackie
 * @Date: 2023-12-22 14:16:24
 * @LastEditTime: 2023-12-22 14:21:53
 * @LastEditors: Jackie
 * @Description: 5 版本GPT优化版 - 中间删除继续输入 over
 * @FilePath: /vue3-demo/src/components/code/CodeInput6.vue
 * @version: 
-->
<template>
  <div class="verification-container">
    <!-- 使用v-for循环生成输入框 -->
    <input
      v-for="(code, index) in verificationCodes"
      :key="index"
      v-model="verificationCodes[index]"
      @input="handleInput(index)"
      @keydown="handleKeyDown(index)"
      @paste="handlePaste"
      ref="inputFieldRef"
      maxlength="1"
      class="verification-input"
    />
  </div>
</template>

<script setup>
import { ref, defineEmits, getCurrentInstance } from 'vue';

const emits = defineEmits(['emailCode']);
const { proxy } = getCurrentInstance();
const verificationCodes = ref(['', '', '', '', '', '']);
const inputFieldRef = ref(null);

// 处理单个输入框的输入事件
const handleInput = (index) => {
  const value = verificationCodes.value[index];

  // 如果输入值不为空且不是最后一个输入框，则聚焦到下一个输入框
  if (value && index < verificationCodes.value.length - 1) {
    const nextInput = inputFieldRef.value[index + 1];
    if (nextInput) {
      nextInput.focus();
    }
  }

  // 如果当前输入框非空，则清空下一个输入框
  if (value && index < verificationCodes.value.length - 1) {
    verificationCodes.value[index + 1] = '';
  }

  // 如果所有输入框都已输入，则触发emailCode事件
  if (verificationCodes.value.join('').length === 6) {
    emits('emailCode', verificationCodes.value.join(''));
  }
};

// 处理键盘按键事件，主要用于处理Backspace键
const handleKeyDown = (index) => {
  if (
    event.key === 'Backspace' &&
    !verificationCodes.value[index] &&
    index > 0
  ) {
    // 如果按下Backspace键且当前输入框为空且不是第一个输入框，则聚焦到上一个输入框
    const prevInput = inputFieldRef.value[index - 1];
    if (prevInput) {
      prevInput.focus();
    }
  }
};

// 处理粘贴事件，将剪贴板中的文本粘贴到输入框中
const handlePaste = (event) => {
  const clipboardData = event.clipboardData || window.clipboardData;
  const pastedText = clipboardData.getData('text');

  // 截取前6个字符并分割成数组
  const codes = pastedText.trim().substring(0, 6).split('');

  // 更新输入框的值
  for (
    let i = 0;
    i < Math.min(codes.length, verificationCodes.value.length);
    i++
  ) {
    verificationCodes.value[i] = codes[i];
  }

  // 确保在更新DOM后设置焦点，聚焦到最后一个输入框
  const lastInput = inputFieldRef.value[verificationCodes.value.length - 1];
  if (lastInput) {
    lastInput.focus();
  }
};
</script>

<style lang="scss" scoped>
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
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px #007bff;
  }
  &:last-child {
    margin-right: 0;
  }
}
</style>
