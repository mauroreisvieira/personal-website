import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        theme: {
            appName: "Mauro Reis Vieira",
            search: false
        },
        social: {
            codepen: "https://codepen.io/mauroreisvieira/",
            twitter: "https://twitter.com/mauroreisvieira/",
            github: "https://github.com/mauroreisvieira/",
            linkedin: "https://www.linkedin.com/in/mauro-reis-vieira-a752928b/"
        }
    }
});
