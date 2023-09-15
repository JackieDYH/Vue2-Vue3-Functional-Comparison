<!--
 * @Author: Jackie
 * @Date: 2023-09-15 16:57:38
 * @LastEditTime: 2023-09-15 17:18:31
 * @LastEditors: Jackie
 * @Description: 点击滑动 - 未调试 - 暂存
 * @FilePath: /vue3-demo/src/components/scroll/Scroll6.vue
 * @version: 
-->
<template>
  <div class="SlideSwitch">
    <div class="sbtn">
      <img src="@/assets/images/prices/zuo.svg" @click="onPageLeft" />
    </div>
    <div class="slide-content" ref="currencyItemsRef">
      <div class="slide-box">
        <p
          class="slide-row"
          :class="{ active: item.isActive }"
          v-for="(item, index) in CurrencyList"
          :key="index"
        >
          {{ item.name }}
        </p>
      </div>
    </div>
    <div class="sbtn">
      <img src="@/assets/images/prices/you.svg" @click="onPageRight" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const currencyItemsRef = ref(null);
const onPageLeft = () => {
  currencyItemsRef.value.scroll({
    left: (currencyItemsRef.value.scrollLeft -= 250),
    behavior: 'smooth'
  });
};

const onPageRight = () => {
  currencyItemsRef.value.scroll({
    left: (currencyItemsRef.value.scrollLeft += 250),
    behavior: 'smooth'
  });
};

// const onPageLeft = () => {
//   currencyItemsRef.value.scroll({
//     left: -currencyItemsRef.value.clientWidth,
//     behavior: 'smooth'
//   });
// };

// const onPageRight = () => {
//   currencyItemsRef.value.scroll({
//     left: currencyItemsRef.value.clientWidth,
//     behavior: 'smooth'
//   });
// };

const CurrencyList = ref([
  { name: 'BTC', isActive: true },
  { name: 'ETH', isActive: false },
  { name: 'USDT', isActive: false },
  { name: 'USDC', isActive: false },
  { name: 'BNB', isActive: false },
  { name: 'BUSD', isActive: false },
  { name: 'ADA', isActive: false },
  { name: 'DOT', isActive: false },
  { name: 'XRP', isActive: false },
  { name: 'LTC', isActive: false },
  { name: 'TRX', isActive: false },
  { name: 'LINK', isActive: false },
  { name: 'UNI', isActive: false },
  { name: 'SOL', isActive: false },
  { name: 'AVAX', isActive: false },
  { name: 'MATIC', isActive: false },
  { name: 'FIL', isActive: false },
  { name: 'FTM', isActive: false },
  { name: 'ONE', isActive: false },
  { name: 'SHIB', isActive: false },
  { name: 'ETH', isActive: false }
]);
</script>

<style lang="less" scoped>
.SlideSwitch {
  display: flex;
  align-items: center;
  flex: 1;
  .sbtn {
    img {
      width: 15px;
      height: 15px;
      vertical-align: initial;
    }
  }
  .slide-content {
    width: 960px;
    overflow-y: auto;
    white-space: nowrap;
    scroll-behavior: smooth; // 滑动效果
    .slide-box {
      display: flex;
      .slide-row {
        color: #fff;
        text-align: center;
        font-family: PingFang SC;
        font-size: 14px;
        font-weight: 600;
        padding: 6px 25px;
        cursor: pointer;
        &.active {
          border-radius: 8px;
          background: #2e2e2e;
        }
      }
    }
  }
}
</style>

<!-- 

import { ref, computed, onMounted } from 'vue';
const currencyItemsRef = ref(null);

const slideContentRef = computed(
  () => currencyItemsRef.value?.getElementsByClassName('slide-content')[0]
);
const slideBoxRef = computed(
  () => currencyItemsRef.value?.getElementsByClassName('slide-box')[0]
);
const showLeftArrow = computed(() => slideContentRef.value?.scrollLeft > 0);
const showRightArrow = computed(() => {
  const slideContentWidth =
    slideContentRef.value?.getBoundingClientRect().width;
  const slideBoxWidth = slideBoxRef.value?.getBoundingClientRect().width;
  const maxScrollLeft = slideBoxWidth - slideContentWidth;
  return slideContentRef.value?.scrollLeft < maxScrollLeft;
});

onMounted(() => {
  console.log(
    currencyItemsRef.value?.getElementsByClassName('slide-box')[0].children[0]
      .scrollLeft,
    slideContentRef.value,
    slideBoxRef.value,
    showLeftArrow.value,
    showRightArrow.value,
    9999
  );
});

 -->
