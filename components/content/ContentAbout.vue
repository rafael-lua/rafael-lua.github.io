<template>
  <div class="flex items-center justify-center gap-x-10">
    <div class="flex flex-col gap-y-5 max-width break-words">
      <span> My name is Rafael de Oliveira Tragueta, I am from Brazil. </span>
      <span>
        I have always been interested in coding. I gave my first steps with game
        development around five to seven years ago.
      </span>
      <span>
        My first genuine programming language was Lua with the Love game
        framework. After that, I kept jumping between engines and frameworks,
        trying new things and languages.
      </span>
      <span>
        Eventually, I got into web development when trying to make games aiming
        for browsers. At the same time, I entered the FATEC university to study
        Systems Development and Analysis. As I discovered more of the web
        development world, I decided to follow this path professionally. I find
        the full stack development flow very interesting, and I pursue being
        capable of handling both front-end and back-end.
      </span>
    </div>
    <div class="flex">
      <div class="v-line bg-yellow-400 mr-5"></div>
      <div class="flex flex-col">
        <div class="h-div text-xl flex items-center">
          <Icon icon="mdi:at" width="24" height="24" class="mr-1" />
          <span>RELEVANT MILESTONES</span>
        </div>

        <div class="flex flex-col gap-y-8 p-5 break-words">
          <div>
            <div class="flex items-center gap-x-3">
              <span>&#8226;</span>
              <span class="font-bold">TCC FATEC - Music albums database</span>
            </div>
            <div>
              An small web project made with PHP (CodeIgniter). It was inpired
              by things like <a href="#">IMDb</a>, but for music!
              <!-- <span v-html="rawHtml"></span> -->
            </div>
          </div>

          <div>
            <div class="flex items-center gap-x-3">
              <span>&#8226;</span>
              <span class="font-bold">FreeCodeCamp Certificates</span>
            </div>
            <ul>
              <li class="ml-3">1. Responsive Web Design (link)</li>
              <li class="ml-3">
                2. JavaScript Algorithms and Data Structures (link)
              </li>
              <li class="ml-3">3. Front End Libraries (link)</li>
              <!-- <span v-html="rawHtml"></span> -->
            </ul>
          </div>

          <div>
            <div class="flex items-center gap-x-3">
              <span>&#8226;</span>
              <span class="font-bold">FullStackOpen Certificates</span>
            </div>
            <ul>
              <li class="ml-3">
                1. Parts 1 to 7 (React, Express, MondoDB...) (link)
              </li>
              <li class="ml-3">2. Part 8 (GraphQL, Apollo) (link)</li>
              <li class="ml-3">
                3. Part 11 (CI/CD with Github actions) (link)
              </li>
              <!-- <span v-html="rawHtml"></span> -->
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2'

export default {
  name: 'ContentAbout',

  components: {
    Icon,
  },
}
</script>

<style scoped>
.max-width {
  max-width: 750px;
}

.v-line {
  width: 10px;
  height: 350px;
  margin-top: auto;
  margin-bottom: auto;
}

.h-div {
  position: relative;
}

.h-div::after {
  content: '';
  position: absolute;
  width: 50%;
  height: 2px;
  background-color: rgba(var(--white), 0.75);
  bottom: -5px;
  left: 0;
}
</style>
