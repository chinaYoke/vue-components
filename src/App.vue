<template>
  <div class="container">
    <!-- <app-header></app-header> -->
    <!-- <Header></Header> -->
    <!-- 从main引入 -->
    <component-header></component-header>
    <hr />
    <div class="row">
      <app-servers></app-servers>
      <app-server-details></app-server-details>
    </div>
    <hr />
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
// 全局注册
// import Header from "./components/Shared/Header.vue";
import Footer from "./components/Shared/Footer.vue";
import Servers from "./components/Server/Servers.vue";
import ServerDetails from "./components/Server/ServerDetails.vue";

export default {
  components: {
    // "app-header": Header,
    "app-servers": Servers,
    "app-server-details": ServerDetails,
    "app-footer": Footer
  },
  // components:{
  //   Header,
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