<template>
    <main class="main container">
        <Hero title="Blog"/>
        <section class="grid">
            <Article
            v-for="(item, index) in list"
            :key="index"
            :path="item.path"
            :title="item.title"
            :description="item.description"
            :date="item.date" />
        </section>
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
        }
    }
</script>



