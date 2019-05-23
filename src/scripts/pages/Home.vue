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
                title: 'Hi',
                index: 0,
            }
        },
        mounted() {
            const values = ['Hi', 'Olá', 'Hallo', 'Salut', 'Hola', 'Hei', 'Hallo', 'Hej', 'Helló'];
            setInterval( () => {
                this.index++;
                if (this.index >= values.length) {
                    this.index = 0;
                }
                this.title = values[this.index];
            }, 3000);
        }
    }
</script>



