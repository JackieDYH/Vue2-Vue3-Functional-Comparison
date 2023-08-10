<!--
 * @Author: Jackie
 * @Date: 2023-08-10 18:18:03
 * @LastEditTime: 2023-08-10 18:33:08
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue3-demo/src/components/scroll/Scroll2.vue
 * @version: 
-->
<template>
  <div class="container">
    <div class="marquee-wrapper">
      <div class="marquee-content">1231231 -</div>
      <div class="marquee-content">1231231 -</div>
      <div class="marquee-content">1231231 -</div>
      <div class="marquee-content">1231231 -</div>
      <div class="marquee-content">1231231 -</div>
      <div class="marquee-content">1231231 -</div>
      <div class="marquee-content">1231231 -</div>
      <div class="marquee-content">1231231 -</div>
      <div class="marquee-content">1231239 -</div>
    </div>
  </div>
</template>

<style>
.container {
  width: 300px; /* 替换为你的容器宽度 */
  overflow: hidden;
}

.marquee-wrapper {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
}

.marquee-content {
  display: inline-block;
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
</style>
