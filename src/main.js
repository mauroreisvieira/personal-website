import Vue from 'vue'
import App from './scripts/App.vue'
import InstantSearch from 'vue-instantsearch';

import router from './scripts/router'
import { store } from './scripts/store/store';

Vue.use(InstantSearch)

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})
