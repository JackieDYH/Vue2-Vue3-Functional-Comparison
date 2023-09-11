<!--
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2023-09-11 17:41:13
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue3-demo/src/App.vue
 * @version: 
-->
<template>
  <nav>
    <router-link to="/">组件通信</router-link> |
    <router-link to="/about">srote</router-link> |
    <router-link to="/code">code</router-link> |
    <router-link to="/scroll">scroll</router-link> |
    <router-link to="/draggable">draggable</router-link> |
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
