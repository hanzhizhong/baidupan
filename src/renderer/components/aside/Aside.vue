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
    import VueEvent from '../../utils/vueEvent'
    export default {
        name: 'aside-part',
        data() {
            return {

            }
        },
        props:{
            navList:Array
        },
        methods: {
            changePageByNavName(obj) {
                this.navList.forEach((item, index) => {
                    item.isActive = false;
                })
                obj.isActive = true;
                if(obj.param){
                    this.$router.push({name:obj.name,params:{aid:obj.param,title:obj.title,}}).catch(err => {
                        err
                    })
                }else{
                    this.$router.push({name:obj.name,params:{title:obj.title}}).catch(err => {
                        err
                    })
                }

            }
        },
        mounted(){
            VueEvent.$on('toChangeActive',(val)=>{
                this.navList.forEach((item, index,array) => {
                    array.forEach((ite,inde)=>{
                        item.isActive=false;
                    });
                    if(val.aid){
                        if(item.param==val.aid){
                            item.isActive = true;
                        }
                    }else{
                        if(item.name==val.name){
                            item.isActive=true
                        }
                    }

                })

            })
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