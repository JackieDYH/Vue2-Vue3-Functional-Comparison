<!--
 * @Author: Jackie
 * @Date: 2023-06-26 10:05:42
 * @LastEditTime: 2023-06-26 10:05:44
 * @LastEditors: Jackie
 * @Description: 4位验证吗
 * @FilePath: /vue2-demo/src/components/code/CodeInput4.vue
 * @version: 
-->
<!--四位验证码输入框组件-->
<template>
  <div class="input-box">
    <div
      class="input-content"
      @keydown="keydown($event)"
      @keyup="keyup($event)"
      @progress="keyup"
      @paste="paste"
      @mousewheel="mousewheel"
      @input="inputEvent"
    >
      <input
        max="9"
        min="0"
        maxlength="1"
        data-index="0"
        v-model="input[0]"
        type="tel"
        ref="firstinput"
      />
      <template v-for="(itme, index) in isNumber">
        <input
          :key="index"
          v-if="index > 0"
          max="9"
          min="0"
          maxlength="1"
          :data-index="index"
          v-model="input[index]"
          type="tel"
        />
      </template>
    </div>
    <div class="clean"><span @click.stop="onClean">清除</span></div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      pasteResult: [],
    };
  },
  props: {
    code: {
      typeof: Array,
      default: [],
    },
    isNumber: {
      typeof: Number,
      default: 10, //输入框个数
    },
  },
  computed: {
    input() {
      if (
        this.code &&
        Array.isArray(this.code) &&
        this.code.length === this.isNumber
      ) {
        return this.code;
      } else if (/^\d{`${this.isNumber}`}$/.test(this.code.toString())) {
        return this.code.toString().split("");
      } else if (this.pasteResult.length === this.isNumber) {
        return this.pasteResult;
      } else {
        return new Array(this.isNumber);
      }
    },
  },

  methods: {
    // 解决一个输入框输入多个字符
    inputEvent(e) {
      //输入框
      var index = e.target.dataset.index * 1;
      var el = e.target;
      el.value = el.value
        .replace(/Digit|Numpad/i, "")
        .replace(/1/g, "")
        .slice(0, 1);
      this.$set(this.input, index, el.value);
    },
    keydown(e) {
      //键盘按下
      var index = e.target.dataset.index * 1;
      var el = e.target;
      if (e.key === "Backspace") {
        if (this.input[index].length > 0) {
          this.$set(this.input, index, "");
        } else {
          if (el.previousElementSibling) {
            el.previousElementSibling.focus();
            this.$set(this.input, index - 1, "");
          }
        }
      } else if (e.key === "Delete") {
        if (this.input[index].length > 0) {
          this.$set(this.input, index, "");
        } else {
          if (el.nextElementSibling) {
            this.$set(this.input, (index = 1), "");
          }
        }
        if (el.nextElementSibling) {
          el.nextElementSibling.focus();
        }
      } else if (e.key === "Home") {
        el.parentElement.children[0] && el.parentElement.children[0].focus();
      } else if (e.key === "End") {
        el.parentElement.children[this.input.length - 1] &&
          el.parentElement.children[this.input.length - 1].focus();
      } else if (e.key === "ArrowLeft") {
        if (el.previousElementSibling) {
          el.previousElementSibling.focus();
        }
      } else if (e.key === "ArrowRight") {
        if (el.nextElementSibling) {
          el.nextElementSibling.focus();
        }
      } else if (e.key === "ArrowUp") {
        if (this.input[index] * 1 < 9) {
          this.$set(this.input, index, (this.input[index] * 1 + 1).toString());
        }
      } else if (e.key === "ArrowDown") {
        if (this.input[index] * 1 > 0) {
          this.$set(this.input, index, (this.input[index] * 1 - 1).toString());
        }
      }
    },
    keyup(e) {
      //键盘弹开
      console.log(e, "==============================");
      var index = e.target.dataset.index * 1;
      var el = e.target;
      // 解决输入e的问题
      el.value = el.value
        .replace(/Digit|Numpad/i, "")
        .replace(/1/g, "")
        .slice(0, 1);
      alert(e.code);
      if (/Digit|Numpad/i.test(e.code)) {
        // 必须在这里符直，否则输入框会是空值
        this.$set(this.input, index, e.code.replace(/Digit|Numpad/i, "")); //获取值是多少
        console.log(this.input, "--------键盘弹开-----------");
        let result = this.input.join("").trim();
        this.$emit("returnresult", result); //返回结果

        el.nextElementSibling && el.nextElementSibling.focus();
        if (index === this.isNumber - 1) {
          if (this.input.join("").length === this.isNumber) {
            document.activeElement.blur();
            this.$emit("complete", this.input);
          }
        }
      } else {
        if (this.input[index] === "") {
          this.$set(this.input, index, "");
        }
      }
    },
    mousewheel(e) {
      //滚动事件
      var index = e.target.dataset.index;
      if (e.wheelDelta > 0) {
        if (this.input[index] * 1 < 9) {
          this.$set(this.input, index, (this.input[index] * 1 + 1).toString());
        }
      } else if (e.wheelDelta < 0) {
        if (this.input[index] * 1 > 0) {
          this.$set(this.input, index, (this.input[index] * 1 - 1).toString());
        }
      } else if (e.key === "Enter") {
        if (this.input.join("").length === this.isNumber) {
          document.activeElement.blur();
          this.$emit("complete", this.input);
        }
      }
    },
    paste(e) {
      // 当进行粘贴时
      e.clipboardData.items[0].getAsString((str) => {
        if (str.toString().length === this.isNumber) {
          this.pasteResult = str.split("");
          document.activeElement.blur();
          let result = this.pasteResult.join("").trim();
          this.$emit("returnresult", result); //返回结果
        } else {
          // 如果粘贴内容不合规，清除所有内容
          this.input[0] = new Array(this.isNumber);
        }
      });
    },
    onClean() {
      //清除
      this.pasteResult = []; //清除所有内容
      this.$emit("complete", this.input);
      this.$refs.firstinput.focus();
      this.$emit("returnresult", ""); //返回结果
    },
  },
  mounted() {
    // 等待dom渲染完成，在执行focus,否则无法获取到焦点
    this.$nextTick(() => {
      this.$refs.firstinput.focus();
    });
  },
};
</script>
 
<style lang="scss" scope>
.input-box {
  width: 100%;
  position: relative;
  padding: 10px 0;
  .input-content {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    input {
      color: inherit;
      font-family: inherit;
      border: 0;
      outline: 0;
      border: 1px solid #eee;
      height: 25px;
      width: 25px;
      font-size: 18px;
      text-align: center;
      overflow: hidden;
      outline: none;
      background: none;
    }
  }
  .clean {
    width: 100%;
    text-align: right;
    color: #0e88ef;
    font-size: 12px;
    margin-top: 20px;
  }
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  appearance: none;
  margin: 0;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"] {
  -moz-appearance: textfield;
  -webkit-appearance: none;
  margin: 0;
}
</style>