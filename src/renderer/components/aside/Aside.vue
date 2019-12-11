<template>
    <div class="aside-part">
        <ul class="nav-list">
            <li v-for="(item,index) in navList" :key="index" :class="{'active':item.isActive}"
                @click="changePageByNavName(item)">
                <i :class="item.icon"></i>
                {{item.title}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'aside-part',
        data() {
            return {
                navList: [
                    {title: '最近访问', path: 'recent', icon: 'fa fa-clock-o', isActive: false},
                    {title: '全部文件', path: 'whole', icon: 'fa fa-file-text-o', isActive: true},
                    {title: '图片', path: 'whole?page=pic', query: 'pic', icon: '', isActive: false},
                    {title: '视频', path: 'whole?page=video', query: 'video', icon: '', isActive: false},
                    {title: '文档', path: 'whole?page=doc', query: 'doc', icon: '', isActive: false},
                    {title: '音乐', path: 'whole?page=mp3', query: 'mp3', icon: '', isActive: false},
                    {title: '种子', path: 'whole?page=torrent', query: 'torrent', icon: '', isActive: false},
                    {title: '其他', path: 'whole?page=others', query: 'others', icon: '', isActive: false},
                    {title: '隐藏空间', path: 'hideSpace', icon: 'fa fa-lock', isActive: false},
                    {title: '我的分享', path: 'share', icon: 'fa fa-share-alt', isActive: false},
                ]
            }
        },
        methods: {
            changePageByNavName(obj) {
                this.navList.forEach((item, index) => {
                    item.isActive = false;
                })
                obj.isActive = true;
                console.log('aa')
                this.$router.push({path:obj.path}).catch(err => {
                    err
                })
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../../assets/css/base.less';

    .aside-part {
        width: 165px;
        position: absolute;
        left: 0;
        top: 75px;
        bottom: 0;
        background-color: #f9fafb;
        border-right: 1px solid @border_color;
        box-sizing: border-box;
    }

    .nav-list {
        li {
            width: 100%;
            text-indent: 60px;
            position: relative;
            color: @m_font_color;
            height: 36px;
            line-height: 36px;
            &:hover {
                background-color: lighten(@active_color, 45%);
                color: @active_color;
            }
            i {
                position: absolute;
                left: 30px;
                text-indent: 0;
                font-size: 16px;
                top: 10px;
            }
        }

    }

    .active {
        color: @active_color !important;
        background-color: lighten(@active_color, 40%);
        &::before {
            content: '';
            width: 2px;
            height: 100%;
            background-color: @active_color;
            position: absolute;
            left: 0;
            top: 0;
        }
    }
</style>