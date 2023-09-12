<!--
 * @Author: Jackie
 * @Date: 2023-08-24 14:18:05
 * @LastEditTime: 2023-09-12 11:03:37
 * @LastEditors: Jackie
 * @Description: code输入框 - 可以使用 - 黏贴版 直接填充
 * @FilePath: /vue3-demo/src/components/code/CodeInput5.vue
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
      @paste="handlePaste"
      ref="inputFieldRef"
      maxlength="1"
      class="verification-input"
    />
  </div>
</template>

<script setup>
import {
  ref,
  defineProps,
  defineEmits,
  nextTick,
  getCurrentInstance
} from 'vue';
const emits = defineEmits(['emailCode']);
const { proxy } = getCurrentInstance();
// proxy.$refs[`input${index - 1}`]
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
const inputFieldRef = ref(null);
const handlePaste = (event) => {
  const clipboardData = event.clipboardData || window.clipboardData;
  const pastedText = clipboardData.getData('text');
  const codes = pastedText.trim().substring(0, 6).split('');
  verificationCodes.value = codes.concat(Array(6 - codes.length).fill(''));

  // nextTick 方法来确保在更新 DOM 之后设置焦点。我们通过 $refs.inputField 引用最后一个输入框，并使用 focus 方法将焦点设置在最后一个输入框中
  nextTick(() => {
    console.log(inputFieldRef.value, proxy.$refs['inputFieldRef']);
    const lastInput = inputFieldRef.value[verificationCodes.value.length - 1];
    if (lastInput) {
      lastInput.focus();
    }
  });
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

<!-- 使用
  添加了一个 @paste 事件监听器，用于监听粘贴事件。当用户在输入框中按下快捷键粘贴时，将调用 handlePaste 方法。在该方法中，我们使用 event.clipboardData 或 window.clipboardData 获取剪贴板数据，并提取前 6 个字符作为验证码。然后，将这些验证码填充到 verificationCodes 数组中
<CodeInput @emailCode="emailCodeFun" />

const emailCodeFun = (val) => {
  console.log(val);
  emailCode.value = val;
};
-->
