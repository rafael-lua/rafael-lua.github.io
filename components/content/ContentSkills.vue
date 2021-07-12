<template>
  <div class="flex justify-center gap-x-5">
    <div class="hard-width flex flex-col">
      <div class="uppercase font-bold text-xl h-div-hard text-right">
        hard skills
      </div>
      <div class="p-3 flex flex-col items-center gap-y-5">
        <!-- "i know" list group of items -->
        <div class="flex flex-col items-center gap-y-1">
          <div class="flex items-center">
            <span
              class="iconify mr-2"
              data-icon="fa-solid:graduation-cap"
              data-width="16"
              data-height="16"
            />
            <span class="text-sm">{{ skillsText.hard.know }}</span>
          </div>

          <div class="flex gap-x-10 p-3 border-2 rounded-xl border-yellow-400">
            <div
              v-for="(knowItem, index) in know"
              :key="index"
              class="flex flex-col"
            >
              <div
                v-for="(skill, skillIndex) in knowItem"
                :key="skillIndex"
                class="flex items-center gap-x-2"
              >
                <span>&#8226;</span>
                <span class="font-semibold">{{ skill }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- "i'm familiar with" list group of items -->
        <div class="flex flex-col items-center gap-y-1">
          <div class="flex items-center">
            <span
              class="iconify mr-2"
              data-icon="fa-solid:book"
              data-width="16"
              data-height="16"
            />
            <span class="text-sm">{{ skillsText.hard.familiar }}</span>
          </div>

          <div class="flex gap-x-10 p-3 border-2 rounded-xl border-yellow-400">
            <div
              v-for="(familiarItem, index) in familiar"
              :key="index"
              class="flex flex-col"
            >
              <div
                v-for="(skill, skillIndex) in familiarItem"
                :key="skillIndex"
                class="flex items-center gap-x-2"
              >
                <span>&#8226;</span>
                <span class="font-semibold">{{ skill }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-space-between gap-x-10">
          <!-- "i'm learning" list group of items -->
          <div class="flex flex-col items-center gap-y-1">
            <div class="flex items-center">
              <span
                class="iconify mr-2"
                data-icon="fa-solid:search-plus"
                data-width="16"
                data-height="16"
              />
              <span class="text-sm">{{ skillsText.hard.learn }}</span>
            </div>

            <div
              class="flex gap-x-10 p-3 border-2 rounded-xl border-yellow-400"
            >
              <div class="flex flex-col">
                <div
                  v-for="(skill, skillIndex) in learn"
                  :key="skillIndex"
                  class="flex items-center gap-x-2"
                >
                  <span>&#8226;</span>
                  <span class="font-semibold">{{ skill }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- "i used" list group of items -->
          <div class="flex flex-col items-center gap-y-1">
            <div class="flex items-center">
              <span
                class="iconify mr-2"
                data-icon="fa-solid:book-open"
                data-width="16"
                data-height="16"
              />
              <span class="text-sm">{{ skillsText.hard.used }}</span>
            </div>

            <div
              class="flex gap-x-10 p-3 border-2 rounded-xl border-yellow-400"
            >
              <div class="flex flex-col">
                <div
                  v-for="(skill, skillIndex) in used"
                  :key="skillIndex"
                  class="flex items-center gap-x-2"
                >
                  <span>&#8226;</span>
                  <span class="font-semibold">{{ skill }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="v-line bg-yellow-400"></div>

    <div class="flex flex-col">
      <div class="uppercase font-bold text-xl h-div-soft">soft skills</div>
      <div class="p-3">
        in construction
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentSkills',

  props: {
    skillsText: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      know: [
        ['HTML5', 'CSS3', 'JavaScript (ES6)'],
        ['React (Hooks)', 'Redux (+ Thunk)', 'Node/Express'],
        ['Vue', 'Vuex', 'Nuxt.js'],
        ['Git/Github', 'RESTful API', 'TailwindCSS'],
      ],
      familiar: [
        ['Docker', 'CI/CD', 'Github Actions'],
        ['SQL', 'MongoDB'],
        ['Jest/Cypress', 'Next.js', 'Scrum/Kanban'],
        ['C4 Model', 'Figma'],
      ],
      learn: ['C#', 'ASP.NET Core', 'MVC', 'PostgreSQL'],
      used: ['PHP', 'CodeIgniter', 'Bulma'],
    }
  },
}
</script>

<style scoped>
.v-line {
  width: 7px;
  height: 350px;
  margin-top: auto;
  margin-bottom: auto;
}

.h-div-hard,
.h-div-soft {
  position: relative;
}

.h-div-hard::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: rgba(var(--white), 0.75);
  bottom: -5px;
  right: 0;
}

.h-div-soft::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: rgba(var(--white), 0.75);
  bottom: -5px;
  left: 0;
}

.hard-width {
  width: 75vw;
}
</style>
