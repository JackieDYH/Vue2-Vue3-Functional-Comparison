<!--
 * @Author: Jackie
 * @Date: 2023-09-11 17:38:25
 * @LastEditTime: 2023-09-11 18:15:19
 * @LastEditors: Jackie
 * @Description: 拖拽排序 vuedraggable
 * @FilePath: /vue3-demo/src/components/draggable/draggable2.vue
 * @version: 
-->
<template>
  <div style="margin-left: 30px">
    <draggable
      class="item"
      :list="state.list1"
      :force-fallback="true"
      chosen-class="chosen"
      animation="300"
      @start="onStart"
      @end="onEnd"
    >
      <template #item="{ element }">
        <div class="item">
          {{ element }}
        </div>
      </template>
    </draggable>
    <div class="item22">
      <!-- 两个拖拽 -->
      <draggable class="item" group="group" :list="state.list1">
        <template #item="{ element }">
          <div class="item bck1">
            {{ element }}
          </div>
        </template>
      </draggable>

      <draggable class="item item-right" group="group" :list="state.list2">
        <template #item="{ element }">
          <div class="item bck2">
            {{ element }}
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>
<!-- 其中 @start 和 @end 为拖拽开始和结束时的事件。chosen-class 为拖拽时的样式 -->
<script setup>
import draggable from 'vuedraggable';
import { reactive } from 'vue';

const state = reactive({
  list1: [1, 2, 3, 4],
  list2: ['a', 'b', 'c', 'd']
});

function onStart() {
  console.log('start');
}

function onEnd() {
  console.log('onEnd', state);
}
</script>

<style lang="scss" scoped>
.item {
  width: 200px;
  height: 40px;
  line-height: 40px;
  // background-color: #f5f6f8;
  background-color: skyblue;
  text-align: center;
  margin: 10px 0;
  color: #fff;
  font-size: 18px;
}
.item22 {
  margin-left: 500px;
}
.item-right {
  margin-left: 400px;
}

.chosen {
  background-color: rgb(95, 191, 63);
}
</style>
