import axios from 'axios'
import router from '../router'
import store from '../store'

const Api = axios.create({
    baseURL: "http://localhost:8000/api/",
    headers: { 'Accept': 'application/json' }
});

const token = localStorage.getItem('token')

if(token){
    Api.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

Api.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
   if(error.response.status === 401){
    localStorage.removeItem(token)
    store.dispatch('changeAuth', false)
    return router.push({ name: 'login' })
   }
    return Promise.reject(error);
  });

export default Api