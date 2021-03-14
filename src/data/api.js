import axios from './axios1.js'
function fetchMusic(params) {
  return axios({
    url: '/soso/fcgi-bin/client_search_cp',
    method: 'GET',
    params
  })
}

export {
  fetchMusic
}