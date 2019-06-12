<template>
    <div class="app">
        <Header />
        <transition name="fade" mode="out-in">
            <router-view :key="$route.fullPath"/>
        </transition>
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
            return {
                theme: this.$store.state.theme,
            }
        },
        mounted() {
            document.title = this.$route.meta.title || this.theme.appName;
            if (this.$route.meta) {
                for (const [key, value] of Object.entries(this.$route.meta)) {
                    const meta = document.createElement('meta');
                    meta.setAttribute('name', key);
                    meta.setAttribute('content', value);
                    document.getElementsByTagName('head')[0].appendChild(meta);
                }
            }
        },
        watch: {
            $route(to, from) {
                document.title = to.meta.title || this.theme.appName
            }
        }
    }
</script>

<style lang="scss">
  @import "./styles/app.scss";
</style>
