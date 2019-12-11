import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//导入组件页面
import Login from './pages/Login'

import Home from './pages/Home'
import Recent from './pages/home/Recent'
import WholeFile from './pages/home/WholeFile'
import HideSpace from './pages/home/HideSpace'
import Share from './pages/home/Share'



const routes=[
    {path:'/',redirect:{name:'home'}},
    {path:'/login',name:'login',component:Login},
    {
        path:'/home',name:'home',component:Home,redirect:'whole',
        children:[
            {path:'recent',name:'recent',component:Recent},
            {
                path:'whole',name:'whole',component:WholeFile
            },//默认的嵌套路由的首页方法 path设为空
            {path:'hideSpace',name:'hide-space',component:HideSpace},
            {path:'share',name:'share',component:Share}
        ]
    },

];

const router=new VueRouter({
    routes,
});

export default router