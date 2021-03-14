<template>
	<div>
		<h1>维护健康的网络生态平台</h1>
		<div v-for='item in list' :key='item.id' @click='tiaoz(item)'>
			<img :src="item.img" alt=""/>
			<div v-text='item.title'></div>
			<div v-text='item.content'></div>
		</div>
	</div>
</template>

<script>
	import { corporateList } from '@/data/data'
	export default{
		data:function(){
			return {
				list: corporateList
			}
		},
		methods:{
			tiaoz:function(item){
				this.$router.push('/zh/corporate/detail/'+item.id)
			}
		}
	}
</script>

<style>
</style>