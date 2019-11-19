<template>
  <footer class="section hero is-dark">
    <div class="container">
      <div class="sns buttons">
        <div class="column">
          <font-awesome-icon :icon="['fab', 'github']" class="fa-3x" />
        </div>
        <div class="column">
          <font-awesome-icon :icon="['fab', 'twitter']" class="fa-3x" />
        </div>
        <div class="column">
          <font-awesome-icon :icon="['fab', 'facebook']" class="fa-3x" />
        </div>
        <div class="column">
          <font-awesome-icon :icon="['fas', 'envelope']" class="fa-3x" />
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

<style scoped></style>
