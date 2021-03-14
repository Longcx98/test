<template>
	<div>
		<img :src="item.img" alt="">
        <h1 v-text='item.title'></h1>
        <div v-text='item.content'></div>
        <div v-text='num'></div>
	</div>
</template>

<script>
	import { corporateList } from '@/data/data'
	export default{
		props:{
				ab:{
					type:String,
					required:true
				}
				},
		data:function(){
			
			
			return {
				list:corporateList,
				num:this.$route.params.ab
			}
		},
		computed:{
			
			item:function(){
				let id=this.num
				console.log(this.$route)
				return this.list[id-1]
				}
			}
	}
</script>

<style>
</style>