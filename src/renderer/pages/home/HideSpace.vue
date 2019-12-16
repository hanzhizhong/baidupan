<template>
    <div class="hide-space">
        <div class="empty-container">
            <div><img :src="imgDefault" ></div>

            <span>启用隐藏空间，保存您的是私密文件吧~</span>

            <div class="open-hide-space">
                <button>启用隐藏空间</button>
                <br>
                <a href="#">什么是隐藏空间</a>
            </div>


            <label>小贴士 : 隐藏空间的文件不支持分享给好友</label>
        </div>
    </div>
</template>

<script>
    import defaultImg from '../../assets/images/hide.png'
    export default {
        name:'hideSpace',
        data(){
            return{
                imgDefault:defaultImg
            }
        },
        mounted(){
            //console.log(this.$route)
        }
    }
</script>

<style lang="less" scoped>
    @import '../../assets/css/base';
.hide-space{
    height:100%;
}
.empty-container{
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:left;
    span{
        font-size:14px;
        margin:20px 0;
    }
    .open-hide-space{
        button{
            width:220px;
            height:40px;
            border:none;
            outline:none;
            background-color:@active_color;
            color:#fff;
            border-radius:2px;
            &:hover{
                background-color:darken(@active_color,10%);
            }
        }
        a{
            display:inline-block;
            margin-top:10px;
            color:@active_color;
        }
    }
    label{
        color:lighten(@m_font_color,30%);
        margin:20px 0;
    }
}
</style>