<!--
 * @Author: Jackie
 * @Date: 2023-08-10 18:13:35
 * @LastEditTime: 2023-08-10 18:14:37
 * @LastEditors: Jackie
 * @Description: 自动滚动
 * @FilePath: /vue3-demo/src/components/scroll/Scroll.vue
 * @version: 
-->
<template>
  <div class="container">
    <transition name="slide">
      <div class="content" :style="{ transform: transform }">
        {{ text }}
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      transform: 'translateX(0)'
    };
  },
  mounted() {
    this.startAnimation();
  },
  methods: {
    startAnimation() {
      const containerWidth = this.$el.offsetWidth;
      const contentWidth = this.$refs.content.offsetWidth;
      const distance = containerWidth - contentWidth;

      if (distance < 0) {
        const duration = Math.abs(distance) * 20; // 根据距离计算动画持续时间
        this.transform = `translateX(${distance}px)`;

        setTimeout(() => {
          this.transform = 'translateX(0)';
          this.startAnimation();
        }, duration);
      }
    }
  }
};
</script>

<style>
.container {
  width: 300px; /* 替换为你的容器宽度 */
  overflow: hidden;
  white-space: nowrap;
}

.content {
  display: inline-block;
  animation: slideAnimation infinite;
}

@keyframes slideAnimation {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}
</style>
