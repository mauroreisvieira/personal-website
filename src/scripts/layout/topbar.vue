<template>
    <header class="header">
        <div class="container">
            <div class="header__wrapper">
                <div class="header__button" ref="nav-button" @click="showSidebar">
                    <svg class="nav-button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </div>
                <div class="header__brand">
                    <router-link to="/" class="header__logo">
                        <template v-if="this.theme.appLogo">
                            <img
                            :src="this.theme.appLogo"
                            :alt="this.theme.appName"
                            :title="this.theme.appName" />
                        </template>
                        <template v-else>
                            {{ this.theme.appName }}
                        </template>
                    </router-link>
                </div>
                <div class="header__search">
                    <search v-if="this.theme.search" />
                </div>
            </div>
            <div class="header__nav">
                <navigation />
            </div>
        </div>
    </header>
</template>

<script>
    import { Utils } from '../helpers/utils.js'
    import search from './../components/search.vue'
    import navigation from './navigation.vue'
    export default {
        components: { navigation, search },
        data: function () {
            return {
                theme: this.$store.state.theme,
                menus: this.$store.state.menus
            }
        },
        methods: {
            showSidebar() {
                const sidebar = document.querySelector('.sidebar');
                const article = document.querySelector('.article');
                sidebar.classList.toggle('is-visible');
                article.classList.toggle('is-overlay');
            }
        }
    }
</script>
