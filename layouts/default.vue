<template>
  <div class="container">
    <PortfolioHeader />
    <Nuxt />
    <!-- <PortfolioFooter /> -->
  </div>
</template>

<script>
import PortfolioHeader from "@/components/layout/PortfolioHeader.vue";

export default {
  components: {
    PortfolioHeader,
    // PortfolioFooter
  }
}
</script>

<style>
/* font-family: 'Open Sans', sans-serif; */

:root {
  --dark: rgb(20, 20, 20);
  --white: rgb(255, 255, 255);
  --highlight: rgb(255, 181, 36);
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
  background: var(--dark);
  color: var(--white);
}

a {
  color: var(--highlight);
  text-decoration: none;
}
</style>