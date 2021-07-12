<template>
  <div class="my-16 flex flex-col items-center">
    <nav class="flex gap-x-16 uppercase mb-8">
      <div
        tabindex="0"
        class="px-3 py-1.5 text-xl cursor-pointer transform hover:scale-105"
        :class="isSelected('about')"
        @click="selectMenu('about')"
      >
        {{ getText('content.menu.about') }}
      </div>
      <div
        tabindex="0"
        class="px-3 py-1.5 text-xl cursor-pointer transform hover:scale-105"
        :class="isSelected('skills')"
        @click="selectMenu('skills')"
        @keyup.enter="selectMenu('skills')"
      >
        {{ getText('content.menu.skills') }}
      </div>
      <div
        tabindex="0"
        class="px-3 py-1.5 text-xl cursor-pointer transform hover:scale-105"
        :class="isSelected('projects')"
        @click="selectMenu('projects')"
        @keyup.enter="selectMenu('projects')"
      >
        {{ getText('content.menu.projects') }}
      </div>
    </nav>
    <div>
      <ContentAbout
        v-show="selected === 'about'"
        :history="getHistory"
        :milestones-text="getMilestonesText"
      />
      <ContentSkills v-show="selected === 'skills'" />
      <ContentProjects v-show="selected === 'projects'" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import ContentAbout from '@/components/content/ContentAbout.vue'
import ContentSkills from '@/components/content/ContentSkills.vue'
import ContentProjects from '@/components/content/ContentProjects.vue'

export default {
  name: 'ContentSection',

  components: {
    ContentAbout,
    ContentSkills,
    ContentProjects,
  },

  data() {
    return {
      selected: 'about',
      selectedClass: 'font-bold border-2 border-yellow-400 rounded-xl',
    }
  },

  computed: {
    getHistory() {
      return this.getText('content.about.history')
    },

    getMilestonesText() {
      return this.getText('content.about.milestones')
    },

    ...mapGetters({
      getText: 'getText',
    }),
  },

  methods: {
    isSelected(menu) {
      return this.selected === menu ? this.selectedClass : ''
    },

    selectMenu(menu) {
      this.selected = menu
    },
  },
}
</script>
