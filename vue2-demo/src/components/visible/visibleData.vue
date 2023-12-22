<!--
 * @Author: Jackie
 * @Date: 2023-12-22 13:58:06
 * @LastEditTime: 2023-12-22 14:01:14
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue2-demo/src/components/visible/visibleData.vue
 * @version: 
-->
<template>
  <div
    ref="scrollContainer"
    @scroll="handleScroll"
    style="height: 300px; overflow-y: scroll"
  >
    <div
      v-for="item in items"
      :key="item.id"
      class="item"
      :ref="`item-${item.id}`"
    >
      {{ item.text }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, text: 'Item 1' },
        { id: 2, text: 'Item 2' },
        { id: 3, text: 'Item 3' },
        { id: 4, text: 'Item 4' },
        { id: 5, text: 'Item 5' },
        { id: 6, text: 'Item 6' },
        { id: 7, text: 'Item 7' },
        { id: 8, text: 'Item 8' },
        { id: 9, text: 'Item 9' },
        { id: 10, text: 'Item 10' },
        { id: 11, text: 'Item 11' },
        { id: 12, text: 'Item 12' },
        { id: 13, text: 'Item 13' },
        { id: 14, text: 'Item 14' },
        { id: 15, text: 'Item 15' },
        { id: 16, text: 'Item 16' },
        { id: 17, text: 'Item 17' },
        { id: 18, text: 'Item 18' },
        { id: 19, text: 'Item 19' },
        { id: 20, text: 'Item 20' },
        { id: 21, text: 'Item 21' },
        { id: 22, text: 'Item 22' },
        { id: 23, text: 'Item 23' },
        { id: 24, text: 'Item 24' },
        { id: 25, text: 'Item 25' },
        { id: 26, text: 'Item 26' },
        { id: 27, text: 'Item 27' },
        { id: 28, text: 'Item 28' },
        { id: 29, text: 'Item 29' },
        { id: 30, text: 'Item 20' }
      ]
    };
  },
  methods: {
    handleScroll() {
      const container = this.$refs.scrollContainer;
      const options = {
        root: container,
        rootMargin: '0px',
        threshold: 0.5 // 视口可见比例达到 50% 时触发回调
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 当元素进入视口时触发
            // const itemId = parseInt(entry.target.dataset.itemId, 10);
            // console.log(`Item ${itemId} 进入视口`, entry.target);
            console.log(`Item ${entry.target.textContent} 进入视口`);
            // 在这里执行你想要的操作，比如更新数据等
          }
        });
      }, options);

      // 对每个 item 进行监听
      this.items.forEach((item) => {
        const element = this.$refs[`item-${item.id}`][0];
        observer.observe(element);
      });
    }
  }
};
</script>

<style scoped>
.item {
  height: 100px;
  margin: 10px;
  background-color: lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
