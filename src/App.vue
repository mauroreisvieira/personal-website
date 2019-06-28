<template>
    <div class="app">
        <Header />
        <router-view :key="$route.fullPath"/>
        <Footer />
    </div>
</template>

<script>
    import Header from './scripts/layout/Header.vue'
    import Footer from './scripts/layout/Footer.vue'

    export default {
        name: 'app',
        components: { Header, Footer },
        data: function () {
            return {}
        },
        mounted() {},
        methods: {}
    }
</script>

<style lang="scss">
  @import "./styles/styles.scss";
</style>
