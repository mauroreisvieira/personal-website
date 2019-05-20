<template>
    <footer class="footer">
        <div class="row">
            <div class="col-md-6">
                <p>Copyright © 2019 Mauro Reis Vieira</p>
            </div>
            <div class="col-md-6">
                <Social />
            </div>
        </div>
    </footer>
</template>

<script>
    import Social from './../components/Social.vue'
    export default {
        components: { Social }
    }
</script>
