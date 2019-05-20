<template>
    <main class="blog">
        <Hero title="Blog"/>
        <Article
            path="what-s-new-in-javascript"
            title="What’s new in Javascript?"
            date="20/05/2019" />
    </main>
</template>

<script>
    import Hero from '../components/Hero.vue'
    import Article from './Article.vue'
    export default {
        components: { Hero, Article },
        data: function () {
            return {}
        }
    }
</script>



