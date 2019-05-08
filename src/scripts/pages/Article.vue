<template>
    <div class="article">
        <div class="content" v-html="markdown"></div>
    </div>
</template>

<script>
    import Prism from 'prismjs'
    import Remarkable from 'remarkable'
    import { Utils } from '../helpers/utils.js'
    export default {
        data: function () {
            return {
                title: this.$route.name,
                file: undefined,
                markdown: undefined
            }
        },
        mounted() {
            const file = this.$route.path + '.md';
            const md = new Remarkable({
                langPrefix: 'hljs language-'
            });
            Utils.readFile(file, (responseText) => {
                this.markdown = md.render(responseText);
                this.$nextTick(function () {
                    Prism.highlightAll();
                });
            });
        }
    }
</script>
