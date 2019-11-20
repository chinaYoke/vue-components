// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false  /*生产提示*/
// 全局引入
//通过Vue  component 把组件模板对象，注册为一个全局组件，同时，为这个组件起了
// 一个名称， 可以让我们通过标签形式， 在页面中直接引入这个组件
import Header from "./components/Shared/Header.vue";
Vue.component('component-header',Header)
// 方式2
// 通过对象字面量的形式， 定义了一个组件模板对象
// var login = {
//   template:'<h1>1234</h1>'
// }
// Vue.component('component-login',login)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

//父组件-子组件