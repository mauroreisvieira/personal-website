<template>
    <main class="about">
        <Hero title="About"/>
        <section class="container">
            <h2>Who?</h2>
            <p>
                I am a Front-end Developer at <a href="https://namecheap.com">Namecheap.com</a>
            </p>
        </section>
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



