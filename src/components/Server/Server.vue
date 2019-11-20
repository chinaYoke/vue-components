<template>
	<li class="list-group-item" 
	style="cursor:pointer" 
	@click="serverSelected">
		Server #{{ server.id }}
	</li>

</template>

<script>
	import {serverBus} from '../../main';

	export default {
		props:['server'],//父组件给组件传的值
		methods:{
			serverSelected(){
				serverBus.$emit('serverSelected',this.server);
			}
		}
	}
</script>

<style>
	
</style>