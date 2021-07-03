<template>
  <div class="my-16 flex flex-col items-center">
    <nav class="flex gap-x-16 uppercase mb-8">
      <div
        tabindex="0"
        class="px-3 py-1.5 text-xl cursor-pointer transform hover:scale-105"
        :class="isSelected('about')"
        @click="selectMenu('about')"
      >
        about me
      </div>
      <div
        tabindex="0"
        class="px-3 py-1.5 text-xl cursor-pointer transform hover:scale-105"
        :class="isSelected('skills')"
        @click="selectMenu('skills')"
        @keyup.enter="selectMenu('skills')"
      >
        my skills
      </div>
      <div
        tabindex="0"
        class="px-3 py-1.5 text-xl cursor-pointer transform hover:scale-105"
        :class="isSelected('projects')"
        @click="selectMenu('projects')"
        @keyup.enter="selectMenu('projects')"
      >
        my projects
      </div>
    </nav>
    <div>
      <ContentAbout v-show="selected === 'about'" />
      <ContentSkills v-show="selected === 'skills'" />
      <ContentProjects v-show="selected === 'projects'" />
    </div>
  </div>
</template>

<script>
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
