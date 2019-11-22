<template>
  <div id="app">
    <app-home></app-home>
    <br/>
    <br/>
    <br/>
    <br/>
    <hr/>
    <!-- <app-new></app-new> -->
  </div>
</template>

<script>
// 全局注册
//1.引入2.挂载组件3.在使用
import Home from "./components/Home";
import New from './components/New'
export default {
  components: {
    "app-home": Home,
    "app-new": New
  }
  // components:{
  //   Home,
  // }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>