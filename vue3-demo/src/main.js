/*
 * @Author: Jackie
 * @Date: 2023-06-22 11:39:03
 * @LastEditTime: 2023-06-23 13:44:58
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue3-demo/src/main.js
 * @version: 
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 1、引入事件类
import EventBus from 'vue3-global-eventbus';

const app = createApp(App);

// 自己编写的或者mitt皆可
// 或者：import EventBus from 'mitt'
const $bus = new EventBus();
// 2、挂载
// 1.使用provide提供
app.provide('$bus', $bus);
// 2.挂载到this上
app.config.globalProperties.$bus = $bus;

app.use(store).use(router).mount("#app");
