<template>
    <div class="header clearfix" style="-webkit-app-region: drag;">
        <div class="logo">
            <img src="../../assets/images/logo.png" alt="logo">
            <h3>百度网盘</h3>
        </div>
        <div class="nav" style="-webkit-app-region: no-drag;">
            <ul>
                <li v-for="(item,index) in menuList" :key="index" @click="changeCurrentPage(item)" :class="{'active':item.isActive}">{{item.name}}</li>
            </ul>
        </div>
        <div class="others clearfix" style="-webkit-app-region: no-drag;">
            <div class="user-info">
                <div class="user-avatar">
                    <i class="fa fa-user"></i>
                </div>
                <span>{{username}}<i class="iconfont iconVIP"></i></span>
                <div class="user-detail">

                </div>
            </div>
            <div class="user-vip">
                会员中心
            </div>
            <div class="win-click">
                <div class="win-setting">
                    <span title="消息提示"><i class="fa-fw fa fa-bell-o"></i></span>
                    <span title="设置"><i class="fa-fw fa fa-cog"></i></span>
                </div>
                <div class="win-screen">
                    <span title="最小化" @click="winScreenMinimized"><i class="fa-fw fa fa-minus"></i></span>
                    <span :title="maxTitle" @click="winScreenMaximized"><i :class="maxUnMaxClass"></i></span>
                    <span title="关闭" @click="winScreenClosed"><i class="fa-fw fa fa-close"></i></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Header",
        data(){
            return {
                menuList:[
                    {name:'我的网盘',icon:'',path:'/home',isActive:true},
                    {name:'传输列表',icon:'',path:'/transfer',isActive:false},
                    {name:'好友分享',icon:'',path:'/friends',isActive:false},
                    {name:'功能宝箱',icon:'',path:'/treasure',isActive:false},
                ],
                username:'hello someone',
                winCur:this.$electron.remote.getCurrentWindow(),
                maxUnMaxClass:"fa-fw fa fa-window-maximize",
                maxTitle:'最大化'
            }
        },
        methods:{
            changeCurrentPage(obj){
                this.menuList.forEach((item,index)=>{
                    item.isActive=false;
                });
                obj.isActive=true;
            },
            winScreenMinimized(){
                this.winCur.minimize()
            },
            winScreenMaximized(){
                if(this.winCur.isMaximized()){
                    this.maxTitle='最大化'
                    this.winCur.unmaximize();
                    this.maxUnMaxClass="fa-fw fa fa-window-maximize"
                }else{
                    this.maxTitle='向下还原'
                    this.winCur.maximize()
                    this.maxUnMaxClass="fa-fw fa fa-window-restore"
                }
            },
            winScreenClosed(){
                this.winCur.close();
            }

        },
        mounted(){
            //this.winScreenMaximized()
        }
    }
</script>

<style scoped lang="less">
    @import '../../assets/css/base.less';
    .header{
        height:75px;
        background-color:@h_bg;
        box-sizing:border-box;
        border-bottom:1px solid @border_color;
        cursor:default;
    }
    .logo{
        float:left;
        width:165px;
        margin:20px 0 0 15px;
        img{
            float:left;
            width:32px;
            height:auto;
        }
        h3{
            float:left;
            font-size:20px;

            color:#000;
            margin:6px 0 0 10px;
            line-height:20px;
            display:inline-block;
        }

    }
    .nav{
        float:left;
        li{
            font-size:14px;
            float:left;
            margin:20px 10px 0 10px;
            height:32px;
            line-height:32px;
            position:relative;
            padding-bottom:6px;
            white-space: nowrap;

            &:hover{
                color:@active_color;
            }
        }

    }
    .others{
        float:right;
        display:flex;
        margin-top:20px;
        justify-content:flex-end;
        align-items:center;
    }
    .user-info{
        display:flex;
        align-items:center;
        margin-right:40px;
        .user-avatar{
            width:32px;
            height:32px;
            background-color:lighten(@active_color,30%);
            box-sizing:border-box;
            border:1px solid @border_color;
            border-radius:50%;
            text-align:center;
            font-size:30px;
            color:#fff;
            overflow:hidden;
        }
        span{
            align-self:center;
            position:relative;
            i{
                position:absolute;
                font-size:24px;
                color:gold;
                right:-30px;
                top:-5px;
            }
        }

    }
    .user-vip{
        padding:5px 10px;
        border-radius:40px 40px;
        background-image:linear-gradient(90deg,rgb(248,209,126),rgb(234,187,101));
        &:hover{
            background-image:none;
            background-color:rgb(219,185,110);
        }
    }
    .win-click{
        margin-left:20px;
        display:flex;
        justify-content:flex-end;
        span{
            color:#666;
            padding:2px 2px;
            &:hover{
                color:@active_color;
            }
        }
        .win-setting{
            border-right:1px solid @border_color;
            padding-right:5px;
        }
        .win-screen{
            padding-left:5px;
            padding-right:10px;
        }
    }
    .active{
        position:absolute;
        left:0;
        bottom:0;
        height:0;
        border-bottom:2px solid @active_color;
    }


</style>