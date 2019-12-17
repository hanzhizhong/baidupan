<template>
    <div class="transfer">
        <v-aside :navList="navList"></v-aside>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Aside from '../../components/aside/Aside'
    export default {
        name:'transfer',
        components:{
            'v-aside':Aside
        },
        data(){
            return{
                navList: [
                    {title: '正在下载', name: 'download', icon: 'fa fa-download', isActive: false},
                    {title: '正在上传', name: 'upload', icon: 'fa fa-upload', isActive: false},
                    {title: '传输完成', name: 'finished', icon: 'fa fa-check-circle-o', isActive: true}
                ]
            }
        }

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