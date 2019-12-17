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
                <span @click="go2ThisPageByAid(item.aid)" v-for="(item,index) in levelList" :key="index">{{item.title}}</span>
            </div>
            <div class="menu-search">
                <input type="text" placeholder="查找一下">
                <i class="fa fa-search"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import VueEvent from '../../utils/vueEvent'
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
                type:Object
            }
        },
        data(){
            return{
                //levelList:[]
            }
        },
        computed:{
            levelList(){
                let arr;
                let ret=this.currentPage;
                if(ret.aid&&ret.aid!="entire"){
                    arr=[]
                    arr.push({aid:'entire',title:'我的网盘 >'})
                    arr.push(ret)
                }else if(ret.aid&&ret.aid=="entire"){
                    arr=[]
                    arr.push({aid:'entire',title:'我的网盘 >'})
                }else{
                    arr=[]
                    arr.push({title:`${ret.title} >`})
                }

                return arr
            }
        },
        methods:{
            go2ThisPageByAid(aid){
                if(aid){
                    VueEvent.$emit('toChangeActive',{aid:aid,name:this.$route.name});
                    this.$router.push({name:this.$route.name,params:{aid:aid}}).catch(err=>{})
                }else{
                    VueEvent.$emit('toChangeActive',{name:this.$route.name});
                    this.$router.push({name:this.$route.name}).catch(err=>{})
                }
            }
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
        border-bottom:1px solid lighten(@border_color,5%);
        align-items:center;

        .menu-history{
            flex:1;
            max-width:100px;
            border-right:1px solid @border_color;
            margin-right:10px;
            span{
                font-size:14px;
                margin:0 10px;
                &:hover{
                    color:@active_color;
                }
            }
        }
        .menu-current-page{
            flex:2;
            span{
                &:hover{
                    color:@active_color;
                }
            }
        }
        .menu-search{
            flex:1;
            max-width:200px;
            padding-left:10px;
            border-left:1px solid @border_color;
            input{
                outline:none;
                border:none;
            }
            i{
                font-size:14px;
                &:hover{
                    color: @active_color;
                }
            }
        }
    }
</style>