import Vue from 'vue'
import App from './App.vue'
import LazyLoadDirective from "./scripts/directives/LazyLoadDirective";

import router from './scripts/router'
import { store } from './scripts/store';

Vue.directive("lazyload", LazyLoadDirective);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
