<template>
    <article class="article">
        <span class="article__date">{{ this.formatDate(date) }}</span>
        <h2 class="article__title">{{ title }}</h2>
        <p>{{ description }}</p>
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
            description: {
                type: String,
                required: true
            },
            date: {
                type: String,
                required: true
            }
        },
        methods: {
            formatDate(date) {
                const dt = new Date(date);
                const day = dt.getDate();
                const year = dt.getFullYear();
                const month = dt.toLocaleString('en-us', { month: 'long' });
                return `${month} ${day}, ${year}`;
            }
        },
        mounted () {}
    }
</script>
