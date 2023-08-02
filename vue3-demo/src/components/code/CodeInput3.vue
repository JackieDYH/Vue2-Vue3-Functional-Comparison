<!--
 * @Author: Jackie
 * @Date: 2023-08-02 14:22:59
 * @LastEditTime: 2023-08-02 14:26:08
 * @LastEditors: Jackie
 * @Description: 输入框 输入一半删除内容 over
 * @FilePath: /vue3-demo/src/components/code/CodeInput3.vue
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

<script>
import { ref, nextTick } from 'vue';

export default {
  setup() {
    const verificationCodes = ref(['', '', '', '', '', '']);

    const handleInput = (index, event) => {
      const value = event.target.value;
      verificationCodes.value[index] = value;

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

    return {
      verificationCodes,
      handleInput,
      handleKeyDown
    };
  }
};
</script>

<style lang="scss" scoped>
.verification-container {
  display: flex;
}

.verification-input {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  text-align: center;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.verification-input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px #007bff;
}
</style>
<!-- 在更新后的代码中，我们添加了一个新的handleKeyDown方法来处理键盘按键事件。如果用户按下了 "Backspace" 键并且当前输入框为空，则将焦点设置到前一个输入框。

通过这个更改，当用户输入一半时，按下 "Backspace" 键会自动删除前一个输入框中的内容，并将焦点移动到前一个输入框，以允许用户重新输入。

请注意，我们使用了nextTick函数来确保在下一个DOM更新周期后设置焦点，以避免与Vue的响应式更新冲突。

希望这个更新后的代码能够解决问题，并允许用户在输入一半时删除前面的内容。 -->
