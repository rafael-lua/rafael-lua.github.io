<template>
  <div class="my-16 flex justify-center">
    <nav class="flex gap-x-16 uppercase">
      <div
        class="px-3 py-1.5 text-xl cursor-pointer transform hover:scale-105"
        :class="isSelected('about')"
      >
        about me
      </div>
      <div
        class="px-3 py-1.5 text-xl cursor-pointer transform hover:scale-105"
        :class="isSelected('skills')"
      >
        my skills
      </div>
      <div
        class="px-3 py-1.5 text-xl cursor-pointer transform hover:scale-105"
        :class="isSelected('projects')"
      >
        my projects
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'ContentSection',

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
  },
}
</script>
