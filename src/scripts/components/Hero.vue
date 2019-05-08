<template>
    <section class="hero">
        <h1>{{ title }}</h1>
        <slot />
    </section>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true
            },
        },
        data: function () {
            return {}
        },
        mounted() {

        },
        methods: {}
    }
</script>



