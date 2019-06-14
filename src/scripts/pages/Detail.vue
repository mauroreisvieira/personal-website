<template>
    <main class="container blog">
        <Progress :max="max" :value="value" />
        <Hero
            :title="title"
            :date="date"
            />
        <Page :path="path" />
        <Navigation />
    </main>
</template>

<script>
    import { Utils } from '../helpers/utils.js'

    import Page from './Page.vue'
    import Hero from '../components/Hero.vue'
    import Progress from '../components/Progress.vue'
    import Navigation from '../components/Navigation.vue'
    import BlogEntries from '../../../blog.json';
    export default {
        components: { Hero, Progress, Navigation, Page },
        data: function () {
            return {
                data: BlogEntries,
                title: this.$router.currentRoute.name,
                path: '/docs/blog' + this.$router.currentRoute.path,
                max: 0,
                value: 0,
                date: undefined,
                author: undefined,
                current: 0,
            }
        },
        mounted() {
            this.current = this.data.findIndex(e => e.path === this.$router.currentRoute.path);
            const { date } = this.data[this.current];

            this.date = Utils.formatDate(date);

            window.addEventListener('resize', () => {
                this.max = this.$el.clientHeight - (screen.height / 2);
            });

            window.addEventListener('scroll', () => {
                this.value = window.scrollY;
            });
        },
        updated() {
            // progress bar
            this.$nextTick(() => {
                this.max = this.$el.clientHeight - (screen.height / 2);
            });
        }
    }
</script>
