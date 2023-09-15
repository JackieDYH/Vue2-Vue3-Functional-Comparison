<!--
 * @Author: Jackie
 * @Date: 2023-09-15 16:39:35
 * @LastEditTime: 2023-09-15 16:41:20
 * @LastEditors: Jackie
 * @Description: 滚动 可以点击滚动 - 未调试 - 暂存
 * @FilePath: /vue3-demo/src/components/scroll/Scroll5.vue
 * @version: 
-->
<template>
  <div class="watch-list-container DIN-medium">
    <div class="watch-list-items">
      <el-icon size="18" class="icon-button" @click="$emit('edit')">
        <el-image :src="iconMap.more" />
      </el-icon>
      <!-- <div class="watch-list-arrow watch-list-arrow--left">
          <div class="watch-list-arrow-btn" @click="onPageLeft" />
        </div> -->
      <div ref="currencyItemsRef" class="currency-items">
        <div
          v-for="(item, index) in symbols"
          :key="item?.realName || index"
          class="currency-item"
          :class="{ hide: !item }"
        >
          <RouterLink
            :to="`/${
              item.instType == 'SWAP' ? 'futures' : item.instType.toLowerCase()
            }/${item.realName}`"
          >
            <span class="currency-name">{{ item?.name }}</span>
            <span
              :class="[
                'currency-data',
                { 'currency-rise': item?.risePercent > 0 }
              ]"
            >
              {{
                item?.risePercent > 0
                  ? '+' + item?.risePercentStr
                  : item?.risePercentStr
              }}
            </span>
            <span v-show="item && item.from" style="font-size: 12px">
              {{ item?.from }}
            </span>
          </RouterLink>
        </div>
      </div>
      <!-- <div class="watch-list-arrow watch-list-arrow--right">
          <div class="watch-list-arrow-btn" @click="onPageRight" />
        </div> -->
    </div>
    <div class="watch-list-fun">
      <span class="watch-list-fun-item" v-for="item in funData" :key="item">
        {{ item }}
      </span>
    </div>
  </div>
</template>
<script setup>
import { iconMap } from '../const';
import { ElIcon, ElImage } from 'element-plus';
import { useStore } from 'vuex';
import { computed, ref, watch, onMounted, onUnmounted, defineEmits } from 'vue';
import { useRoute } from 'vue-router';

const emits = defineEmits(['edit']);
const store = useStore();
const route = useRoute();
const wsStatus = computed(() => store.state.socket.status);
const instTypeInRouter = computed(() => store.state.trade.instTypeInRouter);
const currencyItemsRef = ref(null);

const funData = ref(['大数据', '公告中心', '全球行情', '快讯', '聊天室']);
const symbols = computed(() => {
  const list = [];
  store.state.exchange.collectSymbols.forEach((name) =>
    store.state.exchange.symbols.forEach((item) => {
      if (item.realName === name) {
        if (
          item.instType.toLowerCase() == instTypeInRouter.value.toLowerCase()
        ) {
          list.push(item);
        }
      }
    })
  );
  if (list.length > 6) {
    return list.concat(list);
  } else {
    return list;
  }
});

const timerId = ref(null);
const scrollLeftEnd = ref(false);
const pauseAnimate = () => {
  timerId.value && clearInterval(timerId.value);
  timerId.value = null;
};
const playAnimate = () => {
  pauseAnimate();
  timerId.value = setInterval(() => {
    const maxScrollLeft =
      currencyItemsRef.value.scrollWidth - currencyItemsRef.value.clientWidth;
    // 右到左
    if (currencyItemsRef.value.scrollLeft >= maxScrollLeft) {
      currencyItemsRef.value.scrollLeft -= maxScrollLeft;
    }
    currencyItemsRef.value.scrollLeft += 1;
    //  来回
    // if (currencyItemsRef.value.scrollLeft >= maxScrollLeft - 1) {
    //   scrollLeftEnd.value = true;
    // }
    // if (currencyItemsRef.value.scrollLeft <= 1) {
    //   scrollLeftEnd.value = false;
    // }
    // if (scrollLeftEnd.value) {
    //   currencyItemsRef.value.scrollLeft -= 1;
    // } else {
    //   currencyItemsRef.value.scrollLeft += 1;
    // }
  }, 33);
};

const getSymbols = () => {
  store.dispatch('exchange/getSymbols');
};

onMounted(() => {
  getSymbols();
  // 必须在100ms后进行，否则计算不准确
  setTimeout(() => {
    currencyItemsRef.value.scrollLeft = 0;
    playAnimate();
  }, 1000);
});
onUnmounted(() => {
  pauseAnimate();
});

const onPageLeft = () => {
  currencyItemsRef.value.scroll({
    left: -currencyItemsRef.value.clientWidth,
    behavior: 'smooth'
  });
};

const onPageRight = () => {
  currencyItemsRef.value.scroll({
    left: currencyItemsRef.value.clientWidth,
    behavior: 'smooth'
  });
};
</script>
<style lang="less" scoped>
.watch-list-container {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  line-height: 32px;
  z-index: 999;
  border-top: 1px solid #000;

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  font-weight: 500;
  padding: 0 18px;
  white-space: nowrap;
  overflow: auto;
  background-color: #121212;
  .watch-list-items {
    flex: 1;
    position: relative;
    display: flex;
    align-items: center;
    white-space: nowrap;
    overflow: auto;

    margin-right: 16px;

    .icon-button {
      margin-right: 14px;
    }

    .watch-list-divider {
      width: 1px;
      height: 10px;
      background-color: #2c3139;
      margin: 0 12px 0 10px;
    }
    .watch-list-arrow {
      position: absolute;
      left: 253px;
      z-index: 1;
      width: 40px;
      height: 43px;
      background: linear-gradient(90deg, #121212 55%, rgba(23, 26, 30, 0) 100%);
      display: flex;
      align-items: center;
      .watch-list-arrow-btn {
        position: relative;
        width: 15px;
        height: 15px;
        cursor: pointer;
        background: center/contain
          url(@/assets/images/futures/watch_list_arrow.png) no-repeat;
      }
      &.watch-list-arrow--right {
        left: unset;
        right: 20px;
        transform: rotate(180deg);
      }
    }
  }

  .watch-list-fun {
    color: #909090;
    font-family: PingFang SC;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    display: flex;
    align-items: center;
    .watch-list-fun-item {
      & + .watch-list-fun-item {
        margin-left: 16px;
      }
    }
  }
  .trends-stars {
    width: 14px;
    height: 14px;
    margin-right: 23px;
  }

  .currency-items {
    overflow: auto;
    display: flex;
    align-items: center;
    flex: 1;
    padding: 0 20px;

    font-family: DIN;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    .currency-item {
      padding: 0 20px;
      display: flex;
      align-items: center;
      position: relative;
      &:not(:first-child)::before {
        content: '';
        position: absolute;
        left: 0;
        width: 1px;
        height: 10px;
        background-color: #404040;
      }
      &.hide {
        display: none;
      }

      .currency-name {
        color: #b3b8c0;
        margin-right: 3px;
      }

      .currency-data {
        color: #e35561;
        font-size: 12px;
        margin: 0 5px;

        &.currency-rise {
          color: #5dc787;
        }
      }
    }
  }
}
</style>
