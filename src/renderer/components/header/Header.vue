<template>
    <div class="header clearfix">
        <div class="logo">logo</div>
        <div class="nav">nav</div>
        <div class="others">
            <div class="user-info">userinfo</div>
            <div class="win-click">window</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped lang="less">
    @import '../../assets/css/base.less';
    .header{
        height:75px;
        background-color:@h_bg;
        box-sizing:border-box;
        border-bottom:1px solid @border_color;
    }
    .logo{
        float:left;
    }


</style>