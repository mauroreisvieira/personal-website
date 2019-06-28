<template>
    <progress class="progress" :value="value" :max="max"></progress>
</template>

<script>
    export default {
        props: {
            max: {
                type: Number,
                required: true
            },
            value: {
                type: Number,
                required: true
            },
        }
    }
</script>



