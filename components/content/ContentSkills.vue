<template>
  <div class="flex justify-center gap-x-5">
    <div class="hard-width flex flex-col">
      <div class="uppercase font-bold text-xl h-div-hard text-right">
        hard skills
      </div>
      <div class="p-3 flex flex-col items-center">
        <div class="flex flex-col items-center gap-y-1">
          <div class="flex items-center">
            <span
              class="iconify mr-1"
              data-icon="fa-solid:graduation-cap"
              data-width="16"
              data-height="16"
            />
            <span class="text-sm">I know</span>
          </div>

          <div class="flex gap-x-10 p-3 border-2 rounded-xl border-yellow-400">
            <div class="flex flex-col">
              <div class="flex items-center gap-x-2">
                <span>&#8226;</span>
                <span class="font-bold">HTML5</span>
              </div>
              <div class="flex items-center gap-x-2">
                <span>&#8226;</span>
                <span class="font-bold">CSS3</span>
              </div>
              <div class="flex items-center gap-x-2">
                <span>&#8226;</span>
                <span class="font-bold">JavaScript (ES6)</span>
              </div>
            </div>

            <div class="flex flex-col">
              <div class="flex items-center gap-x-2">
                <span>&#8226;</span>
                <span class="font-bold">React (with hooks)</span>
              </div>
              <div class="flex items-center gap-x-2">
                <span>&#8226;</span>
                <span class="font-bold">Redux (+ Thunk)</span>
              </div>
              <div class="flex items-center gap-x-2">
                <span>&#8226;</span>
                <span class="font-bold">Node/Express</span>
              </div>
            </div>

            <div class="flex flex-col">
              <div class="flex items-center gap-x-2">
                <span>&#8226;</span>
                <span class="font-bold">Vue</span>
              </div>
              <div class="flex items-center gap-x-2">
                <span>&#8226;</span>
                <span class="font-bold">Vuex</span>
              </div>
              <div class="flex items-center gap-x-2">
                <span>&#8226;</span>
                <span class="font-bold">Nuxt.js</span>
              </div>
            </div>

            <div class="flex flex-col">
              <div class="flex items-center gap-x-2">
                <span>&#8226;</span>
                <span class="font-bold">Git/Github</span>
              </div>
              <div class="flex items-center gap-x-2">
                <span>&#8226;</span>
                <span class="font-bold">RESTful API</span>
              </div>
              <div class="flex items-center gap-x-2">
                <span>&#8226;</span>
                <span class="font-bold">Scrum/Kanban</span>
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
        content content content content content content content content content
        content
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentSkills',
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
