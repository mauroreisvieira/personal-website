<template>
    <main class="container">
        <Hero :title="title" :date="date"/>
        <Page :path="path" />

        <ul
            v-if="prev || next"
            class="navigation navigation--blog"
            role="navigation">
            <a
                v-if="prev >= 0 && prev < data.length"
                :href="data[prev].path"
                class="navigation__prev">⇦ {{ data[prev].title }}</a>
            <a
                v-if="next >= 0 && next < data.length"
                :href="data[next].path"
                class="navigation__next">{{ data[next].title }} ⇨</a>
        </ul>
    </main>
</template>

<script>
    import { Utils } from '../helpers/utils.js'

    import Hero from '../components/Hero.vue'
    import Page from './Page.vue'
    import BlogEntries from '../../../blog.json';
    export default {
        components: { Hero, Page },
        data: function () {
            return {
                data: BlogEntries,
                title: this.$router.currentRoute.name,
                path: '/docs' + this.$router.currentRoute.path,
                date: undefined,
                prev: false,
                next: false,
                current: 0,
            }
        },
        mounted() {
            this.current = this.data.findIndex(e => e.path === this.$router.currentRoute.path);
            this.prev = this.current - 1;
            this.next = this.current + 1;

            this.date = Utils.formatDate(this.data[this.current].date);
        }
    }
</script>
