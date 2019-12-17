<template>
    <div class="share">
        <div class="menu-item">
            <ul>
                <li v-for="(item,index) in menuList" :key="index" :class="item.isChecked?'enabled-menu':'forbidden-menu'">
                    <i :class="item.icon"></i>
                    {{item.title}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name:'share',
        data(){
            return{
                menuList:[
                    {name:'copyLink',title:'复制链接',icon:'icon iconfont iconfuzhi',isChecked:false},
                    {name:'cancelShare',title:'取消分享',icon:'icon iconfont iconquxiaofenxiang',isChecked:false},

                ],
                isChecked:false
            }
        },
        mounted(){
            //console.log(this.$route)
        }
    }
</script>

<style lang="less" scoped>
    @import '../../assets/css/base';
    .enabled-menu{
        color:@m_font_color;
        &:hover{
            color:@active_color;
        }
    }
    .forbidden-menu{
        color:lighten(@m_font_color,30%);
    }
    .menu-item{
        padding-left:10px;
        height:40px;
        border-bottom:1px solid lighten(@border_color,5%);
        box-sizing:border-box;
        ul{
            display:flex;
            align-items:center;
            height:40px;
            li{
                padding:5px 10px;
            }
        }
    }
</style>