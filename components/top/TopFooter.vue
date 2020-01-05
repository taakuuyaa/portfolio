<template>
  <footer class="section hero is-dark">
    <div class="container">
      <div class="sns buttons">
        <div class="column">
          <a
            href="https://github.com/taakuuyaa"
            target="_blank"
            class="icon-link"
          >
            <font-awesome-icon :icon="['fab', 'github']" class="fa-3x" />
          </a>
        </div>
        <div class="column">
          <a
            href="https://twitter.com/_taakuuyaa"
            target="_blank"
            class="icon-link"
          >
            <font-awesome-icon :icon="['fab', 'twitter']" class="fa-3x" />
          </a>
        </div>
        <div class="column">
          <a
            href="https://www.facebook.com/profile.php?id=100036937809528"
            target="_blank"
            class="icon-link"
          >
            <font-awesome-icon :icon="['fab', 'facebook']" class="fa-3x" />
          </a>
        </div>
      </div>
      <div>Copyright © taakuuyaa Oct 2019</div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TopFooter',
}
</script>

<style scoped>
.icon-link {
  color: #ffff;
  text-decoration: none;
}
</style>
