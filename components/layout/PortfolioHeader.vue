<template>
  <header class="mb-5 pt-3 flex justify-between px-3 sm:px-10">
    <div>
      <a
        target="_blank"
        href="https://github.com/rafael-lua/rafael-lua.github.io/tree/develop"
        >{{ getText('gitRepository') }}</a
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
        @click="changeLanguage('en')"
        @keyup.enter="changeLanguage('en')"
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
        @click="changeLanguage('pt')"
        @keyup.enter="changeLanguage('pt')"
      >
        PORTUGUÊS
      </div>
    </nav>
  </header>
</template>

<script>
import { mapMutations, mapState, mapGetters } from 'vuex'

export default {
  name: 'PortfolioHeader',

  computed: {
    ...mapState({
      language: (state) => state.language,
    }),

    ...mapGetters({
      getText: 'getText',
    }),
  },

  methods: {
    isSelected(lang) {
      return lang === this.language ? 'font-bold lang' : 'font-normal'
    },

    changeLanguage(lang) {
      this.setLanguage(lang)
    },

    ...mapMutations({
      setLanguage: 'setLanguage',
    }),
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
