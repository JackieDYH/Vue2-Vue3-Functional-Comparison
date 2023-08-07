/*
 * @Author: Jackie
 * @Date: 2023-08-07 19:49:20
 * @LastEditTime: 2023-08-07 20:30:22
 * @LastEditors: Jackie
 * @Description: pinia 处理js文件使用报错问题
 * @FilePath: /vue3-demo-pinia/src/store/store.js
 * @version:
 */
import { createPinia } from 'pinia';
const pinia = createPinia();

// // 为了解决setup语法下不支持 .$reset() 方法的问题
// pinia.use(({ store }) => {
//   const initialState = JSON.parse(JSON.stringify(store.$state));
//   store.$reset = () => {
//     store.$state = JSON.parse(JSON.stringify(initialState));
//   };
// });

// // 数据持久化
// import piniaPluginPersist from 'pinia-plugin-persist';
// pinia.use(piniaPluginPersist);

export default pinia;
