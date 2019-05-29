<template>
    <main class="container">
        <Progress :max="max" :value="value" />
        <Hero
            :title="title"
            :date="date"
            />
        <Page :path="path" />
        <Navigation
            :prev="prev"
            :next="next"
        />
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
                prev: false,
                next: false,
                current: 0,
            }
        },
        mounted() {
            this.current = this.data.findIndex(e => e.path === this.$router.currentRoute.path);
            this.prev = this.current - 1;
            this.next = this.current + 1;

            const { date, author } = this.data[this.current];

            this.date = Utils.formatDate(date);

            window.addEventListener('resize', (evt) => {
                this.max = this.$el.clientHeight - (screen.height / 2);
            });

            window.addEventListener('scroll', (evt) => {
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
