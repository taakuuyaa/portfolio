<template>
  <div class="page-top">
    <TopIntro />
    <AboutMe />
    <TopFooter />
  </div>
</template>

<script>
import TopIntro from '@/components/top/TopIntro'
import AboutMe from '@/components/top/AboutMe'
import TopFooter from '@/components/top/TopFooter'

export default {
  name: 'PageTop',
  components: { TopIntro, AboutMe, TopFooter },
  component: { TopIntro },
}
</script>

<style lang="scss">
.page-top {
  height: 100%;
}
</style>
