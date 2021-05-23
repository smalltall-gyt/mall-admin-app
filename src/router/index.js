import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import loginUser from '@/store/loginUser'
Vue.use(VueRouter)


const router = new VueRouter({
  mode:'history',
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.path !== '/login' && to.path !== '/register'){
    //判断是否已经登录
    if(loginUser.state.userInfo){
      return next();
    }else{
     return next('/login')
    }
  }else{
    return next();
  }
})

export default router
