import Vue from "vue";
import Router from "vue-router";

import Home from "../Pages/Home.vue";
import About from "../Pages/About.vue";
import Blog from "../Pages/Blog.vue";

import { store } from "../store/store";
Vue.use(Router);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            description: ""
        }
    },
    {
        path: "/about",
        name: "About",
        component: About,
        meta: {
            description: ""
        }
    },
    {
        path: "/blog",
        name: "Blog",
        component: Blog,
        meta: {
            description: ""
        }
    }
];

export default new Router({
    mode: 'history',
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    linkActiveClass: "is-active",
    linkExactActiveClass: "is-exact-active",
    routes
});
