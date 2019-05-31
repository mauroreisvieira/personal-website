<template>
    <router-link :to="path">
        <article class="article">
            <span class="article__date">{{ datetime }}</span>
            <h2 class="article__title">{{ title }}</h2>
            <p>{{ description }}</p>
        </article>
    </router-link>
</template>

<script>
    import { Utils } from '../helpers/utils.js'
    export default {
        data: function () {
            return {
                datetime: Utils.formatDate(this.date)
            }
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
        }
    }
</script>
