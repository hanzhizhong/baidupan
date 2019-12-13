<template>
    <div class="menu">
        <div class="submenu">
            <ul>
                <li v-for="(item,index) in menu" :key="index" :class="item.isChecked||item.isEnable?'normal-menu':'forbidden-menu'">
                    <i :class="item.icon"></i>
                    {{item.title}}
                </li>
            </ul>
            <div class="show-style">
                <slot name="sort"></slot>
                <slot name="showcase"></slot>
            </div>
        </div>
        <div class="menu-status">
            <div class="menu-history">
                <span><i class="fa fa-chevron-left"></i></span>
                <span><i class="fa fa-chevron-right"></i></span>
                <span><i class="fa fa-refresh"></i></span>
            </div>
            <div class="menu-current-page">
                {{currentPage}}
            </div>
            <div class="menu-search">
                <input type="text" placeholder="查找一下">
                <i class="fa fa-search"></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SubTitleMenu",
        props:{
            menu:{
                type:Array
            },
            checked:{
                type:Boolean
            },
            currentPage:{
                type:String
            }
        },
        methods:{

        },
        mounted(){
            this.menu.forEach((item,index)=>{
                if(item.isChecked){
                    item.isChecked=this.checked;
                }
            })
        }

    }
</script>

<style lang="less" scoped>
    @import '../../assets/css/base';
    .submenu{
        display:flex;
        justify-content: space-between;
        align-items:center;
        height:40px;
        background-color: #f9fafb;
        border-bottom:1px solid lighten(@border_color,5%);

    }
    ul{
        display:flex;
        justify-content:flex-start;
        margin-left:5px;
        li{
            padding:5px 10px;
            box-sizing:border-box;
            border:1px solid transparent;
            border-radius:2px;
            &:hover{
                border:1px solid @active_color;
                color:@active_color;
            }
        }
    }
    .show-style{
        display:flex;
        justify-content:flex-end;
        margin-right:5px;
        span{
            margin:0 5px;
            &:hover{
                color:@active_color;
            }
        }
    }
    .normal-menu{
        color: @m_font_color;

        &:hover{
            border:1px solid @active_color;
            color:@active_color;
        }
    }
    .forbidden-menu{
        color:lighten(@m_font_color,40%);

        &:hover{
            border:1px solid transparent;
            color:lighten(@m_font_color,40%);
        }
    }

    .menu-status{
        display:flex;
        height:40px;
        background-color:@main_bg;
        justify-content: flex-start;

        align-items:center;
        .menu-history{
            flex:1;
            max-width:100px;
        }
        .menu-current-page{
            flex:2;
        }
        .menu-search{
            flex:1;
            max-width:200px;
        }
    }
</style>