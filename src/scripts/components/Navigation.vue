<template>
    <ul
        v-if="prev || next"
        class="navigation navigation--blog"
        role="navigation">
        <li v-if="prev >= 0 && prev < data.length" class="navigation__prev">
            <span>Previous</span>
            <router-link :to="data[prev].path">
                <svg fill="currentColor" viewBox="0 0 40 40">
                    <g>
                        <path d="m33.4 18.4v3.2h-20.4l9.3 9.4-2.3 2.4-13.4-13.4 13.4-13.4 2.3 2.4-9.3 9.4h20.4z"></path>
                    </g>
                </svg>
                {{ data[prev].title }}
            </router-link>
        </li>
        <li v-if="next >= 0 && next < data.length" class="navigation__next">
            <span>Next</span>
            <router-link :to="data[next].path">
                {{ data[next].title }}
                <svg fill="currentColor" viewBox="0 0 40 40">
                    <g>
                        <path d="m20 6.6l13.4 13.4-13.4 13.4-2.3-2.4 9.3-9.4h-20.4v-3.2h20.4l-9.3-9.4z"></path>
                    </g>
                </svg>
            </router-link>
        </li>
    </ul>
</template>

<script>
    import BlogEntries from '../../../blog.json';
    export default {
        data: function () {
            return {
                data: BlogEntries
            }
        },
        props: {
            prev: {
                type: Number
            },
            next: {
                type: Number
            }
        },
        mounted() {

        }
    }
</script>



