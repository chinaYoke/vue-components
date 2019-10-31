// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// export const 是命名导出
export const serverBus = new Vue();

Vue.config.productionTip = false  /*生产提示*/
// 全局引入
import Header from "./components/Shared/Header.vue";
Vue.component('component-header',Header)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
