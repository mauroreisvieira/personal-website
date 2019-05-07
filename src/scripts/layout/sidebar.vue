<template>
    <div class="sidebar">
        <div class="sidebar__section"
            v-for="(menu, index) in this.menus"
            :key="index"
            v-if="(menu.isVisible === undefined) || menu.isVisible">
            <p class="sidebar__title uppercase"><strong>{{menu.name}}</strong></p>
            <nav class="menu" role="menu" aria-hidden="true">
                <router-link
                    class="menu__item"
                    @click.native="hideSidebar"
                    v-for="(link, index) in menu.menus"
                    :key="index"
                    :to="link.url"
                    :title="link.title" >
                    {{ link.title }}
                </router-link>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                menus: this.$store.state.menus
            }
        },
        methods: {
            hideSidebar(ev) {
                const sidebar = document.querySelector('.sidebar');
                const article = document.querySelector('.article');
                sidebar.classList.remove('is-visible');
                article.classList.remove('is-overlay');
            }
        }
    }
</script>
