<template>
  <nav class="navbar is-white" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item">taakuuyaa</div>
      <div class="navbar-burger" data-target="navMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <!-- navbar-brand END -->
    <div id="navMenu" class="navbar-menu">
      <div class="navbar-end">
        <nuxt-link to="/" class="navbar-item">Top</nuxt-link>
        <nuxt-link to="/about" class="navbar-item">About</nuxt-link>
        <nuxt-link to="/work" class="navbar-item">Work</nuxt-link>
        <nuxt-link to="/blog" class="navbar-item">Blog</nuxt-link>
        <nuxt-link to="/contact" class="navbar-item">Contact</nuxt-link>
      </div>
    </div>
    <!-- navbar-menu END -->
  </nav>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>

<style lang="scss" scoped></style>
