<template>
  <div class="container">
    这是home组件
    <app-header></app-header>
    <!-- 从main引入 -->
    <!-- <component-header></component-header> -->
    <hr />
    <app-count :num="num" @incr="increase" @decr="decrease"></app-count>
    <hr />
    <app-footer :title="title" :go="go"></app-footer>
  </div>
</template>

<script>
// 注册
import Header from "./Shared/Header.vue";
import Count from "./Shared/Count.vue";
import Footer from "./Shared/Footer.vue";

import Bus from "./utils/bus.js";
//父组件向子组件传值， home=>footer
// 1.父组件调用子组件的时候，绑定动态属性
// 2.在子组件里面通过props接受父组件里面传过来的值

//子组件向父组件传值
// 使用$emit(eventName,optionalPayload)触发事件。
// 使用$on(evntName)监听事件；
// 另外，父组件可以在使用子组件的地方直接用v-on来监听子组件触发的事件。
export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-count": Count
  },
  data() {
    return {
      title: "底部",
      num: 5
    };
  },
  mounted: function() {
    Bus.$on("txt", function(val) {
      //监听new组件的txt事件
      console.log(val);
    });
  },
  methods: {
    go() {
      alert("我是底部");
    },
    increase() {
      this.num++;
    },
    decrease() {
      this.num--;
    }
  }
};
</script>

<style>
</style>