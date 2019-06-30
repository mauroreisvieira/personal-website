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
    import Article from '../components/Article.vue'
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

<style lang="scss">
@import "./../../styles/theme.scss";

.grid {
  display: grid;
  grid-auto-flow: dense;
  grid-gap: $theme-baseline * 14;
  grid-template-columns: repeat(1, auto);

  @include tablet {
    grid-template-columns: repeat(2, auto);
  }
}
</style>


