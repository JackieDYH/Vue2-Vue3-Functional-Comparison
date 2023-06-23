<!--
 * @Author: Jackie
 * @Date: 2023-06-23 11:05:13
 * @LastEditTime: 2023-06-23 15:59:33
 * @LastEditors: Jackie
 * @Description: vue2的方式在vue3中使用
 * @FilePath: /vue3-demo/src/components/zujiantongxin/ViewTx.vue
 * @version: 
-->
<template>
  <div>
    <p>
      父组件传递来的值：标题：{{ title }}，内容：{{ desc }}，自己内容：{{
        decsxd
      }}{{ tx.decsxd ? tx.decsxd : "" }}，数字：{{ num }}
    </p>
    <button @click="add(1)">数字+1</button>
  </div>
</template>
<script setup>
import {
  inject,
  defineEmits,
  defineProps,
  ref,
  reactive,
  onMounted,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
const $bus = inject("$bus");

const props = defineProps({
  title: String,
  desc: {
    type: String,
    required: true, //是否必传
    default: "内容默认值defineProps",
  },
  num: {
    type: Number,
    require: true,
  },
});

const tx = reactive({
  decsxd: "自己展示的内容reactive",
});

const decsxd = ref("自己展示的内容ref");
// 父子组件通信
const emits = defineEmits(['addNum'])
const add = (k) => {
    emits("addNum", k);
};

const edit = (k) => {
  decsxd.value += k;
};

// 非父子组件通信
onMounted(() => {
  $bus.on("editDecs", (decs) => {
    edit(decs);
  });
});

onUnmounted(()=>{
  console.log('the component is now un-mounted.')
  $bus.off('editDecs')
})
</script>
  
<!-- <script>
// import { reactive, inject, onMounted, onBeforeUnmount, onUnmounted } from "vue";
// const $bus = inject("$bus");
export default {
  name: "ViewTx",
  // 方式一
  // props:['title','desc','num']
  // 方式二
  props: {
    title: String,
    desc: {
      type: String,
      required: true, //是否必传
      default: "内容默认值",
    },
    num: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {
      decsxd: "自己展示的内容",
    };
  },
  mounted() {
    // console.log(this.$bus.on);
    // on 的第一个参数是事件名称，第二个参数是 监听到事件后对应触发的方法
    this.$bus.on("editDecs", (decs) => {
      this.edit(decs);
    });
  },
  methods: {
    // 子组件改变父组件内容
    add(k) {
      this.$emit("addNum", k);
    },
    edit(k) {
      this.decsxd += k;
    },
  },
  //   vue3没有这个生命周期
  //   beforeDestroy() {
  //       // 销毁，否则可能会导致多次触发 on
  //       this.$Bus.$off("editDecs");
  //   },
};
</script> -->
  
<style>
</style>