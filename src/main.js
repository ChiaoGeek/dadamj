import Vue from 'vue'
import App from './App'
import router from './routers'
// import Router from './routers.js'
import Router from 'vue-router'

Vue.use(Router)


/* eslint-disable no-new */
// Vue.use(vueRouter);
// 路由配置
//console.log(Router);

new Vue({
  //Router
  el: '#app',
  template: '<App/>',
  components:{
    App
  },
  router
});
//export { app, router }
