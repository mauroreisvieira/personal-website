<template>
    <article class="article">
        <router-link :to="path"></router-link>
        <div class="content">
        <figure class="article__picture">
            <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80"
            srcset=""
            alt="">
        </figure>
        <aside>
            <h3 class="article__title">{{ title }}</h3>
            <p>{{ description }}</p>
            <hr>
            <h6 class="article__author">Mauro Reis Vieira, @Namecheap</h6>
            <h6 class="article__caption">{{ datetime }} / 30min</h6>
        </aside>
        </div>
    </article>
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
