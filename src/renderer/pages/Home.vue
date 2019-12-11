<template>
    <div class="home">
        <v-aside></v-aside>

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
        components:{
            'v-aside':Aside,
            'v-status':Status,
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