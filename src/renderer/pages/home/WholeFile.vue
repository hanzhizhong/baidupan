<template>
    <div class="whole">
        <v-submenu :menu="menuList" :checked="isChecked" :currentPage="currentPage">
            <span slot="sort" title="排序"><i class="fa fa-sort-alpha-asc"></i></span>
            <span @click="showCaseStyle" slot="showcase" :title="showcaseTitle"><i :class="showcase"></i></span>
        </v-submenu>
        <div>{{$route.params}}</div>
    </div>
</template>

<script>
    //引入菜单栏组件
    import SubTitleMenu from '../../components/sub_title/SubTitleMenu'
    export default {
        name: "WholeFile",
        components:{
            'v-submenu':SubTitleMenu
        },
        data(){
            return {
                menuList:[
                    {name:'upload',title:'上传',icon:"fa fa-upload",isEnable:true},
                    {name:'download',title:'下载',icon:"fa fa-download",isChecked:true},
                    {name:'share',title:'分享',icon:"fa fa-share-alt-square",isChecked:true},
                    {name:'delete',title:'删除',icon:"fa fa-trash",isChecked:true},
                    {name:'createFolder',title:'新建文件夹',icon:"fa fa-folder",isEnable:true},
                    {name:'downloadOffLine',title:'离线下载',icon:"fa fa-download",isChecked:true},
                    {name:'more',title:'更多',icon:"icon iconfont iconmore",isChecked:true}
                ],
                isChecked:false,
                showcase:"icon iconfont iconsuolvetuxianshi",
                showcaseTitle:'切换到缩略图显示',
                isThumbnail:false,
                currentPage:'我的网盘'
            }
        },
        methods:{
            showCaseStyle(){
                this.isThumbnail=!this.isThumbnail;
                if(this.isThumbnail){
                    this.showcase="icon iconfont iconliebiao"
                    this.showcaseTitle="切换到列表显示"
                }else{
                    this.showcase="icon iconfont iconsuolvetuxianshi"
                    this.showcaseTitle='切换到缩略图显示'
                }
            }
        },
        mounted(){
            console.log(this.$route.params)
        }
    }
</script>

<style scoped>

</style>