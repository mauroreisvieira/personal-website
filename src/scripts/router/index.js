import Vue from 'vue'
import Router from 'vue-router'
import pages from '../pages/pages.vue'
import { store } from '../store/store';

Vue.use(Router)

const routes = [];
store.state.menus.map(menu => {
    menu.menus.map(link => {
        routes.push({
            path: link.url,
            name: link.title,
            component: pages,
            meta: link.meta,
            demo: link.demo
        })
    })
});

export default new Router({
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    routes,
    mode: 'history'
})

