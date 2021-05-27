


import axios from 'axios';
import request from './request'

// 查询产品信息 分页查询
export async function getAllProducts({page=1,size=20,searchWord='',category=''} = {}){
  const res = await request({
    url:'/products/all',
    method:'get',
    params:{
      page,
      size,
      searchWord,
      category
    }
  })
  return res;
}

//获取所有分类
export async function getAllCatrgory(){
  const res = await request.get('/category/all');
  return res
}

// 添加商品接口
export async function addProducts(props){
  const res = await request.post('/products/add',{
    data:props
  })
  console.log(res);
}

// 删除商品
export async function deleteProduct(productId){
  const res = await request.delete(`/products/${productId}`)
  return res;
}