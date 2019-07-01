<template>
    <main class="main container container--sm">
        <Progress :max="max" :value="value" />
        <Hero
            :title="title"
            :date="date"
            />
        <img :src="picture" alt="" />
        <Page :path="path" />
        <Navigation />
    </main>
</template>

<script>
    import { Utils } from '../helpers/Utils.js'

    import Page from './Page.vue'
    import Hero from '../components/Hero.vue'
    import Progress from '../components/Progress.vue'
    import Navigation from '../components/Navigation.vue'
    import Blog from '../../../blog.json';
    export default {
        components: { Hero, Progress, Navigation, Page },
        data: function () {
            return {
                data: Blog,
                title: this.$router.currentRoute.name,
                path: '/docs/blog' + this.$router.currentRoute.path,
                max: 0,
                value: 0,
                date: undefined,
                picture: undefined,
                author: undefined,
                current: 0,
            }
        },
        mounted() {
            this.current = this.data.findIndex(e => e.path === this.$router.currentRoute.path);
            const { date, picture } = this.data[this.current];
            console.log(date);
            console.log(picture);
            this.date = Utils.formatDate(date);
            this.picture = this.static(picture);

            console.log(this.picture);

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
        },
        methods: {
            static(image) {
                return require('@/statics/blog/' + image);
            }
        }
    }
</script>
