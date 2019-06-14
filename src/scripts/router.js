import Vue from "vue";
import Router from "vue-router";

import About from "./pages/About.vue";
import Blog from "./pages/Blog.vue";
import Detail from "./pages/Detail.vue";
import Home from "./pages/Home.vue";

import BlogEntries from './../../blog.json';

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
    mode: 'history',
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    linkActiveClass: "is-active",
    linkExactActiveClass: "is-exact-active",
    routes
});
