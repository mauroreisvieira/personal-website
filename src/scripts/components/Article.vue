<template>
  <article class="article">
    <router-link :to="path"></router-link>
    <figure v-lazyload class="article__picture">
      <ImageSpinner
        class="image__spinner"
      />
      <img
        :data-url="this.static(picture)"
        :alt="title" />
    </figure>
    <aside class="article__content">
      <h3 class="article__title">{{ title }}</h3>
      <p>{{ description }}</p>
      <hr>
      <h6 class="article__author">Mauro Reis Vieira, @Namecheap</h6>
      <h6 class="article__caption">{{ datetime }} / 30min</h6>
    </aside>
  </article>
</template>

<script>
  import { Utils } from '../helpers/Utils.js'
  import ImageSpinner from "./ImageSpinner";
  export default {
    components: { ImageSpinner },
    data: function () {
      return {
        datetime: Utils.formatDate(this.date)
      }
    },
    props: {
      path: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      picture: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      date: {
        type: String,
        required: true
      }
    },
    methods: {
      static(image) {
        return require('@/statics/blog/' + image);
      },
    },
    mounted() {}
  }

</script>

<style lang="scss">
/* stylelint-disable selector-max-type */
@import "./../../styles/theme.scss";

.article {
  position: relative;
  padding: 0 0 $theme-baseline * 2;
  transition: opacity 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
  color: initial;
  overflow: hidden;

  &:hover {
    opacity: .6;
  }

  a {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9;
  }

  &__title {
    margin-top: $theme-baseline * 4;
    font-size: size(lg);
  }

  &__picture {
    position: relative;
    display: flex;
    height: $theme-baseline * 40;
    margin: 0;
    padding: 0;
    background-color: color(grayscale, 100);

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
  }

  hr {
    width: $theme-baseline * 4;
    margin: $theme-baseline * 4 0;
    background-color: color(accent);
  }

  &__caption,
  &__author {
    margin: 0;
    font-size: size(xs);
    font-weight: weight(medium);
    text-transform: uppercase;
  }

  &__caption {
    color: color(grayscale, 300);
  }
}
</style>
