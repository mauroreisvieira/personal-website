<template>
    <div class="article">
        <div class="content" v-html="markdown"></div>
    </div>
</template>

<script>
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
            console.log(this.$route.path);
            const file = this.$route.path + '.md';
            const md = new Remarkable();

            Utils.readFile(file, (responseText) => {
                this.markdown = md.render(responseText);
            });
        },
        methods: {}
    }
</script>



