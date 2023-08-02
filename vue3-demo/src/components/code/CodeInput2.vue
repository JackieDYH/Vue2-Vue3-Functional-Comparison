<!--
 * @Author: Jackie
 * @Date: 2023-08-02 14:11:22
 * @LastEditTime: 2023-08-02 14:21:25
 * @LastEditors: Jackie
 * @Description: 验证吗输入框 over
 * @FilePath: /vue3-demo/src/components/code/CodeInput2.vue
 * @version: 
-->
<template>
  <div class="verification-container">
    <input
      v-for="(code, index) in verificationCodes"
      :key="index"
      v-model="verificationCodes[index]"
      @input="handleInput(index, $event)"
      maxlength="1"
      class="verification-input"
    />
  </div>
</template>
<script>
import { ref } from 'vue';

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
          nextInput.focus();
        }
      }

      // 自动删除前面的内容
      if (!value && index > 0) {
        const prevInput = event.target.previousElementSibling;
        if (prevInput) {
          prevInput.focus();
        }
      }
    };

    return {
      verificationCodes,
      handleInput
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
<!-- 
在上面的示例中，我们使用v-for指令生成6个输入框，并将每个输入框的值绑定到verificationCodes数组中的对应索引位置。我们还使用@input事件监听输入框的输入，并调用handleInput方法处理输入事件。
在组件的逻辑部分，定义verificationCodes数组，并实现handleInput方法。
在上面的代码中，我们使用ref创建了一个名为verificationCodes的响应式数组，用于保存每个输入框的值。在handleInput方法中，我们更新对应索引位置的值，并根据输入的情况自动跳到下一个输入框或删除前面的内容。我们使用focus()方法将焦点设置到下一个或前一个输入框。 -->
