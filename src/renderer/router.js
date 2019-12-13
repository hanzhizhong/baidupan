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
        //redirect的方法也可以指定默认的路由首页
        path:'/home',name:'home',component:Home,redirect:{name:'whole',params:{aid:'entire'}},
        children:[
            {path:'recent',name:'recent',component:Recent},
            {
                path:'whole/:aid',name:'whole',component:WholeFile,

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