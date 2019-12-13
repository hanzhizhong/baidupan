<template>
    <div id="app">
        <v-header></v-header>
        <router-view></router-view>
    </div>
</template>

<script>
    import Header from './components/header/Header'
    export default {
        name: 'app',
        components:{
            'v-header':Header,
        }
    }
</script>

<style lang="less">
    /* CSS */
    @import 'assets/css/base.less';

    html {
        font-family: "Microsoft YaHei";
        font-size: 12px;
        color: @m_font_color;
        user-select: none;
        cursor:default;
    }
</style>
