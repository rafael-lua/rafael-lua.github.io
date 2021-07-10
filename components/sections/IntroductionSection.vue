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
          I’m <strong>Rafael</strong> and I’m a full stack developer
        </div>

        <div class="flex-col my-10">
          <div class="my-4 flex items-center">
            <span
              class="iconify mr-3"
              data-icon="fa-brands:github"
              data-width="32"
              data-height="32"
            />
            <span
              ><strong
                >Github:
                <a href="https://github.com/rafael-lua" target="_blank"
                  >github.com/rafael-lua</a
                ></strong
              ></span
            >
          </div>
          <div class="my-4 flex items-center">
            <span
              class="iconify mr-3"
              data-icon="fa-brands:linkedin"
              data-width="32"
              data-height="32"
            />
            <span
              >Linkedin:
              <a
                href="https://www.linkedin.com/in/rafael-tragueta-446361174"
                target="_blank"
                >www.linkedin.com/in/rafael-tragueta-446361174</a
              ></span
            >
          </div>
          <div class="my-4 flex items-center">
            <span
              class="iconify mr-3"
              data-icon="mdi:at"
              data-width="32"
              data-height="32"
            />
            <span
              >Email:
              <a href="mailto:rafael.tragueta79@gmail.com"
                >rafael.tragueta79@gmail.com</a
              >
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
          <span class="text-lg font-semibold">My main skills</span>
        </div>

        <div class="flex flex-col items-start frame-width">
          <!-- top row of icons -->
          <div class="flex mx-auto gap-x-10">
            <div class="my-5 flex flex-col items-center">
              <span
                class="iconify mb-1"
                data-icon="vscode-icons:file-type-html"
                data-width="48"
                data-height="48"
              />
              <span class="font-bold">HTML</span>
            </div>

            <div class="my-5 flex flex-col items-center">
              <span
                class="iconify mb-1"
                data-icon="vscode-icons:file-type-css"
                data-width="48"
                data-height="48"
              />
              <span class="font-bold">CSS</span>
            </div>

            <div class="my-5 flex flex-col items-center">
              <span
                class="iconify mb-1"
                data-icon="vscode-icons:file-type-js-official"
                data-width="48"
                data-height="48"
              />
              <span class="font-bold">JavaScript</span>
            </div>

            <div class="my-5 flex flex-col items-center">
              <span
                class="iconify mb-1"
                data-icon="vscode-icons:file-type-node"
                data-width="48"
                data-height="48"
              />
              <span class="font-bold">Express</span>
            </div>

            <div class="my-5 flex flex-col items-center">
              <span
                class="iconify mb-1"
                data-icon="vscode-icons:file-type-reactjs"
                data-width="48"
                data-height="48"
              />
              <span class="font-bold">React</span>
            </div>
          </div>

          <!-- bottom row of icons -->
          <div class="flex mx-auto gap-x-10">
            <div class="my-5 flex flex-col items-center">
              <span
                class="iconify mb-1"
                data-icon="vscode-icons:folder-type-light-redux"
                data-width="48"
                data-height="48"
              />
              <span class="font-bold">Redux</span>
            </div>

            <div class="my-5 flex flex-col items-center">
              <span
                class="iconify mb-1"
                data-icon="vscode-icons:file-type-vue"
                data-width="48"
                data-height="48"
              />
              <span class="font-bold">Vue</span>
            </div>

            <div class="my-5 flex flex-col items-center">
              <span
                class="iconify mb-1"
                data-icon="vscode-icons:file-type-nuxt"
                data-width="48"
                data-height="48"
              />
              <span class="font-bold">Nuxt</span>
            </div>

            <div class="my-5 flex flex-col items-center">
              <span
                class="iconify mb-1"
                data-icon="vscode-icons:file-type-git"
                data-width="48"
                data-height="48"
              />
              <span class="font-bold">Git</span>
            </div>

            <div class="my-5 flex flex-col items-center">
              <span
                class="iconify mb-1"
                data-icon="vscode-icons:file-type-rest"
                data-width="48"
                data-height="48"
              />
              <span class="font-bold">RESTful API</span>
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
