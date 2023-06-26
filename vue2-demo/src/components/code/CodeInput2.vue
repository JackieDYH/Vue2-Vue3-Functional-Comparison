<!--
 * @Author: Jackie
 * @Date: 2023-06-26 10:00:32
 * @LastEditTime: 2023-06-26 10:01:59
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue2-demo/src/components/code/CodeInput2.vue
 * @version: 
-->

<template>
    <div>
       <label for="code">
           <ul class="security-code-container">
               <li class="field-wrap" :class="{'on':seat==index}" v-for="(item, index) in list" :key="index" @click="onClick(index)">
                   <i class="char-field">{{value[index] || placeholder}}</i>
               </li>
           </ul>
       </label>
       <input ref="input" 
               class="input-code"  
               @keyup="keyup($event)" 
               @keydown="keydown($event)"
               v-model="value"
               id="code" 
               type="number" 
               :maxlength="number" 
               @touchstart="keyup($event)"
               @touchend="keydown($event)"
              />
       <div class="clean"><span  @click.stop="onClean">清除</span></div> 
     </div>
   </template>
   <script>
    export default {
    name: 'SecurityCode',
    props: {
         number: {
           type: Number,
           default: 10
         },
         placeholder: {
           type: String,
           default:'-'
         }
    },
    data() {
     return {
       value:'',
       seat:-1,
       list:''
     }
    },
    created(){
      this.list=new Array(this.number)
    },
    methods: {
           hideKeyboard() {
                 // 输入完成隐藏键盘
                 document.activeElement.blur() // ios隐藏键盘
                 this.$refs.input.blur() // android隐藏键盘
           },
           keydown(e){//当按下按键时
               console.log(e)
               //alert(JSON.stringify(e))
           },
           keyup(){ //按键松开时运行
                   this.seat+=1
                   this.$refs.input.value = this.value
                   if (this.value.length >= this.number){
                        this.hideKeyboard()
                        this.seat= this.number
                    } 
                   this.handleSubmit()
                 },
           handleSubmit() { //返回信息
              this.$emit('returnresult',this.value)
           },
           onClean(){ //清除
               this.value=''
               this.seat=-1
           },
           onClick(index){//点击
              this.seat=index
           }
     }
   }
   </script>
   <style scoped lang="scss">
    .security-code-container {
       margin: 0;
       padding:20px 0;
       display: flex;
       justify-content: center;
    .field-wrap {
           list-style: none;
           display: block;
           border: 1px solid #eee;
           height:25px;
           width:25px;
           font-size:18px;
           text-align: center;
           overflow: hidden;
           background-color: #fff;
           margin-right:5px;
           .char-field {
               font-style: normal;
           }
           &.on{
             border:1px solid #0E88EF;
           }
      }
    }
    .input-code {
       width:100%;
       height:30px;
       position:absolute;
       left:-999999999999px;
       opacity:0;
       z-index:-1;
    }
     .clean{
         width:100%;
         box-sizing: border-box;
         text-align: right;
         color: #0E88EF;
         font-size: 12px;
         padding:0 10px;
     }
   </style>