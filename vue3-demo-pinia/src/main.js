/*
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2023-07-24 17:38:44
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
// 为了解决setup语法下不支持 .$reset() 方法的问题
pinia.use(({ store }) => {
  const initialState = JSON.parse(JSON.stringify(store.$state));
  store.$reset = () => {
    store.$state = JSON.parse(JSON.stringify(initialState));
  };
});

// 数据持久化
import piniaPluginPersist from 'pinia-plugin-persist';
pinia.use(piniaPluginPersist);

createApp(App).use(pinia).use(router).mount('#app');
