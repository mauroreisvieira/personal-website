<template>
    <article>
        <span>{{ date }}</span>
        <h2>{{ title }}</h2>
        <a :href="path" class="btn btn--accent btn--shaped">Read More</a>
    </article>
</template>

<script>
    export default {
        data: function () {
            return {}
        },
        props: {
            path: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            date: {
                type: String,
                required: true
            }
        }
    }
</script>
