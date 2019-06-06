<template>
    <main class="container blog">
        <Hero title="Blog"/>
        <Article v-for="(item, index) in list"
            :key="index"
            :path="item.path"
            :title="item.title"
            :description="item.description"
            :date="item.date" />
    </main>
</template>

<script>
    import Hero from '../components/Hero.vue'
    import Article from './Article.vue'
    import BlogEntries from '../../../blog.json';

    export default {
        components: { Hero, Article },
        data: function () {
            return {
                list: BlogEntries
            }
        },
        mounted() {}
    }
</script>



