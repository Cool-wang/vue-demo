// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import axios from 'axios'
import './css/index.less'
import 'iview/dist/styles/iview.css'
Vue.use(iView);
Vue.prototype.$http = axios;
Vue.config.productionTip = false
// 导航守卫
router.beforeEach((to, from, next) => {
    // 路由进度条
    iView.LoadingBar.start();
    next();
    // 拦截未登录用户
    if (to.path === '/login') {
        localStorage.removeItem('userInfo');
    }
    if (to.path !== '/login' && !localStorage.getItem('userInfo')) {
        next('/login');
    } else {
        next();
    }
})
// 路由进度条
router.afterEach((to ,from) => {
    iView.LoadingBar.finish();
});


/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app');