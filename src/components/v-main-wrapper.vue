<template>
  <div class="v-main-wrapper">
    <v-header />
    <v-about-complex />
    <v-footer />
  </div>
</template>

<script>
  import vHeader from './v-header'
  import vAboutComplex from './v-about-complex'
  import vFooter from './v-footer'

  export default {
      name: "v-main-wrapper",
      components: {
        vHeader,
        vAboutComplex,
        vFooter
      }
  }
</script>