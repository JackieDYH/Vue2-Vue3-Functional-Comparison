<!--
 * @Author: Jackie
 * @Date: 2023-08-10 18:35:55
 * @LastEditTime: 2023-08-10 18:37:18
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue3-demo/src/components/scroll/Scroll3.vue
 * @version: 
-->
<template>
  <div class="bottom-bar">
    <div class="scroll-wrapper">
      <div class="scroll-content">
        <!-- 在这里渲染您的行情数据 -->
        <div class="quote">123 -</div>
        <div class="quote">123 -</div>
        <div class="quote">123 -</div>
        <div class="quote">123 -</div>
        <div class="quote">123 -</div>
        <div class="quote">123 -</div>
        <div class="quote">123 -</div>
        <div class="quote">123 -</div>
        <div class="quote">123 -</div>
        <div class="quote">123 -</div>
        <div class="quote">123 -</div>
        <div class="quote">123 -</div>
        <div class="quote">1239 -</div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style>
.bottom-bar {
  width: 100%;
  height: 50px; /* 替换为您的底部信息栏高度 */
}

.scroll-wrapper {
  width: 60%;
  overflow: hidden;
}

.scroll-content {
  display: inline-block;
  white-space: nowrap;
  animation: marqueeAnimation 8s linear infinite;
}

@keyframes marqueeAnimation {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* 可根据需要自定义样式 */
.quote {
  display: inline-block;
  margin-right: 10px; /* 根据您的行情数据元素之间的间距调整 */
}
</style>
