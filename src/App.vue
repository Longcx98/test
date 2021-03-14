<template>
<div>
	<div>
	<router-link to="/zh/news">歌单</router-link>
	<router-link to="/n">查看首页</router-link>
	<router-link to='/zh/list'>列表</router-link>
	<router-link to='/zh/corporate'>内容</router-link>
  </div>
  <router-view name='yy'></router-view>
  <router-view></router-view>
  <router-view name='qqq'></router-view>
</div>
   
</template>

<script>


export default {


}
</script>

<style>

</style>
