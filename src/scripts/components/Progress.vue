<template>
    <progress class="progress" :value="value" :max="max">
        <div class="progress__container">
            <span class="progress__bar"></span>
        </div>
    </progress>
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



