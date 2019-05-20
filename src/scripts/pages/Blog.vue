<template>
    <main class="blog">
        <Hero title="Blog"/>
    </main>
</template>

<script>
    import Hero from '../components/Hero.vue'
    export default {
        components: { Hero },
        data: function () {
            return {
                theme: this.$store.state.theme
            }
        }
    }
</script>



