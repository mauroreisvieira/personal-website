<template>
    <header class="header">
        <Nav />
    </header>
</template>

<script>
    import Nav from './Nav.vue'
    export default {
        components: { Nav },
        data: function () {
            return {
                theme: this.$store.state.theme
            }
        }
    }
</script>
