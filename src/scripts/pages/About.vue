<template>
    <main class="main container">
        <Hero title="About"/>
        <Page path="/docs/pages/about" />
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



