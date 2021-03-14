import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import News from './demo/News.vue'
import Home from './demo/Home.vue'
import List from './demo/list.vue'
import Aboutme from './demo/Aboutme.vue'
import corp from './demo/corp/Corporate.vue'
import Corporate from './demo/corp/CorporateDetail.vue'
import listone from './demo/list/one.vue'
import listtow from './demo/list/tow.vue'
const router = new VueRouter({
	routes:[
	{ path: '/zh/news', components:{yy:News} },
	{ path: '/zh/home',
	alias: '/n',
	component: Home },
	{ path: '/zh', component:Aboutme},
	{path:'/zh/list', component: List,
	children:[
	{path:'1',component: listone},
	{path:'2',component: listtow}
	],
	redirect:'/zh/list/1'
	},
	{path:'/zh/corporate',component: corp},
	{path:'/zh/corporate/detail/:ab',name:'qqq',component: Corporate,props: true},	
	{ path:'/*' ,redirect:'/zh'}
	]
})
export default router