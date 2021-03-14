<template>
	<div>
		<h1>歌列表</h1>
		<div v-for='item in $store.state.list' :key='item.id'>
			<p v-text='item.name'></p>
		</div>
	</div>
</template>

<script>
	
	export default {
		data:function(){
			return{
				
			}
		},
		mounted(){
			let str='ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.song&searchid=57461744738179847&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E5%BC%A0%E6%9D%B0&g_tk_new_20200303=5381&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0'
			var params={}
			str.split('&').map(ele=>{
				var arr=ele.split('=')
				params[arr[0]]=arr[1]
			})
			params.w='周杰伦'
			this.$store.dispatch('getMusic',params)
		}
	}
	
</script>

<style>
</style>