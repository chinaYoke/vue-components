<template>
	<div class="row">
		<div class="col-xs-12">
			<p>{{title}}</p>
			<button @click="go">按钮</button>
		</div>
	</div>
</template>

<script>
export default {
  props:['title','go'],//父组件给组件传的值
  data(){
    return {
    
    }
  }
}
</script>

<style>
</style>
