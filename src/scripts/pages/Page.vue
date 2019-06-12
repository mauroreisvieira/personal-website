<template>
    <div v-html="markdown"></div>
</template>

<script>
    import Prism from 'prismjs'
    import Remarkable from 'remarkable'
    import { Utils } from '../helpers/utils.js'
    export default {
        data: function () {
            return {
                file: undefined,
                markdown: undefined
            }
        },
        props: {
            path: {
                type: String,
                required: true
            }
        },
        mounted() {
            const file = this.path + '.md';
            const md = new Remarkable({
                langPrefix: 'hljs language-'
            });
            console.log(file);
            Utils.readFile(file, (responseText) => {
                console.log(responseText);
                this.markdown = md.render(responseText);
                this.$nextTick(function () {
                    Prism.highlightAll();
                });
            });
        }
    }
</script>
