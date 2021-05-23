

import request from './request'


export function delay(duration = 2000){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve();
    },duration)
  })
}


export async function login(userInfo){
  await delay();
  if(userInfo.email === '1477310696@qq.com' && userInfo.pwd === '123456'){
    return {
      status:'success',
      info:'登录成功',
      appkey:'smalltall_1621298578717',
      role:'admin',
      email:'14773110696@qq.com',
      username:'smalltall'
    }
  }else{
    return {
      status:'fail',
      info:'邮箱或密码错误'
    }
  }
}