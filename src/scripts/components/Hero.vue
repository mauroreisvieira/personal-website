<template>
    <section class="hero">
        <h1 class="hero__title">{{ title }}</h1>
        <div class="hero__publish" v-if="date || author">
            <span v-if="date" class="hero__date">{{ date }}</span>
            <span v-if="author" class="hero__author"> - by {{ author }}</span>
        </div>
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
            },
            author: {
                type: String
            }
        }
    }
</script>



