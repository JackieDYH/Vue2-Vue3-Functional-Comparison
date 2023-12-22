<!--
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2023-12-22 13:56:59
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue2-demo/src/App.vue
 * @version: 
-->
<template>
  <div id="app">
    <nav>
      <router-link to="/">组件通信</router-link> |
      <router-link to="/about">store</router-link> |
      <router-link to="/code">code</router-link> |
      <router-link to="/data">data</router-link>
    </nav>
    <router-view />
  </div>
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
