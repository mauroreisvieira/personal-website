<template>
    <main>
        <Hero title="Mauro Reis Vieira" />
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



