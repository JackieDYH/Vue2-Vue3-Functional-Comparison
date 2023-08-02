<!--
 * @Author: Jackie
 * @Date: 2023-06-26 10:14:23
 * @LastEditTime: 2023-08-02 14:33:13
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue3-demo/src/components/code/CodeInput.vue
 * @version: 
-->
<template>
  <div class="custom-class">
    <!-- <input
        v-for="(item, index) in nums"
        :key="index"
        v-model="nums[index]"
        maxlength="1"
        :ref="`input${index}`"
        @keydown="onKeyDown(index, $event)"
        @input="handleInput(index)"
        @focus="onFocus(index)"
      /> -->
    <input
      v-model="nums[0]"
      maxlength="1"
      ref="input0"
      @keydown="onKeyDown(0, $event)"
      @input="handleInput(0)"
      @focus="onFocus(0)"
    />
    <input
      v-model="nums[1]"
      maxlength="1"
      ref="input1"
      @keydown="onKeyDown(1, $event)"
      @input="handleInput(1)"
      @focus="onFocus(1)"
    />
    <input
      v-model="nums[2]"
      maxlength="1"
      ref="input2"
      @keydown="onKeyDown(2, $event)"
      @input="handleInput(2)"
      @focus="onFocus(2)"
    />
    <input
      v-model="nums[3]"
      maxlength="1"
      ref="input3"
      @keydown="onKeyDown(3, $event)"
      @input="handleInput(3)"
      @focus="onFocus(3)"
    />
    <input
      v-model="nums[4]"
      maxlength="1"
      ref="input4"
      @keydown="onKeyDown(4, $event)"
      @input="handleInput(4)"
      @focus="onFocus(4)"
    />
    <input
      v-model="nums[5]"
      maxlength="1"
      ref="input5"
      @keydown="onKeyDown(5, $event)"
      @input="handleInput(5)"
      @focus="onFocus(5)"
    />
  </div>
</template>

<script setup>
import {
  defineProps,
  getCurrentInstance,
  reactive,
  ref,
  nextTick,
  watch,
  computed
} from 'vue';
const internalInstance = getCurrentInstance();

defineProps({
  isShowSecuityDia: Boolean
});

let nums = reactive(['', '', '', '', '', '']);
// const currentInput = ref(0);
// const input0 = ref(null);
// const input1 = ref(null);
// const input2 = ref(null);
// const input3 = ref(null);
// const input4 = ref(null);
// const input5 = ref(null);

// nextTick(() => {
//   // input0.value.focus();
//   currentInput.value++;
//   // console.log(["input" + currentInput.value].value, "123");
//   // console.log(input0.value.value);
// });

// watch(
//   nums,
//   () => {
//     console.log(currentInput.value, 888);
//     if (currentInput.value === 1) {
//       currentInput.value += 1;
//       input1.value.focus();
//     } else if (currentInput.value === 2) {
//       currentInput.value += 1;
//       input2.value.focus();
//     } else if (currentInput.value === 3) {
//       currentInput.value += 1;
//       input3.value.focus();
//     } else if (currentInput.value === 4) {
//       currentInput.value += 1;
//       input4.value.focus();
//     } else if (currentInput.value === 5) {
//       currentInput.value += 1;
//       input5.value.focus();
//     }
//   },
//   { deep: true }
// );

// const emits = defineEmits(["changeRemDialog"]);
// const confirmSubmit = () => {
//   let code = nums.join("");
//   nums = reactive(["", "", "", "", "", ""]);
//   emits("changeRemDialog", code);
// };

let activeIndex = 0;

const onKeyDown = (index, e) => {
  // console.log(index, e, activeIndex, 888);
  switch (e.keyCode) {
    case 8: // backspace键
      e.preventDefault();
      if (nums[index]) {
        nums[index] = '';
        if (index > 0) {
          activeIndex = index - 1;
          const prevInput = internalInstance.ctx.$refs[`input${index - 1}`];
          prevInput.focus();
        }
      } else if (index === 0) {
        activeIndex = 0;
      }
      break;
    default:
      break;
  }
};

const handleInput = (index) => {
  // console.log(index, activeIndex, 999);
  if (nums[index]) {
    activeIndex = index;
    if (index < 5) {
      const nextInput = internalInstance.ctx.$refs[`input${index + 1}`];
      nextInput.focus();
    }
  }
};

const onFocus = (index) => {
  activeIndex = index;
};

// const deleteLastNum = () => {
//   if (currentInput.value === 6) {
//     input5.value.focus();
//     currentInput.value + -1;
//   } else if (currentInput.value === 5) {
//     input4.value.focus();
//     currentInput.value + -1;
//   }
// };

// 把六个数字拼接成一个变量
const code = computed(() => {
  return nums.join('');
});
// console.log(code);
</script>
<style lang="scss" scoped>
.custom-class {
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    width: 75px;
    height: 75px;
    background: #ffffff;
    border: 1px solid #d9d9d9;
    border-radius: 12px;
    font-size: 40px;
    text-align: center;
    // caret-color: rgba(0, 0, 0, 0);
  }
}
</style>
