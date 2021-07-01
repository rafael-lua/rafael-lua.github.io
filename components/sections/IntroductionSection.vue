<template>
  <div class="flex justify-evenly">
    <div class="flex items-center">
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
    <div>skills</div>
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

.width-limit {
  max-width: 400px;
}
</style>
