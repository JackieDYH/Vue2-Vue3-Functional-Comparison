/*
 * @Author: Jackie
 * @Date: 2023-08-07 19:49:20
 * @LastEditTime: 2024-03-22 15:39:41
 * @LastEditors: Jackie
 * @Description: pinia 处理js文件使用报错问题
 * @FilePath: /vue3-demo-pinia/src/store/index.js
 * @version:
 */
import { createPinia } from 'pinia';
// 数据持久化
import piniaPluginPersist from 'pinia-plugin-persist';
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();

pinia.use(piniaPluginPersist);
// pinia.use(piniaPluginPersistedstate); //store时将persist设置true

// 为了解决setup语法下不支持 .$reset() 方法的问题
pinia.use(({ store }) => {
  const initialState = JSON.parse(JSON.stringify(store.$state));
  store.$reset = () => {
    store.$state = JSON.parse(JSON.stringify(initialState));
  };
});

export default pinia;
