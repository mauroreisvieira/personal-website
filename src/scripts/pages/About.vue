<template>
    <main class="about">
        <Hero title="About"/>
        <section class="container">
            <Page path="/docs/pages/about" />
        </section>
    </main>

</template>

<script>
    import Hero from '../components/Hero.vue'
    import Page from './Page.vue'
    export default {
        components: { Hero, Page },
        data: function () {
            return {}
        }
    }
</script>



