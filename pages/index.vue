<template>
  <div class="page-top">
    <TopIntro />
    <AboutMe />
    <MyHistory />
    <MyWork />
    <ContactMe />
    <TopFooter />
  </div>
</template>

<script>
import TopIntro from '@/components/top/TopIntro'
import AboutMe from '@/components/top/AboutMe'
import MyHistory from '@/components/top/MyHistory'
import ContactMe from '@/components/top/ContactMe'
import MyWork from '@/components/top/MyWork'
import TopFooter from '@/components/top/TopFooter'

export default {
  name: 'PageTop',
  components: { TopIntro, AboutMe, MyHistory, ContactMe, TopFooter, MyWork },
  component: { TopIntro },
}
</script>

<style lang="scss">
.page-top {
  height: 100%;
}
</style>
