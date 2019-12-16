<template>
    <div class="share">
        <div class="menu-item">
            <ul>
                <li v-for="(item,index) in menuList" :key="index" :class="item.isChecked?'enabled-menu':'forbidden-menu'">
                    <i class="item.icon"></i>
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

                ]
            }
        },
        mounted(){
            //console.log(this.$route)
        }
    }
</script>

<style lang="less" scoped>
    .enabled-menu{

    }
    .forbidden-menu{

    }
</style>