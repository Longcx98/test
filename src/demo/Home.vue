<template>
	<div>
		<h1>这是个首页</h1>
		<div v-text='$store.state.num'></div>
		<button @click='click1'>点击</button>
	</div>
</template>

<script>
	export default {
		methods:{
			click1:function(){
				this.$store.commit('sbc')
			}
		}
	}
</script>

<style>
</style>