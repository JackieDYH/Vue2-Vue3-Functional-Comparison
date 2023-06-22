<!--
 * @Author: Jackie
 * @Date: 2023-06-22 11:51:36
 * @LastEditTime: 2023-06-22 12:48:22
 * @LastEditors: Jackie
 * @Description: 组件通信
 * @FilePath: /vue2-demo/src/components/zujiantongxin/ViewTx.vue
 * @version: 
-->
<template>
  <div>
   <p> 父组件传递来的值：标题：{{ title }}，内容：{{ desc }}，自己内容：{{ decsxd }}，数字：{{ num }}</p>
   <button @click="add(1)">数字+1</button>
  </div>
</template>

<script>
export default {
    name: "ViewTx",
    // 方式一
    // props:['title','desc','num']
    // 方式二
    props:{
        title:String,
        desc:{
            type:String,
            required:true,//是否必传
            default:'内容默认值'
        },
        num:{
            type:Number,
            require:true
        }
    },
    data(){
        return{
            decsxd:"自己展示的内容"
        }
    },
    mounted(){
        // on 的第一个参数是事件名称，第二个参数是 监听到事件后对应触发的方法
        this.$Bus.$on("editDecs",(decs)=>{
            this.edit(decs)
        })
    },
    methods: {
        // 子组件改变父组件内容
        add(k){
            this.$emit("addNum",k);
        },
        edit(k){
            this.decsxd = k;
        }
    },
    beforeDestroy() {
    	// 销毁，否则可能会导致多次触发 on
        this.$Bus.$off("editDecs");
    },
}
</script>

<style>

</style>