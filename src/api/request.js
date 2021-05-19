

import axios from 'axios'

const instance = axios.create({
  baseURL:'https://mallapi.duyiedu.com',
  params:{
    'appkey': 'smalltall_1621298578717'
  }
})

//请求拦截
instance.interceptors.request.use(config=>{
  return config;
},error=>{
  console.log(error);
})

// 响应拦截
instance.interceptors.response.use(res=>{
  return res.data;
},error=>{
  console.log(error);
})

export default instance;