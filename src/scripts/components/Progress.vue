<template>
    <div class="progress progress--accent">
        <progress class="progress__control" :value="value" :max="max"></progress>
    </div>
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



