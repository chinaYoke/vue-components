<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <app-server v-for="(server,index) in servers" :server="server" :key="index"></app-server>
    </ul>
  </div>
</template>

<script>
import Server from "./Server.vue";

export default {
  data: function() {
    return {
      servers: [
        { id: 1, status: "及格" },
        { id: 2, status: "一般" },
        { id: 3, status: "良好" },
        { id: 4, status: "优秀" }
      ]
    };
  },
  components: {
    appServer: Server
  }
};
</script>

<style>
</style>
