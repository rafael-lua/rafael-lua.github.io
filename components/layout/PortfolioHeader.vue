<template>
  <div class="mb-5 pt-3 flex justify-between">
    <div>Portfolio</div>
    <nav class="flex">
      <div class="w-36 text-lg text-center" :class="isSelected('en')">
        ENGLISH
      </div>
      <div class="w-36 text-lg text-center" :class="isSelected('pt')">
        PORTUGUÊS
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'PortfolioHeader',

  data() {
    return {
      language: 'en',
    }
  },

  methods: {
    isSelected(lang) {
      return lang === this.language ? 'font-bold lang' : 'font-normal'
    },
  },
}
</script>

<style scoped>
.lang {
  position: relative;
}

.lang::after {
  content: '';
  position: absolute;
  width: 30px;
  height: 5px;
  background-color: rgba(var(--highlight), 0.75);
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
