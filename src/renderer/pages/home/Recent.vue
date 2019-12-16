<template>
    <div class="recent">
        <v-submenu :menu="menuList" :checked="isChecked" :currentPage="currentPage">
        </v-submenu>
        <h3>最近使用列表</h3>
    </div>
</template>

<script>
    import SubTitleMenu from '../../components/sub_title/SubTitleMenu'
    export default {
        name:'recent',
        data(){
            return{
                menuList:[
                    {name:'download',title:'下载',icon:"fa fa-download",isChecked:true},
                    {name:'share',title:'分享',icon:"fa fa-share-alt-square",isChecked:true},
                    {name:'clear',title:'清除记录',icon:"icon iconfont iconcustom-clear",isChecked:true},
                    {name:'openDir',title:'打开所在目录',icon:"fa fa-folder",isChecked:true},
                    {name:'delete',title:'删除文件',icon:"fa fa-trash",isChecked:true},
                    {name:'more',title:'更多',icon:"icon iconfont iconmore",isChecked:true}
                ],
                isChecked:false,
            }
        },
        components:{
            'v-submenu':SubTitleMenu
        },
        computed:{
            currentPage(){
                return this.$route.params
            }
        },
        mounted(){
            //console.log(this.$route)
        }
    }
</script>

<style scoped>

</style>