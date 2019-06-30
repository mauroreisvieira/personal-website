<template>
  <div class="ripple">
    <div class="ripple__circle"></div>
    <div class="ripple__circle ripple__inner-circle"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "./../../styles/theme.scss";

.ripple {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 64px;
  height: 64px;
  margin: auto;

  .is-loaded & {
    display: none;
  }

  &__circle {
    position: absolute;
    animation: ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    border: 4px solid color(accent);
    border-radius: 50%;
    opacity: 1;
  }

  &__inner-circle {
    animation-delay: -0.5s;
  }
}

@keyframes ripple {
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }

  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
}
</style>
