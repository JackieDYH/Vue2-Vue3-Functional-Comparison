<!--
 * @Author: Jackie
 * @Date: 2023-06-26 10:03:33
 * @LastEditTime: 2023-06-26 10:03:34
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue2-demo/src/components/code/CodeInput3.vue
 * @version: 
-->
<template>
  <div>
    <div class="code-input-main">
      <div
        class="code-input-main-item"
        v-for="(item, index) in codeList"
        :class="{ on: seat == index }"
        :key="index"
        @click="onClick(index)"
      >
        {{ code[index] || "" }}
      </div>
      <input
        class="code-input-input"
        ref="input"
        v-model="code"
        :maxlength="codeLength"
        type="tel"
      />
    </div>
    <div class="clean"><span @click.stop="onClean">清除</span></div>
  </div>
</template>
     
    <script>
export default {
  name: "VueVercode",
  props: {
    codeLength: {
      default: 10,
      type: Number,
    },
  },
  data() {
    return {
      codeList: [],
      code: "",
      seat: 0,
    };
  },
  mounted() {
    // 定义一个数组用于循环
    this.codeList = new Array(this.codeLength).fill("");
  },
  watch: {
    // 截取字符长度
    code() {
      if (this.code.length <= 0) {
        this.seat = 0;
      } else {
        this.seat += 1;
      }
      if (this.code.length > this.codeLength) {
        this.code = this.code.substring(0, this.codeLength);
      }
      this.$emit("returnresult", this.code);
    },
  },
  methods: {
    getCode() {
      return this.code;
    },
    onClean() {
      //清除
      this.code = "";
    },
    onClick(index) {
      this.seat = index;
    },
  },
};
</script>
<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0;
}

.code-input-main {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: relative;
  padding: 20px 0 0;
}

.code-input-input {
  height: 25px;
  width: 100%;
  position: absolute;
  border: none;
  outline: none;
  color: transparent;
  background-color: transparent;
  text-shadow: 0 0 0 transparent;
  caret-color: transparent;
  opacity: 0;
}

.code-input-main-item {
  width: 25px;
  height: 25px;
  line-height: 25px;
  margin-right: 5px;
  padding: 0;
  opacity: 0.8;
  border: solid #eee 1px;
  text-align: center;
  font-size: 14px;
  color: #323232;
}
.on {
  border: 1px solid #0e88ef;
}
.clean {
  width: 100%;
  box-sizing: border-box;
  text-align: right;
  color: #0e88ef;
  font-size: 12px;
  margin-top: 20px;
  padding: 0 10px;
}
</style>