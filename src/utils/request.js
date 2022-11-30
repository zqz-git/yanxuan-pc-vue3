import axios from "axios";
import store from '@/store'
import router from "@/router";
const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance=axios.create({
  baseURL,
  timeout:5000
})
// 请求拦截
instance.interceptors.request.use((config)=>{
  const {profile} = store.state.user
  if(profile.token){
    config.headers.Authorization=`Bearer ${profile.token}`
  }
  return config
},err=>{return Promise.reject(err)})
// 响应拦截，清无效用户信息，跳转登录页，跳转传参
instance.interceptors.response.use((res)=>res.data,err=>{
  if(res.response&&res.response.status===401){
    const fullPath=encodeURIComponent(router.currentRoute.value.fullPath)
    store.commit('user/setUser',{})
    router.push('/login?redirectUrl='+ fullPath)
  }
})
// 请求函数封装
const request=(url,method,submitData)=>{
  return instance({
    url,
    method,
    [method.toLowerCase()==='get'?'params':'data']:submitData
  })
}
export default {request}
