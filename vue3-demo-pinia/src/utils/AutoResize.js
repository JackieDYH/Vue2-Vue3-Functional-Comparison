/*
 * @Author: Jackie
 * @Date: 2023-08-07 21:43:11
 * @LastEditTime: 2023-08-08 10:48:15
 * @LastEditors: Jackie
 * @Description: AutoResize
 * @FilePath: /vue3-demo-pinia/src/utils/AutoResize.js
 * @version:
 */
import router from '@/router/index.js';
// js文件使用报错处理 单独导入 pinia解决报错
// import { createPinia } from 'pinia';
// const pinia = createPinia();
// import pinia from '@/store/store';
// import { useCounterStore } from '@/store/counter.js';
// const counterStore = useCounterStore(pinia);

let BaseSize = 16;
const minWidth = 375;
let RouterAutoResize = {
  enable: true,
  config: [
    {
      maxWidth: 1024,
      baseSize: 32
    },
    {
      maxWidth: 430,
      baseSize: 48
    }
  ]
};
document.documentElement.style.minWidth = `${minWidth}px`;
function setWindowBasicSize() {
  console.log('window resize');
  let baseSize = BaseSize;
  const width =
    document.documentElement.clientWidth > minWidth
      ? document.documentElement.clientWidth
      : minWidth;
  if (RouterAutoResize && RouterAutoResize.enable) {
    RouterAutoResize.config.every((config) => {
      if (width <= config.maxWidth) {
        baseSize = config.baseSize;
        return true;
      }
    });
  }
  const scale = width / 1920;

  //   counterStore.increment();

  const rem2pxRatio = baseSize * Math.min(scale, 2);
  document.documentElement.style.fontSize = `${rem2pxRatio}px`;
  // 如果需要固定高度，则可使用以下代码
  // const height = document.documentElement.clientHeight > scale * minWidth ? document.documentElement.clientHeight : scale * minWidth
  // document.documentElement.style.height = height + 'px'
  if (width <= 1024) {
    // let dpr = window.devicePixelRatio || 1
    // let scale = 1 / dpr
    // let vp = document.querySelector('meta[name="viewport"]')
    // vp.setAttribute('content', 'width=' + dpr * document.documentElement.clientWidth + ',initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no')
    let vp = document.querySelector('meta[name="viewport"]');
    vp.setAttribute(
      'content',
      'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0'
    );
  }
}
setWindowBasicSize();
window.addEventListener('resize', setWindowBasicSize);
router.afterEach((to, from) => {
  // RouterAutoResize = to.meta.autoResize
  setWindowBasicSize();
});
