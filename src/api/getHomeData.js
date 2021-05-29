


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
  const res = await request.post('/products/add',props)
  return res;
}

// 删除商品
export async function deleteProduct(productId){
  const res = await request.delete(`/products/${productId}`)
  return res;
}

//获取商品详细信息
export async function getDetailProduct(productId){
  const res = await request.get(`/products/${productId}`);
  return res;
}

//编辑商品
export async function editProduct(props){
  const res = await request.put('/products/edit',props);
  return res;
}