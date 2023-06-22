<!--
 * @Author: Jackie
 * @Date: 2023-06-22 11:38:10
 * @LastEditTime: 2023-06-22 14:30:27
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue2-demo/src/views/AboutView.vue
 * @version: 
-->
<template>
  <div class="about">
    <h1>---主Store中数据---</h1>
    <h1>This is {{$store.state.name}}</h1>
    <h1>This is {{$store.state.num}}</h1>
    <h1>This is {{$store.getters.getUserName}}</h1>
    <button @click="$store.commit('addNum',1)">同步mutations添加1</button>
    <button @click="$store.commit('addNum2',1)">异步mutations添加1(错误示范)</button>
    <button @click="$store.dispatch('addNumSync',1)">异步actions添加1</button>

    <h1>---user中数据---</h1>
    <h1>This is {{$store.state.user.userInfo.name}}</h1>
    <h1>This is {{$store.state.user.userInfo.num}}</h1>
    <h1>This is {{$store.state.user.userInfo}}</h1>
    <h1 v-show="$store.getters['user/getIsLogin']">This is {{$store.getters['user/getIsLogin']}}</h1>
    <button @click="$store.commit('user/setisLogin',!$store.getters['user/getIsLogin'])">{{$store.getters['user/getIsLogin'] ? '隐藏' :"显示"}}</button>
    <button @click="$store.commit('user/addNum',1)">同步mutations添加1</button>
    <button @click="$store.commit('user/addNum2',1)">异步mutations添加1(错误示范)</button>
    <button @click="$store.dispatch('user/addNumSync2',1)">异步actions添加1</button>

    <h1>---map助手函数操作数据---</h1>
    <p>主store：{{ name }},{{ names }},{{ decs }},{{ num }}</p>
    <p>主store-getters：{{ getUser }},{{ getUserName }}</p>
    <button @click="addNum(1)">同步mutations添加1</button>
    <button @click="addNum2(1)">异步mutations添加1(错误示范)</button>
    <button @click="addNumSync(1)">异步actions添加1</button>

    <p>user：{{ isLogin }},{{ userInfo }}</p>
    <p>user-getters：{{ getIsLogin }},{{ getUserInfo }}</p>
    <button @click="isLoginSync(!getIsLogin)">{{ getIsLogin?"隐藏":"显示" }}</button>
    <button @click="addNumSync2(1)">异步actions添加1</button>
  </div>
</template>
<script>
// 助手函数
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
export default {
  name: "AboutView",
  data(){
    return{
      
    }
  },
  computed:{
      ...mapState(['name','names','decs','num']),
      ...mapState('user',['isLogin','userInfo']),
      ...mapGetters(['getUser','getUserName']),
      ...mapGetters('user',['getIsLogin','getUserInfo']),
    },
  mounted(){
    console.log(this.$store.getters['user/getIsLogin'],898);
    // console.log(this.$store.getters.user.getNum);
  },
  methods:{
    ...mapMutations(['addNum','addNum2']),
    ...mapMutations('user',['setisLogin']),
    ...mapActions(['addNumSync']),
    ...mapActions('user',['isLoginSync','addNumSync2']),
  }
};
</script>

<style lang="scss" scoped>
.about{
  height: 1000px;
}
</style>