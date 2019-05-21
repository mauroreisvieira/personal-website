<template>
    <main class="container">
        <Hero :title="title"/>
        <Page :path="path" />

        <ul
            v-if="prev || next"
            class="navigation navigation--blog"
            role="navigation">
            <a
                v-if="prev >= 0"
                :href="data[prev].path"
                class="navigation__prev">⇦ {{ data[prev].title }}</a>
            <a
                v-if="next >= 0"
                :href="data[next].path"
                class="navigation__next">{{ data[next].title }} ⇨</a>
        </ul>
    </main>
</template>

<script>
    import Hero from '../components/Hero.vue'
    import Page from './Page.vue'
    import BlogEntries from '../../../blog.json';
    export default {
        components: { Hero, Page },
        data: function () {
            return {
                data: BlogEntries,
                title: this.$router.currentRoute.name,
                path: '/docs/' + this.$router.currentRoute.path,
                prev: false,
                next: false
            }
        },
        mounted() {
            // this.prev = 0;
            // this.next = 2;
        }
    }
</script>
