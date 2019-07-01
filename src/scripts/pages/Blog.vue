<template>
    <main class="main container">
        <Hero title="Blog"/>
        <section class="grid">
            <Article
            v-for="(item, index) in list"
            :key="index"
            :path="item.path"
            :picture="item.picture"
            :title="item.title"
            :description="item.description"
            :date="item.date" />
        </section>
    </main>
</template>

<script>
    import Hero from '../components/Hero.vue'
    import Article from '../components/Article.vue'

    import Blog from '../../../blog.json';

    export default {
        components: { Hero, Article },
        data: function () {
            return {
                list: Blog
            }
        }
    }
</script>

<style lang="scss">
@import "./../../styles/theme.scss";

.grid {
  display: grid;
  grid-gap: $theme-baseline * 10;
  grid-template-columns: repeat(1, auto);
  grid-auto-rows: auto;

  @include tablet {
    grid-template-columns: repeat(2, auto);
  }
}
</style>


