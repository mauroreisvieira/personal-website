<template>
    <main class="home container">
        <Hero ref="hero" :title="title" />
    </main>
</template>

<script>
    import Hero from '../components/Hero.vue'
    export default {
        components: { Hero },
        data: function () {
            return {
                title: 'Hi',
                index: 0,
            }
        },
        mounted() {
            const values = ['Hi', 'Olá', 'Hallo', 'Salut', 'Hola', 'Hei', 'Hallo', 'Hej', 'Helló'];
            this.title = values[Math.floor(Math.random() * values.length)];
        }
    }
</script>



