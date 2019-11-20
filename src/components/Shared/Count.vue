<template>
  <div class="row">
    <div class="col-xs-12">
      <button @click="increase">+</button>
      <button @click="decrease">-</button>
      <p>{{num}}</p>
    </div>
  </div>
</template>
<script>
export default {
    props:['num'],
    methods:{
        increase(){
            this.$emit('incr')
        },
        decrease(){
            this.$emit('decr')
        }
    }
};
</script>