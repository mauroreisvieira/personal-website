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
<style lang="scss">
@import "./../../styles/theme.scss";

.progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  border-radius: 2px;
}

.progress::-webkit-progress-bar {
  background-color: transparent;
}

.progress::-webkit-progress-value {
  background-color: color(accent);
}

.progress::-moz-progress-bar {
  background-color: color(accent);
}
</style>


