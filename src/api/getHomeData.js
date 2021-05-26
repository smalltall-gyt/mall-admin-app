


import request from './request'

// 查询产品信息 分页查询
export async function getAllProducts({page=1,size=20,searchWord=''} = {}){
  const res = await request({
    url:'/products/all',
    method:'get',
    params:{
      page,
      size,
      searchWord
    }
  })
  return res;
}