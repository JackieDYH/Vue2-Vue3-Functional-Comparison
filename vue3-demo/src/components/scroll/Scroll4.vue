<!--
 * @Author: Jackie
 * @Date: 2023-08-10 20:00:34
 * @LastEditTime: 2023-08-10 20:45:49
 * @LastEditors: Jackie
 * @Description: scroll滚动-自动滚动组件
 * @FilePath: /vue3-demo/src/components/scroll/Scroll4.vue
 * @version: 
-->
<template>
  <div class="scroll" ref="scroller">
    <div class="price-band-group">
      <div class="price-band-item DIN-medium" v-for="item in 100" :key="item">
        <span v-if="item"> {{ item.item }} ${{ item }} </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const scroller = ref(null);
const timerId = ref(null);
const scrollLeftEnd = ref(false);
const pauseAnimate = () => {
  timerId.value && clearInterval(timerId.value);
  timerId.value = null;
};
const playAnimate = () => {
  pauseAnimate();
  const maxScrollLeft = scroller.value.scrollWidth - scroller.value.clientWidth;
  console.log(maxScrollLeft);
  timerId.value = setInterval(() => {
    if (scroller.value.scrollLeft >= maxScrollLeft - 1) {
      scrollLeftEnd.value = true;
    }
    if (scroller.value.scrollLeft <= 1) {
      scrollLeftEnd.value = false;
    }
    if (scrollLeftEnd.value) {
      scroller.value.scrollTo({
        top: 0,
        left: (scroller.value.scrollLeft -= 1),
        behavior: 'smooth'
      }); //scrollLeft -= 1;
    } else {
      scroller.value.scrollTo({
        top: 0,
        left: (scroller.value.scrollLeft += 1),
        behavior: 'smooth'
      }); //scrollLeft += 1;
    }
  }, 33);
};

onMounted(() => {
  console.log(111);
  // 必须在100ms后进行，否则计算不准确
  setTimeout(() => {
    scroller.value.scrollLeft = 0;
    playAnimate();
  }, 100);
});
onUnmounted(() => {
  pauseAnimate();
});
</script>

<style lang="scss" scoped>
.scroll {
  width: 100%;
  height: 48px;
  background: linear-gradient(90deg, #31daff 0.47%, #316bff 100%);
  padding: 13px 0;
  box-sizing: border-box;
  overflow: auto;
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
  /* &::-webkit-scrollbar {
    display: none;
  } */
}
</style>
