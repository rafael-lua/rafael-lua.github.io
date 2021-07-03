<template>
  <div class="flex justify-evenly my-16">
    <div class="flex items-center mx-5">
      <div class="v-line bg-yellow-400 mx-5"></div>
      <div class="flex-col mx-5">
        <div class="tracking-wide my-10 text-5xl font-bold">hi there :)</div>

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
            <Icon icon="fa-brands:github" width="32" height="32" class="mr-3" />
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
            <Icon
              icon="fa-brands:linkedin"
              width="32"
              height="32"
              class="mr-3"
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
            <Icon icon="mdi:at" width="32" height="32" class="mr-3" />
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
          <Icon icon="mdi:tools" width="24" height="24" class="mr-3" />
          <span class="text-lg font-semibold">My main skills</span>
        </div>

        <div class="flex flex-col items-start frame-width">
          <!-- top row of icons -->
          <div class="flex mx-auto gap-x-10">
            <div class="my-5 flex flex-col items-center">
              <Icon
                icon="vscode-icons:file-type-html"
                width="48"
                height="48"
                class="mb-1"
              />
              <span class="font-bold">HTML</span>
            </div>

            <div class="my-5 flex flex-col items-center">
              <Icon
                icon="vscode-icons:file-type-css"
                width="48"
                height="48"
                class="mb-1"
              />
              <span class="font-bold">CSS</span>
            </div>

            <div class="my-5 flex flex-col items-center">
              <Icon
                icon="vscode-icons:file-type-js-official"
                width="48"
                height="48"
                class="mb-1"
              />
              <span class="font-bold">JavaScript</span>
            </div>

            <div class="my-5 flex flex-col items-center">
              <Icon
                icon="vscode-icons:file-type-node"
                width="48"
                height="48"
                class="mb-1"
              />
              <span class="font-bold">Express</span>
            </div>

            <div class="my-5 flex flex-col items-center">
              <Icon
                icon="vscode-icons:file-type-reactjs"
                width="48"
                height="48"
                class="mb-1"
              />
              <span class="font-bold">React</span>
            </div>
          </div>

          <!-- bottom row of icons -->
          <div class="flex mx-auto gap-x-10">
            <div class="my-5 flex flex-col items-center">
              <Icon
                icon="vscode-icons:folder-type-light-redux"
                width="48"
                height="48"
                class="mb-1"
              />
              <span class="font-bold">Redux</span>
            </div>

            <div class="my-5 flex flex-col items-center">
              <Icon
                icon="vscode-icons:file-type-vue"
                width="48"
                height="48"
                class="mb-1"
              />
              <span class="font-bold">Vue</span>
            </div>

            <div class="my-5 flex flex-col items-center">
              <Icon
                icon="vscode-icons:file-type-nuxt"
                width="48"
                height="48"
                class="mb-1"
              />
              <span class="font-bold">Nuxt</span>
            </div>

            <div class="my-5 flex flex-col items-center">
              <Icon
                icon="vscode-icons:file-type-git"
                width="48"
                height="48"
                class="mb-1"
              />
              <span class="font-bold">Git</span>
            </div>

            <div class="my-5 flex flex-col items-center">
              <Icon
                icon="vscode-icons:file-type-rest"
                width="48"
                height="48"
                class="mb-1"
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
import { Icon } from '@iconify/vue2'

export default {
  name: 'IntroductionSection',

  components: {
    Icon,
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
