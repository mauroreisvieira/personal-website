<template>
    <div class="search">
        <div class="textfield" v-if="this.algolia">
            <input
                @keyup="onSearch"
                v-model="search"
                type="text"
                placeholder="Search in documentation..."
                class="textfield__control" />
        </div>
        <div class="search__result" v-if="this.search">
            <div class="card">
                <div class="card__body">
                    <transition name="fade-down">
                        <nav class="menu"
                            v-if="this.searchResult.length"
                            role="menu"
                            aria-hidden="true">
                            <router-link
                                class="menu__item"
                                @click.native="clickInResult"
                                v-for="(result, index) in searchResult"
                                :key="index"
                                :to="result.url"
                                :title="result.title" >
                                <span v-html="highlight(result.title)"></span>
                            </router-link>
                        </nav>
                    </transition>
                    <div v-if="!this.searchResult.length">
                        <p class="has-no-results">No result found for query "<span>{{ this.search }}</span>"</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import algoliasearch from 'algoliasearch'
    export default {
        data: function () {
            return {
                algolia: this.$store.state.algolia,
                query: '',
                index: false,
                search: '',
                searchResult: []
            }
        },
        methods: {
            highlight(words) {
                var iQuery = new RegExp(this.query, "ig");
                return words.toString().replace(iQuery, function(matchedTxt,a,b){
                    return ('<span class=\'is-highlight\'>' + matchedTxt + '</span>');
                });
            },
            byAlgolia() {
                const client = algoliasearch(
                    this.algolia.applicationID,
                    this.algolia.apiKey
                );
                this.index = client.initIndex(this.algolia.index);
            },
            onSearch(evt) {
                switch(evt.keyCode) {
                    case 27:
                        this.clickInResult();
                    break;
                    case 38:
                    case 37:
                    case 39:
                    case 40:
                        evt.preventDefault();
                    break
                    default:
                        this.searchResult = [];
                        this.index.search(this.search, (err, content) => {
                            this.query = content.query;
                            this.searchResult = content.hits;
                        });
                }
            },
            clickInResult() {
                this.search = '';
            }
        },
        mounted() {
            if (this.algolia) {
                this.byAlgolia();
            }
        }
    }
</script>
