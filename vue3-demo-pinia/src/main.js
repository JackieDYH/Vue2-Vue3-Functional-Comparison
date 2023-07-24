/*
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2023-07-24 11:24:12
 * @LastEditors: Jackie
 * @Description: pinia
 * @FilePath: /vue3-demo-pinia/src/main.js
 * @version:
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
const pinia = createPinia();
// 数据持久化
import piniaPluginPersist from 'pinia-plugin-persist';
pinia.use(piniaPluginPersist);

createApp(App).use(pinia).use(router).mount('#app');
