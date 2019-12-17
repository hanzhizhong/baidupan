<template>
    <div class="magic-box">
        <h3>功能宝盒</h3>
        <p>更多功能，带给您更贴心的体验</p>
        <div class="action">
            <ul>
                <li v-for="(item,index) in actionList" :key="index">
                    <div class="action-box">
                        <div class="action-icon"><i :class="item.icon"></i></div>
                        <span>{{item.title}}</span>
                    </div>
                    <label>{{item.label}}</label>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MagicBox",
        data(){
            return{
                actionList:[
                    {name:'trash',title:'垃圾文件清理',icon:'icon iconfont iconcustom-clear',label:'节省网盘空间'},
                    {name:'backup',title:'自动备份',icon:'icon iconfont iconbackup',label:'随时备份，告别丢失'},
                    {name:'recycle',title:'回收站',icon:'icon iconfont iconrecyclebin',label:'帮你找回删除文件'},
                    {name:'dataLine',title:'数据线',icon:'icon iconfont iconchuanshu',label:'手机和电脑无线传输'},
                    {name:'lock',title:'锁定网盘',icon:'icon iconfont iconsuoding',label:'防止其他人偷窥数据'}
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '../../assets/css/base';
    .graident(@bg_color){
        background-image:linear-gradient(135deg,@bg_color,screen(@border_color,#cccccc));
    }
.magic-box{
    position:absolute;
    left:0;
    top:75px;
    bottom:0;
    right:0;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}
    h3{
        font-size:20px;
    }
    p{
        color:lighten(@m_font_color,30%);
        font-size:16px;
        line-height:40px;
    }
    ul{
        margin-top:80px;
        display:flex;
        justify-content:space-between;
        min-width:800px;
        li{
            text-align:center;
        }
    }
    .action-box{
        font-size:14px;
        display:flex;
        flex-direction:column;
        align-items:center;
        .action-icon{
            width:80px;
            height:80px;
            border-radius:50%;
            //.graident(rgb(77,157,255));
            color:rgba(255,255,255,0.9);
            text-align:center;
            line-height:80px;
            i{
                font-size:40px;
            }
        }

        span{
            line-height:30px;
        }
    }

    li:nth-of-type(1) .action-icon{
            .graident(#13d268);

    }
    li:nth-of-type(2) .action-icon{

            .graident(#137ad2);

    }
    li:nth-of-type(3) .action-icon{

            .graident(#6513d2);

    }
    li:nth-of-type(4) .action-icon{

            .graident(#d21386);
    }
    li:nth-of-type(5) .action-icon{

            .graident(#e47b0f);
    }

</style>