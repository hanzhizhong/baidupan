import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//导入组件页面
import Login from './pages/Login'
import Home from './pages/Home'

const routes=[
    {path:'/login',name:'login',component:Login},
    {path:'/home',name:'home',component:Home},
    {path:'/',redirect:{name:'home'}}
];

const router=new VueRouter({
    mode:'history',
    routes,
});

export default router