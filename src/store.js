import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import {fetchMusic} from './data/api.js'
const store=new Vuex.Store({
	state:{
		num:100,
		list:[]
	},
	getters:{},
	mutations:{
		sbc(state){
			state.num=200
		},
		updateList(state,payload){
			state.list=payload
		}
	},
	actions:{
		getMusic(store,payload){
			fetchMusic(payload).then(res=>{
				store.commit('updateList',res.data.song.list)
				console.log(res)
			})
		}
	},
	modules:{}
})
export default store