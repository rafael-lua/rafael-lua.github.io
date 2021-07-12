<template>
  <div class="flex items-center justify-center gap-x-10">
    <div
      class="
        flex flex-col
        gap-y-5
        max-width
        break-words
        bg-black bg-opacity-25
        p-3
        rounded-xl
        shadow-md
      "
    >
      <span v-for="(text, index) in history" :key="index">
        {{ text }}
      </span>
    </div>
    <div class="flex">
      <div class="v-line bg-yellow-400 mr-5"></div>
      <div class="flex flex-col">
        <div class="h-div text-xl flex items-center">
          <span
            class="iconify mr-1"
            data-icon="mdi:bullseye-arrow"
            data-width="24"
            data-height="24"
          />
          <span class="uppercase">{{ milestonesText.title }}</span>
        </div>

        <div class="flex flex-col gap-y-8 p-5 break-words">
          <div v-for="(item, index) in milestonesText.items" :key="index">
            <div class="flex items-center gap-x-3">
              <span>&#8226;</span>
              <span class="font-bold">{{ item.name }}</span>
            </div>
            <div v-if="typeof item.description === 'string'">
              <span v-html="item.description"></span>
            </div>
            <div v-else>
              <ul>
                <li
                  v-for="(desc, descIndex) in item.description"
                  :key="descIndex"
                  class="ml-3"
                >
                  <span v-html="desc"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentAbout',

  props: {
    history: {
      type: Array,
      default: () => [],
    },

    milestonesText: {
      type: Object,
      default: () => {},
    },
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
