import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        theme: {
            appName: "Mauro Reis Vieira",
            search: false
        },
        menus: [
            {
                menus: [
                    {
                        url: "/blog/introduction",
                        title: "Blog",
                        meta: {
                            description: ""
                        }
                    }
                ]
            }
        ],
        algolia: {
            applicationID: "UJM78II4VW",
            apiKey: "f2f3806e8814c4cc3835a6929dc6b43c",
            index: "me_pages"
        },
        social: {
            twitter: "https://twitter.com/mauroreisvieira",
            github: "https://github.com/mauroreisvieira/me",
            linkedin: false
        }
    }
});
