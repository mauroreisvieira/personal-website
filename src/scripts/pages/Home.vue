<template>
    <main>
        <Hero title="Mauro Reis Vieira">
            <p>Front End Developer at <a href="https://namecheap.com">Namecheap.com</a></p>
        </Hero>
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



