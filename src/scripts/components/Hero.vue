<template>
    <section class="hero">
        <h1>{{ title }}</h1>
        <span v-if="date">{{ date }}</span>
    </section>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true
            },
            date: {
                type: String
            }
        },
        data: function () {
            return {}
        },
        mounted() {

        },
        methods: {}
    }
</script>



