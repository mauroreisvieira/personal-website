<template>
    <main class="container">
        <Hero :title="title" />
    </main>
</template>

<script>
    import Hero from '../components/Hero.vue'
    export default {
        components: { Hero },
        data: function () {
            return {
                title: 'Hi'
            }
        },
        mounted() {
            const values = ['Hello', 'Olá', 'Hallo', 'Salut', 'Hola', 'Hei', 'Hallo', 'Hej', 'Helló'];
            setInterval( () => {
                this.title = values[Math.floor(Math.random() * values.length)];
            }, 3000);
        }
    }
</script>



