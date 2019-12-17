<template>
    <div class="friends">
        <v-aside :navList="navList"></v-aside>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Aside from '../../components/aside/Aside'
    export default {
        name:'friends',
        components:{
            'v-aside':Aside
        },
        data(){
            return{
                navList: [
                    {title: '会话', name: 'session', icon: 'fa fa-envelope-o', isActive: true},
                    {title: '朋友', name: 'friend',icon: 'fa fa-file-text-o', isActive: false},
                    {title: '群组', name: 'group', icon: 'fa fa-group', isActive: false}
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