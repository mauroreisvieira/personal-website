<template>
    <section class="hero">
        <h1 class="hero__title">{{ title }}</h1>
        <span v-if="date" class="hero__date">{{ date }}</span>
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
        }
    }
</script>



