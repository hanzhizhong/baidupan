<template>
    <div class="login">
        <div class="qrcode">
            <p><i class="fa fa-qrcode"></i>扫一扫登录</p>
            <div class="login-tip">请使用<span>百度网盘App</span>扫码登录</div>
            <div class="qrcode-border">

            </div>
            <button>刷新二维码</button>
        </div>
        <div class="normal-way">
            <div class="login-choose">
                <p>账号密码登陆</p>
                <span>短信快捷登陆</span>
            </div>
            <input type="text" name="username">
            <input type="password" name="passwd">
            <div class="remember">
                <label><input type="checkbox">记住密码</label>
                <label><input type="checkbox">自动登陆</label>
                <a href="www.baidu.com">忘记密码</a>

            </div>
            <button class="login-btn">登陆</button>
            <div class="login-others">
                <a href="www.baidu.com">注册账号</a>
                <span><i class="fa fa-wechat"></i></span>
                <span><i class="fa fa-weibo"></i></span>
                <span><i class="fa fa-qq"></i></span>
            </div>
        </div>
    </div>
</template>

<script>
    import defaultImg from '../assets/logo.png'
    export default {
        name: "login",
        data(){
            return{
                logoPic:defaultImg,
            }
        },
        methods:{
            getWinSize(){
                let win=this.$electron.remote.getCurrentWindow()
                win.setSize(660,440)
                win.center()
            },
            getAllUserName(){
                let sql=`select * from users`;
                this.$db.findManyData(sql,(data)=>{
                    console.log(data)
                })
            }

        },
        mounted(){
            this.getWinSize();
            this.getAllUserName()
        }
    }
</script>

<style scoped lang="less">
    @import '../assets/css/base';
.login{
    display:flex;
    padding-top:30px;
}
    .qrcode{
        width:340px;
        display:flex;
        flex-direction:column;
        align-items:center;
        p{
            font-size:16px;
            color:@m_font_color;

            i{
                margin-right:5px;
                vertical-align: text-bottom;
            }
        }
        .login-tip{
            margin-top:20px;
            font-size:14px;
            span{
                color:@active_color;
            }
        }
        .qrcode-border{
            width:152px;
            height:155px;
            border:1px solid @border_color;
            box-sizing:border-box;
            margin-top:20px;
        }
        button{
            width:90px;
            height:30px;
            margin-top:20px;
            outline:none;
            border:1px solid @active_color;
            background-color:#fff;
            color:@active_color;
            border-radius:2px;
            &:hover{
                background-color:lighten(@active_color,30%);
            }
        }

    }
    .normal-way{
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        //align-items:center;
        .login-choose{
            display:flex;
            flex-direction:row;
            justify-content: space-between;
            align-items:center;
            p{
                font-size:16px;
                color:@m_font_color;
            }
            span{
                font-size:14px;
                color:@active_color;
                align-self:flex-end;
            }
        }
        input[name=username],input[name=passwd]{
            width:290px;
            height:40px;
            box-sizing:border-box;
            margin-top:20px;

        }
        .remember{
            display:flex;
            margin-top:20px;
            justify-content: space-between;
            input{
                vertical-align: bottom;
            }
        }
        .login-btn{
            width:290px;
            height:40px;
            border:none;
            outline:none;
            background-color:@active_color;
            color:#fff;
            margin-top:30px;
            border-radius:4px;
            &:hover{
                background-color:darken(@active_color,10%);
            }
        }
        .login-others{
            margin-top:60px;
            display:flex;
            flex-direction:row;
            justify-content:flex-end;
            a{
                flex-grow:7;
                color:@active_color;
            }
            span{
                flex-grow:1;
                text-align:right;
                color:@active_color;
                i{
                    font-size:16px;
                }
            }
        }

    }
</style>