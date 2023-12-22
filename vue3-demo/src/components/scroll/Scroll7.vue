<!--
 * @Author: Jackie
 * @Date: 2023-12-22 14:28:03
 * @LastEditTime: 2023-12-22 14:45:30
 * @LastEditors: Jackie
 * @Description: Scroll - 水平滚动 没首尾循环
 * @FilePath: /vue3-demo/src/components/scroll/Scroll7.vue
 * @version: 
-->
<template>
  <div class="scroll" ref="scroller">
    <!-- 水平滚动容器 -->
    <div class="price-band-group" ref="priceBandGroup">
      <!-- 使用两个相同数据集渲染 -->
      <div
        class="price-band-item DIN-medium"
        v-for="(item, index) in items"
        :key="index"
      >
        ${{ item }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// 引用滚动容器和价格带组
const scroller = ref(null);
const priceBandGroup = ref(null);

// 定时器用于循环滚动
const timerId = ref(null);

// 生成 1 到 10 的数据作为演示
const items = Array.from({ length: 100 }, (_, index) => index + 1);

// 是否超过可视范围
const isDataOverflow = ref(false);

// 暂停动画的函数
const pauseAnimate = () => {
  timerId.value && clearInterval(timerId.value);
  timerId.value = null;
};

// 启动循环滚动动画的函数
const playAnimate = () => {
  pauseAnimate();
  const maxScrollLeft =
    priceBandGroup.value.scrollWidth - scroller.value.clientWidth;

  // 使用 setInterval 控制滚动速度
  timerId.value = setInterval(() => {
    if (isDataOverflow.value) {
      if (scroller.value.scrollLeft >= maxScrollLeft) {
        // 当滚动到末尾时，瞬间回到起始位置，实现循环滚动
        scroller.value.scrollLeft = 0;
      } else {
        // 向右滚动
        scroller.value.scrollTo({
          top: 0,
          left: (scroller.value.scrollLeft += 1),
          behavior: 'smooth'
        });
      }
    }
  }, 33);
};

// 在组件挂载时启动动画
onMounted(() => {
  // 使用 requestAnimationFrame 确保在浏览器的每一帧执行
  requestAnimationFrame(() => {
    // 判断数据是否超过可视范围
    isDataOverflow.value =
      priceBandGroup.value.scrollWidth > scroller.value.clientWidth;
    // 初始化滚动位置
    scroller.value.scrollLeft = 0;
    // 启动动画
    playAnimate();
  });

  // 监听窗口大小变化事件，动态更新 isDataOverflow
  window.addEventListener('resize', handleResize);
});

// 在组件卸载时暂停动画，并移除窗口大小变化事件监听
onUnmounted(() => {
  pauseAnimate();
  window.removeEventListener('resize', handleResize);
});

// 处理窗口大小变化事件
const handleResize = () => {
  isDataOverflow.value =
    priceBandGroup.value.scrollWidth > scroller.value.clientWidth;
  // 窗口大小变化后，重新计算是否超过可视范围，并重置滚动位置
  scroller.value.scrollLeft = 0;
  playAnimate();
};
</script>

<style lang="scss" scoped>
.scroll {
  width: 100%;
  height: 48px;
  background: linear-gradient(90deg, #31daff 0.47%, #316bff 100%);
  padding: 13px 0;
  box-sizing: border-box;
  overflow: hidden; /* 设置为 hidden，防止滚动条显示 */
  .price-band-group {
    display: inline-block;
    white-space: nowrap;
    .price-band-item {
      display: inline-block;
      font-size: 18px;
      line-height: 22px;
      color: #fff;
      padding: 0 24px;
    }
  }
}
</style>
