<template>
    <div class="home">
        <v-header></v-header>
        <h3>this is home page</h3>
    </div>
</template>

<script>
    import Header from '@/components/header/Header'

    export default {
        name: "Home",
        components:{
            'v-header':Header
        }
    }
</script>

<style scoped>

</style>