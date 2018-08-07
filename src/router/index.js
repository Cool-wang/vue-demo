import Vue from 'vue'
import iView from 'iview'
import Router from 'vue-router'
// 页面组件
import Login from '@/components/login/Login'
import Index from '@/components/index/Index'
// 首页轮播图
import FirstScreen from '@/components/index/FirstScreen.vue'
// 内容管理
import Article from '@/components/content/Article.vue'
import Comment from '@/components/content/Comment.vue'
// 用户管理
import AdditionUser from '@/components/user/additionUser'
import ActivityUser from '@/components/user/activityUser'
Vue.use(Router);
Vue.use(iView);
export default new Router({
  routes: [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/',
        name: 'Index',
        component: Index,
        redirect: '/index/firstScreen',
        children: [
            {path: '/index/firstScreen', component: FirstScreen, name: 'FirstScreen'},
            {path: '/content/comment', component: Comment, name: 'Comment'},
            {path: '/content/article', component: Article, name: 'Article'},
            {path: '/user/additionUser', component: AdditionUser, name: 'AdditionUser'},
            {path: '/user/activityUser', component: ActivityUser, name: 'ActivityUser'}    
        ]
    }
  ]
})
