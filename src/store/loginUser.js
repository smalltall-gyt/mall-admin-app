

import * as loginApi from '@/api/loginRegister.js'
import * as cookie from '@/utils/cookie'
export default {
  namespaced:true,
  state:{
    userInfo:cookie.getAllCookies(),
    isLoading:false,
  },
  mutations:{
    setUserInfo(state,payload){
      state.userInfo = payload;
    },
    setLoading(state,payload){
      state.isLoading = payload;
    }
  },
  actions:{
    async login(context,payload){
      context.commit('setLoading',true);
      const resp = await loginApi.login(payload);
      cookie.setCookie('appkey',resp.appkey);
      cookie.setCookie('email',resp.email);
      cookie.setCookie('role',resp.role);
      cookie.setCookie('username',resp.username);
      context.commit('setUserInfo',resp);
      context.commit('setLoading',false);
      return resp
    },
    logout(context,payload){
      context.commit('setLoading',true);
      cookie.removeCookie('appkey');
      cookie.removeCookie('email');
      cookie.removeCookie('role');
      cookie.removeCookie('username');
      context.commit('setUserInfo',null)
      context.commit('setLoading',false);
      return true;
    }
  },
  getters:{

  }
}