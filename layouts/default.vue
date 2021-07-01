<template>
  <div class="container mx-auto px-3 sm:px-0">
    <PortfolioHeader />
    <Nuxt />
    <!-- <PortfolioFooter /> -->
  </div>
</template>

<script>
import PortfolioHeader from '@/components/layout/PortfolioHeader.vue'

export default {
  components: {
    PortfolioHeader,
    // PortfolioFooter
  },
}
</script>

<style>
/* font-family: 'Open Sans', sans-serif; */

:root {
  --dark: 20, 20, 20;
  --white: 255, 255, 255;
  --highlight: 255, 181, 36;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Open Sans', sans-serif;
  font-size: 1em;
  line-height: 1.6;
  background: rgb(var(--dark));
  color: rgb(var(--white));
}

a {
  color: rgb(var(--highlight));
  text-decoration: none;
}

p {
  margin: 10px 0;
}
</style>
