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

import Index from './pages/transferList/Index'
import Download from './pages/transferList/Download'
import Finished from './pages/transferList/Finished'
import Upload from './pages/transferList/Upload'

import Friends from './pages/friends/Index'
import Session from './pages/friends/Session'
import Friend from './pages/friends/Friend'
import Group from './pages/friends/Group'

import MagicBox from './pages/magicBox/MagicBox'

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
        ],meta:{
            requiresAuth:false
        }
    },
    {
        path:'/transfer',name:'transfer',component:Index,redirect:{name:'finished'},
        children:[
            {path:'download',name:'download',component:Download},
            {path:'upload',name:'upload',component:Upload},
            {path:'finished',name:'finished',component:Finished}
        ]
    },
    {
        path:'/friends',name:'friends',component:Friends,redirect:{name:'session'},
        children:[
            {path:'session',name:'session',component:Session},
            {path:'friend',name:'friend',component:Friend},
            {path:'group',name:'group',component:Group}
        ]
    },
    {path:'/magicBox',name:'magicBox',component:MagicBox}

];

const router=new VueRouter({
    routes,
});

router.beforeEach((to, from, next) => {
    // 对 to.matched 数组中的每个路由调用箭头函数
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // 此处需要某个信息判断登录状态
        if (localStorage.getItem('userInfo')) {
            // 继续路由
            next()
        } else {
            // 重定向到登录界面
            next({
                path: '/login',
            })
        }
    } else {
        // 继续路由
        next()
    }
})

export default router