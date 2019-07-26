<template>
    <footer class="footer">
        <p>Copyright © {{ new Date().getFullYear() }} Mauro Reis Vieira</p>
        <Social />
    </footer>
</template>

<script>
    import Social from './../components/Social.vue'
    export default {
        components: { Social }
    }
</script>
