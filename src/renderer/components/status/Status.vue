<template>
    <div class="status">
        <div>状态栏</div>
    </div>
</template>

<script>
    export default {
        name: "Status"
    }
</script>

<style lang="less" scoped>
    @import '../../assets/css/base.less';
.status{
    position:absolute;
    left:165px;
    bottom:0;
    right:0;
    background-color:#fff;
    height:35px;
    box-sizing:border-box;
    border-top:1px solid @border_color;
    display:flex;
    justify-content:space-between;
    align-items:center;
}
</style>