import Vue from "vue";
import Router from "vue-router";

import About from "../Pages/About.vue";
import Blog from "../Pages/Blog.vue";
import Detail from "../Pages/Detail.vue";
import Home from "../Pages/Home.vue";
import Page from "../Pages/Page.vue";

import BlogEntries from '../../../blog.json';

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

    console.log(BlogEntries);
BlogEntries.forEach(blog => {
    routes.push({
        path: blog.path,
        name: blog.title,
        component: Detail,
        meta: {
            description: blog.description
        }
    })
});

export default new Router({
    // mode: 'history',
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    linkActiveClass: "is-active",
    linkExactActiveClass: "is-exact-active",
    routes
});
