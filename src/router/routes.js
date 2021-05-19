

export default [
  {
    path:'/login',
    name:'login',
    component:()=>import('@/views/Login/index.vue')
  },
  {
    path:'/register',
    name:'register',
    component:()=>import('@/views/Register/index.vue')
  },
  {
    path:'/',
    redirect:'/home',
    component:()=>import('@/views/Home/index.vue'),
    children:[
      {
        path:'/goods/list',
        name:'goodsList',
        component:()=>import('@/views/GoodsList/index.vue')
      },
      {
        path:'/goods/add',
        name:'goodsAdd',
        component:()=>import('@/views/AddGoods/index.vue')
      },
      {
        path:'/home',
        name:'home',
        component:()=>import('@/views/Home/components/Main.vue')
      }
    ]
  },
]