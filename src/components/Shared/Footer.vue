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
	// props可以设置属性的类型，比如String或者[String,Array]等类型
		// 还可以设置属性值是否为必须传递操作required
		// 并且可以设置属性值的默认值
	props:['title','go'],//父组件给组件传的值
	// props:{
	// 	title:{
	// 		type: String,
	// 		required:false,
	// 	},
	// 	go:Function,
	// },
  data(){
    return {
    
    }
  }
}
</script>

<style>
</style>
