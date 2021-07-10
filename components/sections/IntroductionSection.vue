<template>
  <div class="flex justify-evenly my-16">
    <div class="flex items-center mx-5">
      <div class="v-line bg-yellow-400 mx-5"></div>
      <div class="flex-col mx-5">
        <div class="tracking-wide my-10 text-5xl font-bold">
          {{ getText('introduction.greeting') }}
        </div>

        <div
          class="
            width-limit
            leading-10
            tracking-wide
            my-10
            text-3xl
            break-words
          "
        >
          <span v-html="getText('introduction.whoami')"></span>
        </div>

        <!-- socials list  -->
        <div class="flex-col my-10">
          <div
            v-for="social in socials"
            :key="social.name"
            class="my-4 flex items-center"
          >
            <span
              class="iconify mr-3"
              :data-icon="social.icon"
              data-width="32"
              data-height="32"
            />
            <span>
              {{ social.name }}:
              <a :href="social.link" target="_blank">{{
                social.placeholder
              }}</a>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-start justify-center mx-5">
      <div class="flex flex-col border-2 rounded-xl p-2">
        <div class="flex items-center">
          <span
            class="iconify mr-3"
            data-icon="mdi:tools"
            data-width="24"
            data-height="24"
          />
          <span class="text-lg font-semibold">{{
            getText('introduction.skillsTitle')
          }}</span>
        </div>

        <div class="flex flex-col items-start frame-width">
          <!-- top row of icons -->
          <div class="flex mx-auto gap-x-10">
            <div
              v-for="skill in mainSkillsTop"
              :key="skill.name"
              class="my-5 flex flex-col items-center"
            >
              <span
                class="iconify mb-1"
                :data-icon="skill.icon"
                data-width="48"
                data-height="48"
              />
              <span class="font-bold">{{ skill.name }}</span>
            </div>
          </div>

          <!-- bottom row of icons -->
          <div class="flex mx-auto gap-x-10">
            <div
              v-for="skill in mainSkillsBottom"
              :key="skill.name"
              class="my-5 flex flex-col items-center"
            >
              <span
                class="iconify mb-1"
                :data-icon="skill.icon"
                data-width="48"
                data-height="48"
              />
              <span class="font-bold">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'IntroductionSection',

  data() {
    return {
      socials: [
        {
          name: 'Github',
          icon: 'fa-brands:github',
          link: 'https://github.com/rafael-lua',
          placeholder: 'github.com/rafael-lua',
        },
        {
          name: 'Linkedin',
          icon: 'fa-brands:linkedin',
          link: 'https://www.linkedin.com/in/rafael-tragueta-446361174',
          placeholder: 'www.linkedin.com/in/rafael-tragueta-446361174',
        },
        {
          name: 'E-mail',
          icon: 'mdi:at',
          link: 'mailto:rafael.tragueta79@gmail.com',
          placeholder: 'rafael.tragueta79@gmail.com',
        },
      ],
      mainSkillsTop: [
        { name: 'HTML', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS', icon: 'vscode-icons:file-type-css' },
        { name: 'JavaScript', icon: 'vscode-icons:file-type-js-official' },
        { name: 'Express', icon: 'vscode-icons:file-type-node' },
        { name: 'React', icon: 'vscode-icons:file-type-reactjs' },
      ],
      mainSkillsBottom: [
        { name: 'Redux', icon: 'vscode-icons:folder-type-light-redux' },
        { name: 'Vue', icon: 'vscode-icons:file-type-vue' },
        { name: 'Nuxt', icon: 'vscode-icons:file-type-nuxt' },
        { name: 'Git', icon: 'vscode-icons:file-type-git' },
        { name: 'RESTful API', icon: 'vscode-icons:file-type-rest' },
      ],
    }
  },

  computed: {
    ...mapGetters({
      getText: 'getText',
    }),
  },
}
</script>

<style scoped>
.v-line {
  width: 20px;
  height: 250px;
}

/* matching the width of figma for the left side text */
.width-limit {
  max-width: 400px;
}

/* matching the width of figma for the right frame with the skills */
.frame-width {
  width: 600px;
}
</style>
