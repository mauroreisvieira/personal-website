<template>
    <div class="app">
        <Header />
        <transition
            name="fade-up"
            mode="out-in"
            @before-enter="beforeTransitionEnter"
            @after-enter="afterTransitionEnter">
            <router-view :key="$route.fullPath"/>
        </transition>
        <transition
            name="fade">
            <Footer v-if="this.footerIsVisible"/>
        </transition>
    </div>
</template>

<script>
    import Header from './scripts/layout/Header.vue'
    import Footer from './scripts/layout/Footer.vue'

    export default {
        name: 'app',
        components: { Header, Footer },
        data: function () {
            return {
                footerIsVisible: false
            }
        },
        mounted() {
            this.footerIsVisible = true;
        },
        methods: {
            beforeTransitionEnter() {
                this.footerIsVisible = false;
            },
            afterTransitionEnter() {
                this.footerIsVisible = true;
            }
        }
    }
</script>

<style lang="scss">
  @import "./styles/app.scss";
</style>
