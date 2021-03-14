import axios from 'axios'

const baseURL = 'http://localhost:8080'

const instance = axios.create({
  baseURL,
  timeout: 7000,
  headers: {}
})
instance.interceptors.request.use(function(config){
	console.log('请求拦截器config',config)
	return config
},function(error){
	return Promise.reject(error)
})
instance.interceptors.response.use(function(response){
	console.log('响应拦截器respose',response)
	let res=null
	if(response.status===200){
		res=response.data
	}
	return res
},function(error){
	return Promise.reject(error)
})
export default instance