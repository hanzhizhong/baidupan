<template>
    <div class="home">
        <v-aside :navList="navList"></v-aside>

        <div class="container">
            <router-view></router-view>
        </div>
        <v-status></v-status>
    </div>
</template>

<script>
    import Aside from '../components/aside/Aside'
    import Status from '../components/status/Status'
    export default {
        name: "Home",

        data(){
            return{
                navList: [
                    {title: '最近访问', name: 'recent', icon: 'fa fa-clock-o', isActive: false},
                    {title: '全部文件', name: 'whole',param:'entire', icon: 'fa fa-file-text-o', isActive: true},
                    {title: '图片', name: 'whole',param:'pic', icon: '', isActive: false},
                    {title: '视频', name: 'whole', param:'video',icon: '', isActive: false},
                    {title: '文档', name: 'whole',param:'doc', icon: '', isActive: false},
                    {title: '音乐', name: 'whole',param:'mp3', icon: '', isActive: false},
                    {title: '种子', name: 'whole', param:'torrent', icon: '', isActive: false},
                    {title: '其他', name: 'whole', param:'others', icon: '', isActive: false},
                    {title: '隐藏空间', name: 'hide-space', icon: 'fa fa-lock', isActive: false},
                    {title: '我的分享', name: 'share', icon: 'fa fa-share-alt', isActive: false},
                ]
            }
        },
        components:{
            'v-aside':Aside,
            'v-status':Status,
        },

    }
</script>

<style scoped>
    .container{
        position:absolute;
        top:75px;
        right:0;
        left:165px;
        bottom:0;
    }
</style>