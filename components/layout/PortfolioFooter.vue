<template>
  <footer class="mt-16 flex justify-center py-5 px-16 bg-color footer-shadow">
    <div class="flex flex-col items-center gap-y-8">
      <div class="flex gap-x-20">
        <a href="https://github.com/rafael-lua" target="_blank" class="dark">
          <span
            class="iconify"
            data-icon="fa-brands:github"
            data-width="64"
            data-height="64"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/rafael-tragueta-446361174"
          target="_blank"
          class="dark"
        >
          <span
            class="iconify"
            data-icon="fa-brands:linkedin"
            data-width="64"
            data-height="64"
          />
        </a>
        <a href="mailto:rafael.tragueta79@gmail.com" class="dark">
          <span
            class="iconify"
            data-icon="mdi:at"
            data-width="64"
            data-height="64"
          />
        </a>
      </div>
      <div class="flex flex-col items-center">
        <span class="font-semibold text-xl"
          >Made with Vue/Nuxt and Tailwind CSS</span
        >
        <span class="font-regular text-lg">© 2021 - rafael-lua</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PortfolioFooter',
}
</script>

<style scoped>
.bg-color {
  background-color: rgb(var(--highlight));
}

footer {
  color: rgb(var(--dark));
}

/* figma box shadow */
.footer-shadow {
  box-shadow: 0px -4px 4px #000000;
}
</style>
