<template>
  <nav class="navbar is-white" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item">
        <nuxt-link to="/" class="navbar-item">taakuuyaa</nuxt-link>
      </div>
      <div
        class="navbar-burger"
        data-target="navMenu"
        :class="{ 'is-active': isMenuActive }"
        @click="openMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div
      id="navMenu"
      class="navbar-menu"
      :class="{ 'is-active': isMenuActive }"
    >
      <div class="navbar-end">
        <nuxt-link to="/" class="navbar-item">Top</nuxt-link>
        <nuxt-link to="/work" class="navbar-item">Work</nuxt-link>
        <nuxt-link to="/blog" class="navbar-item">Blog</nuxt-link>
        <nuxt-link to="/contact" class="navbar-item">Contact</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      isMenuActive: false,
    }
  },
  watch: {
    $route() {
      this.isMenuActive = false
    },
  },
  methods: {
    openMenu() {
      this.isMenuActive = !this.isMenuActive
    },
  },
}
</script>

<style lang="scss" scoped></style>
