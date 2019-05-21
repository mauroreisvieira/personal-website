<template>
    <main class="container">
        <Hero :title="title"/>
        <Page :path="path" />
    </main>
</template>

<script>
    import Hero from '../components/Hero.vue'
    import Page from './Page.vue'
    export default {
        components: { Hero, Page },
        data: function () {
            return {
                title: this.$router.currentRoute.name,
                path: '/docs/' + this.$router.currentRoute.path
            }
        },
        mounted() {}
    }
</script>
