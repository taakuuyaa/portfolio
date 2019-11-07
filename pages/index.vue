<template>
  <div class="page-top">
    <TopIntro />
  </div>
</template>

<script>
import TopIntro from '@/components/top/TopIntro'

export default {
  name: 'PageTop',
  components: { TopIntro },
  component: { TopIntro },
}
</script>

<style lang="scss">
.page-top {
  height: 100%;
}
</style>
