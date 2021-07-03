<template>
  <div>
    <IntroductionSection />
    <SectionDivider />
    <ContentSection />
  </div>
</template>

<script>
import IntroductionSection from '@/components/sections/IntroductionSection.vue'
import SectionDivider from '@/components/sections/SectionDivider.vue'
import ContentSection from '@/components/sections/ContentSection.vue'

export default {
  components: {
    IntroductionSection,
    SectionDivider,
    ContentSection,
  },
}
</script>
