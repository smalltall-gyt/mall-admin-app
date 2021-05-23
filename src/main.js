import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import showMessage from './utils/showMessage'

Vue.config.productionTip = false
Vue.prototype.$showMessage = showMessage;
Vue.use(ElementUI);





new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
