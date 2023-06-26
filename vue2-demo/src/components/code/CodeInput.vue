<!--
 * @Author: Jackie
 * @Date: 2023-06-26 09:56:20
 * @LastEditTime: 2023-06-26 10:01:07
 * @LastEditors: Jackie
 * @Description: 验证吗输入框
 * @FilePath: /vue2-demo/src/components/code/CodeInput.vue
 * @version: 
-->
<template>
    <div class="row-center captcha_input_wrapper">
      <input
        v-for="(item,index) in captchas"
        :key="index"
        v-model="item.num"
        :id="'captcha'+index"
        @input="inputFinash(index)"
        @focus="adjust(index)"
        @keydown="inputDirection(index)"
        class="captcha_input_box row-center"
        type="tel"
        maxlength="1"
      />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // 当前输入框
        activeInput: 0,
        captchas: [
          { num: "" },
          { num: "" },
          { num: "" },
          { num: "" },
          { num: "" },
          { num: "" },
        ],
      };
    },
   
    methods: {
      // 自动校准输入顺序
      adjust(index) {
        let dom = document.getElementById("captcha" + this.activeInput);
        if (index !== this.activeInput && dom) {
          dom.focus();
        }
      },
      // 控制前后方向
      inputDirection(index) {
        let val = this.captchas[index].num;
        // 回退键处理
        if (event.keyCode == 8 && val == "") {
          // 重新校准
          let dom = document.getElementById("captcha" + (index - 1));
          this.activeInput = index - 1;
          if (dom) dom.focus();
        }
        if (event.keyCode != 8 && val != "") {
          let dom = document.getElementById("captcha" + (index + 1));
          this.activeInput = index + 1;
          if (dom) dom.focus();
        }
      },
      // 输入框相互联动
      inputFinash(index) {
        let val = this.captchas[index].num;
        this.activeInput = val ? index + 1 : index - 1;
        let dom = document.getElementById("captcha" + this.activeInput);
        if (dom) dom.focus();
        if (index == this.captchas.length - 1) {
          let code = this.captchas.map((x) => x.num).join("");
          if (code.length == 6) {
            this.$emit("finish", code);
          }
        }
      },
    },
  };
  </script>
  
  <style lang='scss' scoped>
  .row-center {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .captcha_input_wrapper {
    width: 100%;
  }
  .captcha_input_box {
    width: 11.2vw;
    height: 16vw;
    margin-right: 12px;
    background: rgba(255, 255, 255, 1);
    border-radius: 6px;
    border: 1px solid #dddddd;
    font-size: 8vw;
    text-align: center;
    color: #1e243a;
  }
  </style>