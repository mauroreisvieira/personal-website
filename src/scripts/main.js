import Vue from 'vue'
import App from './App.vue'
import InstantSearch from 'vue-instantsearch';

import router from './router'
import { store } from './store';

Vue.use(InstantSearch)

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})
