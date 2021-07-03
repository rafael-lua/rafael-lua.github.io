<template>
  <header class="mb-5 pt-3 flex justify-between px-3 sm:px-10">
    <div>
      <a
        target="_blank"
        href="https://github.com/rafael-lua/rafael-lua.github.io/tree/develop"
        >Repository</a
      >
    </div>
    <nav class="flex">
      <!-- keyup and tabindex is added for supporting keyboard navigation -->
      <div
        tabindex="0"
        class="
          w-28
          mx-4
          text-lg text-center
          cursor-pointer
          transform
          hover:scale-105
        "
        :class="isSelected('en')"
        @click="selectLang('en')"
        @keyup.enter="selectLang('en')"
      >
        ENGLISH
      </div>
      <div
        tabindex="0"
        class="
          w-28
          mx-4
          text-lg text-center
          cursor-pointer
          transform
          hover:scale-105
        "
        :class="isSelected('pt')"
        @click="selectLang('pt')"
        @keyup.enter="selectLang('pt')"
      >
        PORTUGUÊS
      </div>
    </nav>
  </header>
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

    selectLang(lang) {
      this.language = lang
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
