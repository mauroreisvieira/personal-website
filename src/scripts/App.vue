<template>
    <div class="app">
        <topbar logo="./assets/images/logo.png" />
        <main class="main" @click="hideSidebar">
            <div class="container">
                <sidebar />
                <router-view :key="$route.fullPath"/>
            </div>
        </main>
    </div>
</template>

<script>
    import topbar from './layout/topbar.vue'
    import sidebar from './layout/sidebar.vue'

    export default {
        name: 'app',
        components: { topbar, sidebar },
        data: function () {
            return {
                theme: this.$store.state.theme,
            }
        },
        methods: {
            hideSidebar(ev) {
                const sidebar = document.querySelector('.sidebar');
                const article = document.querySelector('.article');
                sidebar.classList.remove('is-visible');
                article.classList.remove('is-overlay');
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
  @import "./../styles/app.scss";
</style>
