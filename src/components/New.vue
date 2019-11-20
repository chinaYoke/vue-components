<template>
  <div>
    <div>这是new组件</div>
    <button @click="add">new按钮</button>
  </div>
</template>

<script>
import Bus from "./utils/bus.js";
export default {
  data() {
    return {
      value: "我来自new组件！"
    };
  },
  methods: {
    add() {
      // 定义add方法，并将msg通过txt传给home组件
      Bus.$emit("txt", this.value);
    }
  }
};
</script>